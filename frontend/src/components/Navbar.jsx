function Navbar() {
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

      <button className="login-button">Sign In</button>
    </header>
  )
}

export default Navbar