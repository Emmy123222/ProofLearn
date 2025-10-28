import React from 'react'
import Button from '../ui/Button'
import { useStacks } from '../../hooks/useStacks'

export default function ConnectWalletButton() {
  const { userData, connectWallet, disconnectWallet } = useStacks()
  const address = (userData as any)?.profile?.stxAddress?.testnet || (userData as any)?.profile?.stxAddress?.mainnet || null
  const connected = !!userData

  return connected ? (
    <div className="flex items-center gap-2">
      <div className="rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 dark:bg-slate-700 dark:text-white">{address ?? 'STX-ADDRESS'}</div>
      <Button variant="ghost" onClick={disconnectWallet}>
        Sign out
      </Button>
    </div>
  ) : (
    <Button variant="ghost" onClick={connectWallet}>
      Connect Wallet
    </Button>
  )
}
