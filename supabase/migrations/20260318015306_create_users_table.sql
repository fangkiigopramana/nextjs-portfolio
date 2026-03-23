-- Tambah ini dulu sebelum create trigger on_users_updated
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;


create table public.users (
  id uuid default uuid_generate_v4() primary key,
  auth_id uuid references auth.users(id) on delete cascade unique,
  email text not null unique,
  full_name text,
  avatar_url text,
  role text default 'user' check (role in ('admin', 'user')),
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-update updated_at
create trigger on_users_updated
  before update on public.users
  for each row execute procedure public.handle_updated_at();

-- Auto-create user saat register
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (auth_id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- RLS
alter table public.users enable row level security;

create policy "Users can view own data"
  on public.users for select
  using (auth_id = auth.uid());

create policy "Admins can view all users"
  on public.users for select
  using (
    exists (
      select 1 from public.users
      where auth_id = auth.uid() and role = 'admin'
    )
  );

create policy "Admins can update all users"
  on public.users for update
  using (
    exists (
      select 1 from public.users
      where auth_id = auth.uid() and role = 'admin'
    )
  );