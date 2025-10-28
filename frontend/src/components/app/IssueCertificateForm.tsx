import React, { useMemo, useState } from 'react'
import Card from '../ui/Card'
import FormInput from '../ui/FormInput'
import Button from '../ui/Button'
import TxStatusModal, { TxState } from './TxStatusModal'

function toBuff32(input: string): Uint8Array {
  const enc = new TextEncoder()
  const bytes = enc.encode(input)
  const out = new Uint8Array(32)
  out.set(bytes.slice(0, 32))
  return out
}

export type IssuedCert = {
  id: string
  courseId: string
  student: string
  issuedAt: string
  txid?: string
}

export default function IssueCertificateForm({ onIssued }: { onIssued: (c: IssuedCert) => void }) {
  const [courseId, setCourseId] = useState('course-101-identifier')
  const [student, setStudent] = useState('ST...')
  const [txState, setTxState] = useState<TxState>({ status: 'idle' })
  const buff32 = useMemo(() => toBuff32(courseId), [courseId])

  const submit = async () => {
    // Placeholder tx flow
    setTxState({ status: 'pending', message: 'Submitting transaction...' })
    try {
      console.log('ISSUE CERT (placeholder):', { buff32, student })
      // Simulate async network
      await new Promise((r) => setTimeout(r, 1200))
      const txid = Math.random().toString(16).slice(2)
      setTxState({ status: 'success', txid })
      onIssued({
        id: txid,
        courseId,
        student,
        issuedAt: new Date().toISOString(),
        txid,
      })
    } catch (e: any) {
      setTxState({ status: 'error', error: e?.message ?? 'Failed to issue certificate' })
    }
  }

  return (
    <>
      <Card title="Issue Certificate">
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput label="Course ID" value={courseId} onChange={(e) => setCourseId((e.target as HTMLInputElement).value)} />
          <FormInput label="Student Address" value={student} onChange={(e) => setStudent((e.target as HTMLInputElement).value)} />
        </div>
        <div className="mt-3">
          <Button onClick={submit}>Submit (Mint)</Button>
        </div>
      </Card>

      <TxStatusModal open={txState.status !== 'idle'} state={txState} onClose={() => setTxState({ status: 'idle' })} />
    </>
  )
}
