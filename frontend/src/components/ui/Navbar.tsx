import React from 'react'
import { NavLink } from 'react-router-dom'
import ConnectWalletButton from '../web3/ConnectWalletButton'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="bg-pl-card shadow-sm dark:bg-pld-card">
      <div className="mx-auto flex max-w-6xl items-center gap-4 p-4">
        <div className="text-xl font-semibold">Proof Learning</div>
        <div className="ml-auto flex items-center gap-3 text-sm">
          <NavLink to="/" end className={({ isActive }: { isActive: boolean }) => `rounded px-3 py-2 ${isActive ? 'bg-pl-primary text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-pld-text dark:hover:bg-slate-800'}`}>
            Home
          </NavLink>
          <NavLink to="/instructor" className={({ isActive }: { isActive: boolean }) => `rounded px-3 py-2 ${isActive ? 'bg-pl-primary text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-pld-text dark:hover:bg-slate-800'}`}>
            Instructor
          </NavLink>
          <NavLink to="/student" className={({ isActive }: { isActive: boolean }) => `rounded px-3 py-2 ${isActive ? 'bg-pl-primary text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-pld-text dark:hover:bg-slate-800'}`}>
            Student
          </NavLink>
          <NavLink to="/verify" className={({ isActive }: { isActive: boolean }) => `rounded px-3 py-2 ${isActive ? 'bg-pl-primary text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-pld-text dark:hover:bg-slate-800'}`}>
            Verify
          </NavLink>
          <ThemeToggle />
          <ConnectWalletButton />
        </div>
      </div>
    </nav>
  )
}
