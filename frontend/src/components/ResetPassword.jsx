import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router'
import { authService } from '../services/authService'

const validatePassword = (pwd) => {
  const errors = []
  if (pwd.length < 8) errors.push('Password must be at least 8 characters')
  if (!/[A-Za-z]/.test(pwd)) errors.push('Password must contain at least one letter')
  if (!/\d/.test(pwd)) errors.push('Password must contain at least one number')
  return errors
}

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token')
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!token) {
      setError('This password reset link is invalid or has expired. Please request a new one.')
    }
  }, [token])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    
    if (!password) {
      setError('Please enter a new password.')
      return
    }
    
    const passwordErrors = validatePassword(password)
    if (passwordErrors.length > 0) {
      setError(passwordErrors[0])
      return
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    
    setSubmitting(true)
    
    try {
      await authService.resetPassword({ token, password })
      setSuccess(true)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (err) {
      setError(err.message || 'Unable to reset your password. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <>
        <p className="eyebrow">Success</p>
        <h2>Password reset successfully</h2>
        <p>Your password has been reset. Redirecting to sign in...</p>
        <p className="auth-message" role="alert">Your password has been reset successfully.</p>
        <button 
          type="button" 
          className="primary-button"
          onClick={() => navigate('/')}
          style={{ marginTop: '20px' }}
        >
          Return to Sign In
        </button>
      </>
    )
  }

  return (
    <>
      <p className="eyebrow">Reset Password</p>
      <h2>Reset your password</h2>
      <p>Enter a new password for your account.</p>
      
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="new-password">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              id="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
              disabled={submitting}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              disabled={submitting}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm password</label>
          <div className="password-field">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
              disabled={submitting}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              disabled={submitting}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        
        <button type="submit" disabled={submitting}>
          {submitting ? 'Resetting password...' : 'Reset Password'}
        </button>
        
        {error && <p className="form-error" role="alert">{error}</p>}
      </form>
    </>
  )
}
