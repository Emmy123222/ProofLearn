import React from 'react'

type Props = {
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export default function Card({ title, children, footer, className = '' }: Props) {
  return (
    <div className={`rounded-lg border border-pl-border bg-pl-card p-4 shadow-sm dark:border-pld-border dark:bg-pld-card ${className}`}>
      {title && <h3 className="mb-3 text-lg font-medium">{title}</h3>}
      <div>{children}</div>
      {footer && <div className="mt-3 border-t border-pl-border pt-3 text-sm text-pl-muted dark:border-pld-border dark:text-pld-muted">{footer}</div>}
    </div>
  )
}
