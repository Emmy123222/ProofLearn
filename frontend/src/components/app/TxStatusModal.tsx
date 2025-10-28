import React from 'react'
import Modal from '../ui/Modal'
import Loader from '../ui/Loader'
import Alert from '../ui/Alert'

export type TxState =
  | { status: 'idle' }
  | { status: 'pending'; message?: string }
  | { status: 'success'; txid: string }
  | { status: 'error'; error: string }

export default function TxStatusModal({ open, state, onClose }: { open: boolean; state: TxState; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Transaction Status">
      {state.status === 'pending' && (
        <div className="flex items-center gap-3">
          <Loader label={state.message ?? 'Waiting for confirmation...'} />
        </div>
      )}
      {state.status === 'success' && (
        <Alert type="success">
          <div className="space-y-2">
            <div>Certificate issued successfully.</div>
            <a className="underline" href={`https://explorer.hiro.so/txid/${state.txid}?chain=devnet`} target="_blank" rel="noreferrer">
              View on Explorer
            </a>
          </div>
        </Alert>
      )}
      {state.status === 'error' && <Alert type="error">{state.error}</Alert>}
    </Modal>
  )
}
