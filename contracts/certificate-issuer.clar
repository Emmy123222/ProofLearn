;; certificate-issuer.clar
;; Clarity v2 smart contract for issuing on-chain course completion certificates

;; Note: This contract does not implement any trait.

(define-constant ERR_UNAUTHORIZED (err u100))
(define-constant ERR_ALREADY_REGISTERED (err u101))
(define-constant ERR_COURSE_NOT_FOUND (err u102))
(define-constant ERR_ALREADY_CERTIFIED (err u103))

;; course-id is a fixed-size buffer identifier (e.g., hashed course slug)
(define-map courses
  { course-id: (buff 32) }
  { instructor: principal }
)

;; Map of certificates keyed by course + student
(define-map certificates
  { course-id: (buff 32), student: principal }
  { issuer: principal, issued-at: uint }
)

(define-read-only (get-course (course-id (buff 32)))
  (map-get? courses { course-id: course-id })
)

(define-read-only (get-certificate (course-id (buff 32)) (student principal))
  (map-get? certificates { course-id: course-id, student: student })
)

(define-read-only (is-certified (course-id (buff 32)) (student principal))
  (is-some (map-get? certificates { course-id: course-id, student: student }))
)

;; Register a course; caller becomes the instructor. Fails if already registered.
(define-public (register-course (course-id (buff 32)))
  (begin
    (match (map-get? courses { course-id: course-id })
      course
      ERR_ALREADY_REGISTERED
      (begin
        (map-set courses { course-id: course-id } { instructor: tx-sender })
        (ok true)
      )
    )
  )
)

;; Only the course instructor can issue a certificate for that course
(define-public (issue-certificate (course-id (buff 32)) (student principal))
  (begin
    (match (map-get? courses { course-id: course-id })
      course
      (let ((instr (get instructor course)))
        (if (is-eq instr tx-sender)
            (begin
              (if (is-some (map-get? certificates { course-id: course-id, student: student }))
                  ERR_ALREADY_CERTIFIED
                  (begin
                    (map-set certificates { course-id: course-id, student: student }
                      { issuer: tx-sender, issued-at: block-height })
                    (ok true)
                  )
              )
            )
            ERR_UNAUTHORIZED
        )
      )
      ERR_COURSE_NOT_FOUND
    )
  )
)
