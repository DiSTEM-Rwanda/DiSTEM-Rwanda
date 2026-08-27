import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router'
import { authService } from '../services/authService'

function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token')
  const [status, setStatus] = useState(token ? 'loading' : 'invalid')
  const [message, setMessage] = useState(token ? 'Verifying your email...' : 'This verification link is invalid or no longer available.')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!token) return
    authService.verifyEmail(token)
      .then(() => { setStatus('success'); setMessage('Email verified successfully!') })
      .catch((error) => {
        setStatus(error.message.includes('expired') ? 'expired' : error.message.includes('already verified') ? 'already' : 'invalid')
        setMessage(error.message)
      })
  }, [token])

  async function resend() {
    setSubmitting(true)
    try {
      await authService.resendVerification({ email })
      setMessage('If an unverified account exists with that email, a verification link has been sent.')
    } catch (error) { setMessage(error.message) } finally { setSubmitting(false) }
  }

  return (
    <section className="section auth-section">
      <div className="auth-panel">
        <p className="eyebrow">DiSTEM Rwanda</p>
        <h2>{message}</h2>
        {status === 'loading' && <p>We are checking your verification link.</p>}
        {status === 'success' && <><p>Your DiSTEM Rwanda account is now verified.</p><button type="button" onClick={() => navigate('/')}>Sign In</button></>}
        {(status === 'expired' || status === 'invalid' || status === 'already') && <>
          {status !== 'already' && <p>Please request a new verification email to continue.</p>}
          {status !== 'already' && <form className="auth-form" onSubmit={(event) => { event.preventDefault(); resend() }}><label htmlFor="verification-email">Email address</label><input id="verification-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required /><button type="submit" disabled={submitting}>{submitting ? 'Sending verification email...' : 'Resend Verification Email'}</button></form>}
          <button type="button" className="link-button" onClick={() => navigate('/')}>Back to Sign In</button>
        </>}
      </div>
    </section>
  )
}

export default VerifyEmail