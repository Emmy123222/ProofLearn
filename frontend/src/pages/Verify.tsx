import React, { useMemo, useState } from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import FormInput from '../components/ui/FormInput'

function toBuff32(input: string): Uint8Array {
  const enc = new TextEncoder()
  const bytes = enc.encode(input)
  const out = new Uint8Array(32)
  out.set(bytes.slice(0, 32))
  return out
}

export default function Verify() {
  const [courseId, setCourseId] = useState('course-101-identifier')
  const [student, setStudent] = useState('ST...')
  const buff32 = useMemo(() => toBuff32(courseId), [courseId])

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Certificate Verification</h1>

      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput
            label="Course ID"
            value={courseId}
            onChange={(e) => setCourseId((e.target as HTMLInputElement).value)}
            placeholder="course-101-identifier"
          />
          <FormInput
            label="Student Principal"
            value={student}
            onChange={(e) => setStudent((e.target as HTMLInputElement).value)}
            placeholder="ST..."
          />
        </div>
        <div className="mt-3 flex gap-3">
          <Button
            variant="secondary"
            onClick={() => {
              console.log('is-certified (placeholder):', { buff32, student })
              alert('is-certified is a placeholder. Integrate Stacks SDK to call read-only function.')
            }}
          >
            Is Certified?
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              console.log('get-certificate (placeholder):', { buff32, student })
              alert('get-certificate is a placeholder. Integrate Stacks SDK to call read-only function.')
            }}
          >
            Get Certificate
          </Button>
        </div>
      </Card>
    </div>
  )
}
