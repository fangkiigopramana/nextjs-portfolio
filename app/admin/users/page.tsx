import { createClient } from '@supabase/supabase-js'

// Service role client — SERVER ONLY
const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function UsersPage() {
  const { data: { users }, error } = await adminSupabase.auth.admin.listUsers()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Email</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Created</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Last Sign In</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => (
              <tr key={user.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3 text-gray-400">
                  {new Date(user.created_at).toLocaleDateString('id-ID')}
                </td>
                <td className="px-4 py-3 text-gray-400">
                  {user.last_sign_in_at
                    ? new Date(user.last_sign_in_at).toLocaleDateString('id-ID')
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}