'use client'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const supabase = createClient()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/admin')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0F] px-4">
      {/* Blobs */}
      <div className="fixed w-96 h-96 bg-amber-400 rounded-full blur-[120px] opacity-10 -top-20 -left-20 pointer-events-none" />
      <div className="fixed w-80 h-80 bg-purple-700 rounded-full blur-[100px] opacity-10 bottom-0 right-0 pointer-events-none" />

      <div className="relative w-full max-w-sm">
        {/* Card */}
        <div className="bg-[#16161f] border border-white/8 rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="text-2xl font-extrabold mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
              Fangki<span className="text-amber-400">.</span>
            </div>
            <p className="text-gray-500 text-xs">Admin Dashboard</p>
          </div>

          <h1 className="text-lg font-extrabold mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
            Welcome back
          </h1>
          <p className="text-gray-500 text-xs mb-6">Sign in to your admin account</p>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl mb-5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
              </svg>
              {error}
            </div>
          )}

          {/* Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Email Address</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  className="field pl-10"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Password</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  className="field pl-10"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-amber-400/25 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Signing in...
              </>
            ) : 'Sign In →'}
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-6">
          © 2025 Fangki Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  )
}