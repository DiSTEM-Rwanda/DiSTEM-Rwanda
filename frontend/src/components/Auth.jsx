function Auth() {
  return (
    <section id="signin" className="section auth-section">
      <p className="eyebrow">Welcome to DiSTEM Rwanda</p>

      <h2>Sign in to continue learning</h2>

      <p>
        Access your learning resources, track progress and connect with
        the DiSTEM Rwanda learning community.
      </p>

      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Sign In</button>
      </form>

      <p className="auth-note">
        Students, teachers and school administrators will have
        role-based access to the platform.
      </p>
    </section>
  )
}

export default Auth