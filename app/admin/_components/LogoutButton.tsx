'use client'
import { createClient } from "@/utils/supabase/client"
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const supabase = createClient()
  const router = useRouter()

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <button onClick={logout} className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700 text-sm text-gray-300">
      Logout
    </button>
  )
}