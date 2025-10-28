import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HeroSection from '../../app/HeroSection'

it('renders title, tagline and CTA buttons', () => {
  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  )

  expect(screen.getByRole('heading', { name: /Proof Learning/i })).toBeInTheDocument()
  expect(screen.getByText(/Issue, verify/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Launch App/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Verify a Certificate/i })).toBeInTheDocument()
})
