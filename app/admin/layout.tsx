import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import LogoutButton from './_components/LogoutButton'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-900 text-white flex flex-col p-4 gap-2">
        <p className="text-xs text-gray-400 mb-4">Admin Panel</p>
        <Link href="/admin" className="px-3 py-2 rounded-lg hover:bg-gray-700 text-sm">
          Dashboard
        </Link>
        <Link href="/admin/users" className="px-3 py-2 rounded-lg hover:bg-gray-700 text-sm">
          Users
        </Link>
        <div className="mt-auto">
          <LogoutButton />
        </div>
      </aside>
      {/* Main */}
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  )
}