import { createClient } from '@/utils/supabase/server'

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Count users via admin API
  const { count } = await supabase
    .from('profiles') // atau table kamu
    .select('*', { count: 'exact', head: true })

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 text-sm">Welcome, {user?.email}</p>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 border">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="text-3xl font-bold mt-1">{count ?? 0}</p>
        </div>
      </div>
    </div>
  )
}