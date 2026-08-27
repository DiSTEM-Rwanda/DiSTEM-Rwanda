import { useState } from 'react'
import { authService } from '../services/authService'
import ForgotPassword from './ForgotPassword'

// Validation functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (pwd) => {
  const errors = []
  if (pwd.length < 8) errors.push('Password must be at least 8 characters')
  if (!/[A-Za-z]/.test(pwd)) errors.push('Password must contain at least one letter')
  if (!/\d/.test(pwd)) errors.push('Password must contain at least one number')
  return errors
}

// Login Form Component
function LoginForm({ email, setEmail, password, setPassword, message, verificationRequired, submitting, handleLoginSubmit, handleResendVerification, setMode, setMessage, setEmail: clearEmail, setPassword: clearPassword }) {
  return (
    <>
      <p className="eyebrow">Welcome to DiSTEM Rwanda</p>
      <h2>Sign in to continue learning</h2>
      <p>Access your learning resources and track your progress securely.</p>
      
      <form className="auth-form" onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="login-email">Email address</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <p className="form-help">
            <button
              type="button"
              className="link-button"
              onClick={() => {
                setMode('forgot-password')
                setMessage('')
                clearEmail('')
                clearPassword('')
              }}
            >
              Forgot password?
            </button>
          </p>
        </div>
        
        <button type="submit" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign In'}
        </button>
        
        {message && <p className="auth-message" role="alert">{message}</p>}
        {verificationRequired && <button type="button" className="link-button" onClick={handleResendVerification}>Resend Verification Email</button>}
      </form>
      
      <p className="auth-note">
        Don't have an account?{' '}
        <button
          type="button"
          className="link-button"
          onClick={() => {
            setMode('register')
            setMessage('')
            clearEmail('')
            clearPassword('')
          }}
        >
          Create Account
        </button>
      </p>
      
      <p className="auth-note">Your role and access are assigned securely by DiSTEM Rwanda.</p>
    </>
  )
}

// Register Form Component
function RegisterForm({ firstName, setFirstName, lastName, setLastName, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, confirmPassword, setConfirmPassword, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, message, errors, submitting, handleRegisterSubmit, setMode, setMessage, setFirstName: clearFirstName, setLastName: clearLastName, setRegisterEmail: clearRegisterEmail, setRegisterPassword: clearRegisterPassword, setConfirmPassword: clearConfirmPassword }) {
  return (
    <>
      <p className="eyebrow">Welcome to DiSTEM Rwanda</p>
      <h2>Create your student account</h2>
      <p>Join our learning community and start your educational journey.</p>
      
      <form className="auth-form" onSubmit={handleRegisterSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
            required
          />
          {errors.firstName && <p className="form-error">{errors.firstName}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
            required
          />
          {errors.lastName && <p className="form-error">{errors.lastName}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="registerEmail">Email address</label>
          <input
            type="email"
            id="registerEmail"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            autoComplete="email"
            required
          />
          {errors.registerEmail && <p className="form-error">{errors.registerEmail}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="registerPassword">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              id="registerPassword"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.registerPassword && <p className="form-error">{errors.registerPassword}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <div className="password-field">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
        </div>
        
        <button type="submit" disabled={submitting}>
          {submitting ? 'Creating account…' : 'Create Account'}
        </button>
        
        {message && <p className="auth-message" role="alert">{message}</p>}
      </form>
      
      <p className="auth-note">
        Already have an account?{' '}
        <button
          type="button"
          className="link-button"
          onClick={() => {
            setMode('login')
            setMessage('')
            clearFirstName('')
            clearLastName('')
            clearRegisterEmail('')
            clearRegisterPassword('')
            clearConfirmPassword('')
          }}
        >
          Sign In
        </button>
      </p>
      
      <p className="auth-note">Your account will be assigned the Student role by DiSTEM Rwanda.</p>
    </>
  )
}

function Auth({ onLogin }) {
  const [mode, setMode] = useState('login') // 'login', 'register', or 'forgot-password'
  
  // Login state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // Register state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  // Shared state
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [verificationRequired, setVerificationRequired] = useState(false)

  async function handleResendVerification() {
    setSubmitting(true)
    try {
      await authService.resendVerification({ email })
      setMessage('If an unverified account exists with that email, a verification link has been sent.')
    } catch (error) {
      setMessage(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  const validateRegistration = () => {
    const newErrors = {}
    
    if (!firstName.trim()) newErrors.firstName = 'First name is required'
    if (!lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!registerEmail.trim()) newErrors.registerEmail = 'Email is required'
    else if (!validateEmail(registerEmail)) newErrors.registerEmail = 'Please enter a valid email address'
    if (!registerPassword) newErrors.registerPassword = 'Password is required'
    else {
      const pwdErrors = validatePassword(registerPassword)
      if (pwdErrors.length > 0) newErrors.registerPassword = pwdErrors.join('. ')
    }
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (registerPassword !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle login
  async function handleLoginSubmit(event) {
    event.preventDefault()
    setMessage('')
    setErrors({})
    setVerificationRequired(false)
    setSubmitting(true)
    
    try {
      await onLogin({ email, password })
    } catch (error) {
      setMessage(error.message)
      setVerificationRequired(error.message === 'Please verify your email address before signing in.')
    } finally {
      setSubmitting(false)
    }
  }

  // Handle registration
  async function handleRegisterSubmit(event) {
    event.preventDefault()
    setMessage('')
    
    if (!validateRegistration()) {
      setSubmitting(false)
      return
    }
    
    setSubmitting(true)
    
    try {
      await authService.register({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: registerEmail.trim(),
        password: registerPassword
      })
      
      // Account created successfully, show message and switch to login
      setMessage('Account created. Please check your email to verify your account before signing in.')
      
      // Reset form and switch to login mode
      setTimeout(() => {
        setMode('login')
        setFirstName('')
        setLastName('')
        setRegisterEmail('')
        setRegisterPassword('')
        setConfirmPassword('')
        setErrors({})
      }, 500)
    } catch (error) {
      if (error.status === 409) {
        setMessage('An account with this email already exists. Please sign in instead.')
      } else if (error.message.includes('Unable to complete')) {
        setMessage('Unable to create your account right now. Please try again.')
      } else {
        setMessage(error.message || 'An error occurred. Please try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section auth-section" id="auth">
      {mode === 'login' ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          message={message}
          submitting={submitting}
          verificationRequired={verificationRequired}
          handleLoginSubmit={handleLoginSubmit}
          handleResendVerification={handleResendVerification}
          setMode={setMode}
          setMessage={setMessage}
        />
      ) : mode === 'register' ? (
        <RegisterForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          registerEmail={registerEmail}
          setRegisterEmail={setRegisterEmail}
          registerPassword={registerPassword}
          setRegisterPassword={setRegisterPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          message={message}
          errors={errors}
          submitting={submitting}
          handleRegisterSubmit={handleRegisterSubmit}
          setMode={setMode}
          setMessage={setMessage}
        />
      ) : (
        <ForgotPassword
          onBackToSignIn={() => {
            setMode('login')
            setMessage('')
            setEmail('')
            setPassword('')
          }}
          onSuccess={() => {
            setMode('login')
            setEmail('')
            setPassword('')
          }}
        />
      )}
    </section>
  )
}
export default Auth
