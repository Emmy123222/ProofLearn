import React from 'react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-4xl font-bold">Proof Learning</h1>
      <p className="mx-auto mt-3 max-w-2xl text-pl-muted dark:text-pld-muted">
        Issue, verify, and showcase on-chain course certificates on Stacks.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link to="/instructor"><Button>Launch App</Button></Link>
        <Link to="/verify"><Button variant="secondary">Verify a Certificate</Button></Link>
      </div>
    </section>
  )
}
