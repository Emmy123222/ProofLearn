import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export default function FormInput({ label, error, className = '', ...props }: Props) {
  return (
    <label className="block">
      {label && <div className="mb-2 text-sm font-medium">{label}</div>}
      <input {...props} className={`w-full rounded border px-3 py-2 outline-none focus:ring ${className}`} />
      {error && <div className="mt-1 text-xs text-red-600">{error}</div>}
    </label>
  )
}
