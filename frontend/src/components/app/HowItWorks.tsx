import React from 'react'

const steps = [
  { title: 'Connect Wallet', desc: 'Use Hiro/Xverse to connect your Stacks wallet.' },
  { title: 'Issue Certificate', desc: 'Instructors mint certificates for students.' },
  { title: 'Verify', desc: 'Anyone can verify a certificate on-chain.' },
]

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-2xl font-semibold text-center">How it works</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-lg border border-pl-border bg-pl-card p-5 text-center dark:border-pld-border dark:bg-pld-card">
            <div className="text-lg font-medium">{s.title}</div>
            <div className="mt-2 text-sm text-pl-muted dark:text-pld-muted">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
