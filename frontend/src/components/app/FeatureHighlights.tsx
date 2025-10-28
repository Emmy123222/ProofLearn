import React from 'react'

const feats = [
  { title: 'On-chain verification', desc: 'Certificates are recorded on Stacks for transparency.' },
  { title: 'Own your achievements', desc: 'Students truly own their certificates.' },
  { title: 'Simple + fast', desc: 'Mint and verify with just a few clicks.' },
]

export default function FeatureHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-2xl font-semibold text-center">Why Proof Learning</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {feats.map((f) => (
          <div key={f.title} className="rounded-lg border border-pl-border bg-pl-card p-5 text-center dark:border-pld-border dark:bg-pld-card">
            <div className="text-lg font-medium">{f.title}</div>
            <div className="mt-2 text-sm text-pl-muted dark:text-pld-muted">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
