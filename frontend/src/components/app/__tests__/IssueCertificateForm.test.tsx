import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import IssueCertificateForm from '../../app/IssueCertificateForm'

describe('IssueCertificateForm', () => {
  it('submits and shows success modal, calls onIssued', async () => {
    const onIssued = jest.fn()
    render(<IssueCertificateForm onIssued={onIssued} />)

    const submit = screen.getByRole('button', { name: /submit \(mint\)/i })
    fireEvent.click(submit)

    // Pending state appears
    expect(await screen.findByText(/waiting for confirmation/i)).toBeInTheDocument()

    // After simulated async, success appears
    await waitFor(() => expect(screen.getByText(/Certificate issued successfully/i)).toBeInTheDocument())

    expect(onIssued).toHaveBeenCalled()
  })
})
