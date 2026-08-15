import { useState } from 'react'

function Auth({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!email || !password) {
      setMessage('Please enter your email and password.')
      return
    }

    if (onLogin) {
      onLogin({
        email,
        role,
      })
    }

    setMessage(`Welcome to DiSTEM Rwanda, ${email}!`)
  }

  return (
    <section className="section auth-section" id="auth">
      <p className="eyebrow">Welcome to DiSTEM Rwanda</p>

      <h2>Sign in to continue learning</h2>

      <p>
        Access your learning resources, track progress and connect with
        the DiSTEM Rwanda learning community.
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword ? 'Hide password' : 'Show password'
              }
              title={
                showPassword ? 'Hide password' : 'Show password'
              }
            >
              {showPassword ? (
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3l18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M2 12s3.5-6 10-6c6.5 0 10 6 10 6s-3.5 6-10 6c-6.5 0-10-6-10-6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="role">I am a</label>

          <select
            id="role"
            name="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="administrator">
              School Administrator
            </option>
          </select>
        </div>

        <button type="submit">
          Sign In
        </button>

        {message && (
          <p className="auth-message" role="status">
            {message}
          </p>
        )}
      </form>

      <p className="auth-note">
        Students, teachers and school administrators will have
        role-based access to the platform.
      </p>
    </section>
  )
}

export default Auth