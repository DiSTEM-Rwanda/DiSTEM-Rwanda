function App() {
  return (
    <div className="app">
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

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">STEM Education for Every Learner</p>

            <h1>
              Learn STEM.
              <br />
              <span>Anywhere. Anytime.</span>
            </h1>

            <p className="hero-text">
              DiSTEM Rwanda is an offline-first digital learning platform
              designed to bring quality STEM education to learners and
              teachers, even where internet access is limited.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">Start Learning</button>
              <button className="secondary-button">Explore DiSTEM</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-icon">🧪</div>
            <h2>STEM Learning</h2>
            <p>
              Mathematics, Physics, Chemistry, Biology, Technology and more.
            </p>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">Our Mission</p>
          <h2>Education without connectivity barriers</h2>

          <p>
            DiSTEM Rwanda provides curriculum-aligned learning resources,
            interactive activities, assessments, teacher support and
            intelligent learning assistance through an offline-first
            approach.
          </p>
        </section>

        <section id="learning" className="features">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Digital Learning</h3>
            <p>
              Access curriculum-aligned STEM learning materials and resources.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>AI Learning Assistant</h3>
            <p>
              Get intelligent learning support designed to help students
              understand difficult concepts.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Assessments</h3>
            <p>
              Practice with quizzes and assessments while tracking learning
              progress.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📡</div>
            <h3>Offline First</h3>
            <p>
              Continue learning even when internet connectivity is limited or
              unavailable.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="logo">
          DiSTEM <span>Rwanda</span>
        </div>

        <p>Offline Today, Future Ready Tomorrow.</p>

        <p className="copyright">
          © 2026 DiSTEM Rwanda. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App