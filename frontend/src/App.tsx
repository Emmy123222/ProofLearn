import React, { useMemo, useState } from 'react'

function toBuff32(input: string): Uint8Array {
  const enc = new TextEncoder()
  const bytes = enc.encode(input)
  const out = new Uint8Array(32)
  out.set(bytes.slice(0, 32))
  return out
}

export default function App() {
  const [courseId, setCourseId] = useState('course-101-identifier')
  const [student, setStudent] = useState('ST...')
  const buff32 = useMemo(() => toBuff32(courseId), [courseId])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-4xl p-6">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold">On-chain Certificate Issuer</h1>
          <p className="text-gray-600">React + TypeScript + Tailwind starter</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-lg border bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-lg font-medium">Register Course</h2>
            <label className="mb-2 block text-sm font-medium">Course ID</label>
            <input
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full rounded border px-3 py-2 outline-none focus:ring"
              placeholder="course-101-identifier"
            />
            <button
              className="mt-3 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              onClick={() => {
                console.log('Register course (placeholder):', buff32)
                alert('Register course is a placeholder. Integrate Stacks SDK to call the contract.')
              }}
            >
              Register
            </button>
          </section>

          <section className="rounded-lg border bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-lg font-medium">Issue Certificate</h2>
            <label className="mb-2 block text-sm font-medium">Course ID</label>
            <input
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full rounded border px-3 py-2 outline-none focus:ring"
              placeholder="course-101-identifier"
            />
            <label className="mt-3 mb-2 block text-sm font-medium">Student Principal</label>
            <input
              value={student}
              onChange={(e) => setStudent(e.target.value)}
              className="w-full rounded border px-3 py-2 outline-none focus:ring"
              placeholder="ST..."
            />
            <button
              className="mt-3 rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
              onClick={() => {
                console.log('Issue certificate (placeholder):', { buff32, student })
                alert('Issue certificate is a placeholder. Integrate Stacks SDK to call the contract.')
              }}
            >
              Issue
            </button>
          </section>

          <section className="rounded-lg border bg-white p-4 shadow-sm md:col-span-2">
            <h2 className="mb-3 text-lg font-medium">Verify</h2>
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
                <label className="mb-2 block text-sm font-medium">Student Principal</label>
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
                onClick={() => alert('is-certified (placeholder)')}
              >
                Is Certified?
              </button>
              <button
                className="rounded bg-slate-700 px-4 py-2 text-white hover:bg-slate-800"
                onClick={() => alert('get-certificate (placeholder)')}
              >
                Get Certificate
              </button>
            </div>
          </section>
        </div>

        <footer className="mt-10 text-sm text-gray-500">
          To enable on-chain actions, wire up Hiro Wallet and @stacks/transactions.
        </footer>
      </div>
    </div>
  )
}
