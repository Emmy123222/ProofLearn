import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ConnectWalletButton from '../../web3/ConnectWalletButton'

// Mock @stacks/connect namespace used inside the hook
jest.mock('@stacks/connect', () => {
  return {
    AppConfig: class {},
    UserSession: class {
      isUserSignedIn() { return false }
      isSignInPending() { return false }
      signUserOut() {}
      loadUserData() { return null }
    },
    request: jest.fn().mockResolvedValue(undefined),
  }
})

// Mock the hook file indirectly by leaving it as-is; our namespace mock above will be used

describe('ConnectWalletButton', () => {
  it('triggers connect flow on click', async () => {
    const { request } = jest.requireMock('@stacks/connect')

    render(
      <MemoryRouter>
        <ConnectWalletButton />
      </MemoryRouter>
    )

    const btn = screen.getByRole('button', { name: /connect wallet/i })
    fireEvent.click(btn)

    expect(request).toHaveBeenCalledWith('auth', expect.any(Object))
  })
})
