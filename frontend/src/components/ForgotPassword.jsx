import { useState } from 'react'
import { authService } from '../services/authService'

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export default function ForgotPassword({ onBackToSignIn, onSuccess }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess(false)
    
    // Validate email
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    
    setSubmitting(true)
    
    try {
      await authService.forgotPassword({ email: email.trim() })
      setSuccess(true)
      setEmail('')
      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000)
      }
    } catch (err) {
      setError(err.message || 'Unable to process your request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <p className="eyebrow">Password Recovery</p>
      <h2>Forgot your password?</h2>
      <p>Enter your email address and we'll send you a link to reset your password.</p>
      
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reset-email">Email address</label>
          <input
            type="email"
            id="reset-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            disabled={submitting}
          />
        </div>
        
        <button type="submit" disabled={submitting}>
          {submitting ? 'Sending reset link...' : 'Send Reset Link'}
        </button>
        
        {error && <p className="form-error" role="alert">{error}</p>}
        {success && <p className="auth-message" role="alert">If an account with that email exists, a password reset link has been sent. Please check your inbox.</p>}
      </form>
      
      <p className="auth-note">
        <button
          type="button"
          className="link-button"
          onClick={onBackToSignIn}
        >
          Back to Sign In
        </button>
      </p>
    </>
  )
}
