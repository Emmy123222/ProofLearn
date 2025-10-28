import React, { useMemo, useState } from 'react'

function toBuff32(input: string): Uint8Array {
  const enc = new TextEncoder()
  const bytes = enc.encode(input)
  const out = new Uint8Array(32)
  out.set(bytes.slice(0, 32))
  return out
}

export default function InstructorDashboard() {
  const [issued, setIssued] = useState<Array<{ id: string; courseId: string; student: string; issuedAt: string; txid?: string }>>([])
  const [courseId, setCourseId] = useState('course-101-identifier')
  const buff32 = useMemo(() => toBuff32(courseId), [courseId])

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Instructor Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <section className="md:col-span-2">
          <div className="rounded-lg border border-pl-border bg-pl-card p-4 shadow-sm dark:border-pld-border dark:bg-pld-card">
            <h2 className="mb-3 text-lg font-medium">Register Course</h2>
            <label className="mb-2 block text-sm font-medium">Course ID</label>
            <input
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full rounded border px-3 py-2 outline-none focus:ring"
              placeholder="course-101-identifier"
            />
            <button
              className="mt-3 rounded bg-pl-primary px-4 py-2 text-white hover:brightness-110"
              onClick={() => {
                console.log('Register course (placeholder):', buff32)
                alert('Register course is a placeholder. Integrate Stacks SDK to call the contract.')
              }}
            >
              Register
            </button>
          </div>
        </section>

        <section>
          <div className="rounded-lg border border-pl-border bg-pl-card p-4 shadow-sm dark:border-pld-border dark:bg-pld-card">
            <h2 className="mb-3 text-lg font-medium">Issue Certificate</h2>
            {/* Reuse the dedicated IssueCertificateForm component */}
            {/** Keeping inline to avoid import churn if file moves; alternatively import the component **/}
            {/* @ts-ignore - dynamically require to avoid circular updates */}
            {React.createElement(require('../components/app/IssueCertificateForm').default, {
              onIssued: (c: any) => setIssued((prev) => [c, ...prev]),
            })}
          </div>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="mb-3 text-lg font-medium">Issued Certificates</h2>
        <div className="overflow-x-auto rounded border border-pl-border dark:border-pld-border">
          <table className="min-w-full divide-y divide-pl-border dark:divide-pld-border">
            <thead className="bg-pl-card dark:bg-pld-card">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Certificate ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Course</th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Student</th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Issued</th>
                <th className="px-4 py-2" />
              </tr>
            </thead>
            <tbody className="divide-y divide-pl-border dark:divide-pld-border">
              {issued.length === 0 ? (
                <tr>
                  <td className="px-4 py-3 text-sm text-pl-muted dark:text-pld-muted" colSpan={5}>
                    No certificates yet.
                  </td>
                </tr>
              ) : (
                issued.map((c) => (
                  <tr key={c.id} className="bg-pl-card dark:bg-pld-card">
                    <td className="px-4 py-2 text-sm mono">{c.id}</td>
                    <td className="px-4 py-2 text-sm">{c.courseId}</td>
                    <td className="px-4 py-2 text-sm">{c.student}</td>
                    <td className="px-4 py-2 text-sm">{new Date(c.issuedAt).toLocaleString()}</td>
                    <td className="px-4 py-2 text-right text-sm">
                      {c.txid ? (
                        <a className="underline" href={`https://explorer.hiro.so/txid/${c.txid}?chain=devnet`} target="_blank" rel="noreferrer">
                          View TX
                        </a>
                      ) : null}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="mt-10 text-sm text-pl-muted dark:text-pld-muted">
        To enable on-chain actions, wire up Hiro Wallet and @stacks/transactions.
      </footer>
    </div>
  )
}
