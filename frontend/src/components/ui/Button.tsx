import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium focus:outline-none focus:ring disabled:opacity-60 disabled:cursor-not-allowed'
  const styles =
    variant === 'primary'
      ? 'bg-pl-primary text-white hover:brightness-110 dark:bg-pld-primary dark:text-slate-900 dark:hover:brightness-110'
      : variant === 'secondary'
      ? 'bg-pl-secondary text-white hover:brightness-110 dark:bg-slate-700 dark:text-white'
      : 'bg-transparent text-gray-800 hover:bg-gray-100 dark:text-pld-text dark:hover:bg-slate-800'
  return <button className={`${base} ${styles} ${className}`} {...props} />
}
