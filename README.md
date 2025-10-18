# On-chain Certificate Issuer

A Clarity smart contract for issuing and verifying course completion certificates on the Stacks blockchain.

## Goal of the Project

This is a smart contract for an on-chain certificate issuing system. It allows course creators or instructors to issue certificates to students who complete a course. The certificates are stored on-chain and can be verified publicly.

## What the Contract Does (Main Features)

- **register-course**: An instructor registers a course and becomes its owner/instructor.
- **issue-certificate**: Only the registered course instructor can issue a certificate to a student.
- **get-certificate**: Anyone can view a student’s certificate details for a specific course.
- **is-certified**: Returns true if a student has been issued a certificate for a course.

## Contract Design

- Courses are identified by a `buff 32` course ID. You can use a hash of a course slug or code.
- Certificates are keyed by `(course-id, student)` and store the issuer principal and the `block-height` when issued.
- Only the course instructor (the account that registered the course) can issue certificates for that course.

## Project Structure

```
certificate-issuer/
├── contracts/
│   └── certificate-issuer.clar        # Main Clarity smart contract
│
├── tests/
│   └── certificate-issuer_test.ts     # Starter test file (Clarinet)
│
├── README.md                          # Project overview, purpose, and usage
├── Clarinet.toml                      # Clarinet config file
├── settings.json                      # Clarinet project settings (optional)
└── .gitignore                         # Ignore build files, node_modules, etc.
```

## Getting Started

Prerequisites:
- Install Clarinet: https://docs.hiro.so/stacks/clarinet

Commands (from `certificate-issuer/`):
- `clarinet check` – Type checks the contract
- `clarinet test` – Runs tests in `tests/`
- `clarinet console` – Opens a REPL for interactive development

## Future Roadmap

- **NFT-based certificates**: Mint NFTs to represent certificates.
- **Multiple courses per student**: Track multiple course completions with richer metadata.
- **Instructor reputation**: Build a reputation/attestation system for instructors.
- **Employer verification**: Provide easy on-chain verification endpoints for employers.

## License

MIT
