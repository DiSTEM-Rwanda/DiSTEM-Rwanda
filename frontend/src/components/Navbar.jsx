function Navbar({ user, onLogout }) {
  function scrollToDashboard() {
    document
      .getElementById('dashboard')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="logo">
        DiSTEM <span>Rwanda</span>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#learning">Learning</a>
        <a href="#teachers">Teachers</a>
      </nav>

      {!user ? (
        <a href="#auth" className="login-button">
          Sign In
        </a>
      ) : (
        <div className="user-menu">
          <span className="user-role">
            👤 {user.role === 'student'
              ? 'Student'
              : user.role === 'teacher'
                ? 'Teacher'
                : 'Administrator'}
          </span>

          <button
            type="button"
            className="dashboard-button"
            onClick={scrollToDashboard}
          >
            Dashboard
          </button>

          <button
            type="button"
            className="logout-button"
            onClick={onLogout}
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar