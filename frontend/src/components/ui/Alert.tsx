import React from 'react'

type Props = { type?: 'success' | 'error' | 'info'; children: React.ReactNode }

export default function Alert({ type = 'info', children }: Props) {
  const styles =
    type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : type === 'error' ? 'bg-red-50 text-red-800 border-red-200' : 'bg-blue-50 text-blue-800 border-blue-200'
  return <div className={`rounded border px-3 py-2 text-sm ${styles}`}>{children}</div>
}
