import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white/60">
      <div className="mx-auto max-w-6xl p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Proof Learning. All rights reserved.
      </div>
    </footer>
  )
}
