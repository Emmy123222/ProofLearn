import React, { useMemo, useState } from 'react'

function toBuff32(input: string): Uint8Array {
  const enc = new TextEncoder()
  const bytes = enc.encode(input)
  const out = new Uint8Array(32)
  out.set(bytes.slice(0, 32))
  return out
}

export default function StudentDashboard() {
  const [courseId, setCourseId] = useState('course-101-identifier')
  const [student, setStudent] = useState('ST...')
  const [certs, setCerts] = useState<Array<{ id: string; courseId: string; issuer: string; student: string; issuedAt: string; txid?: string }>>([
    { id: 'demo123', courseId: 'course-101-identifier', issuer: 'STX-ISSUER', student: 'ST-STUDENT', issuedAt: new Date().toISOString() },
  ])
  const [filter, setFilter] = useState('')
  const buff32 = useMemo(() => toBuff32(courseId), [courseId])

  const filtered = certs.filter((c) => (filter ? c.courseId.includes(filter) : true))

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Student Dashboard</h1>

      <section className="rounded-lg border border-pl-border bg-pl-card p-4 shadow-sm dark:border-pld-border dark:bg-pld-card">
        <h2 className="mb-3 text-lg font-medium">Check My Certification</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Course ID</label>
            <input
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full rounded border px-3 py-2 outline-none focus:ring"
              placeholder="course-101-identifier"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">My Principal</label>
            <input
              value={student}
              onChange={(e) => setStudent(e.target.value)}
              className="w-full rounded border px-3 py-2 outline-none focus:ring"
              placeholder="ST..."
            />
          </div>
        </div>
        <div className="mt-3 flex gap-3">
          <button
            className="rounded bg-slate-700 px-4 py-2 text-white hover:bg-slate-800"
            onClick={() => {
              console.log('is-certified (placeholder):', { buff32, student })
              alert('is-certified is a placeholder. Integrate Stacks SDK to call read-only function.')
            }}
          >
            Is Certified?
          </button>
          <button
            className="rounded bg-slate-700 px-4 py-2 text-white hover:bg-slate-800"
            onClick={() => {
              console.log('get-certificate (placeholder):', { buff32, student })
              alert('get-certificate is a placeholder. Integrate Stacks SDK to call read-only function.')
            }}
          >
            Get Certificate
          </button>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-medium">My Certificates</h2>
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-60 rounded border px-3 py-2 text-sm outline-none focus:ring"
            placeholder="Filter by course id"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {filtered.length === 0 ? (
            <div className="text-sm text-pl-muted dark:text-pld-muted">No certificates found.</div>
          ) : (
            filtered.map((c) => {
              // @ts-ignore dynamic import pattern
              const CardComp = require('../components/app/CertificateCard').default
              return <CardComp key={c.id} cert={c} />
            })
          )}
        </div>
      </section>

      <footer className="mt-10 text-sm text-pl-muted dark:text-pld-muted">
        Connect your wallet to auto-fill your principal and view your certificates.
      </footer>
    </div>
  )
}
