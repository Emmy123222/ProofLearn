import React, { useEffect, useState } from 'react'
import Button from './Button'

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDark(isDark)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    const root = document.documentElement
    if (next) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Button variant="ghost" onClick={toggle} aria-label="Toggle theme">
      {dark ? 'Light' : 'Dark'} Mode
    </Button>
  )
}
