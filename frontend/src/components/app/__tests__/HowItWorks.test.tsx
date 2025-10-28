import { render, screen } from '@testing-library/react'
import HowItWorks from '../../app/HowItWorks'

it('shows 3 steps', () => {
  render(<HowItWorks />)
  expect(screen.getByText(/How it works/i)).toBeInTheDocument()
  expect(screen.getAllByText(/Connect Wallet|Issue Certificate|Verify/)).toHaveLength(3)
})
