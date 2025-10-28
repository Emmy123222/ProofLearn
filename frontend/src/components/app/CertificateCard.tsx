import React from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'

export type Certificate = {
  id: string
  courseId: string
  issuer: string
  student: string
  issuedAt: string
  txid?: string
}

export default function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <Card className="h-full" title={cert.courseId} footer={<div className="flex flex-wrap items-center gap-3"><span className="text-xs mono">ID: {cert.id}</span>{cert.txid && (<a className="text-xs underline" href={`https://explorer.hiro.so/txid/${cert.txid}?chain=devnet`} target="_blank" rel="noreferrer">View TX</a>)}</div>}>
      <div className="space-y-2 text-sm">
        <div>Issuer: <span className="mono">{cert.issuer}</span></div>
        <div>Student: <span className="mono">{cert.student}</span></div>
        <div>Date: {new Date(cert.issuedAt).toLocaleString()}</div>
        <div className="pt-2">
          <Button variant="secondary" onClick={() => navigator.clipboard.writeText(cert.id)}>Copy ID</Button>
        </div>
      </div>
    </Card>
  )
}
