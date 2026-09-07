import { useNavigate } from 'react-router'

function Hero({ user }) {
  const navigate = useNavigate()

  function goTo(id) {
    if (id === 'courses' && user) {
      navigate('/courses')
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          STEM Education for Every Learner
        </p>

        <h1>
          Offline today.<br />
          <span>Future ready tomorrow.</span>
        </h1>

        <p className="hero-text">
          DiSTEM Rwanda is an offline-first digital learning platform
          designed to bring quality STEM education to learners and
          students, even where internet access is limited.
        </p>

        <div className="hero-buttons">
          <button type="button" className="primary-button" onClick={() => goTo(user ? 'courses' : 'auth')}>
            {user ? 'Explore Courses' : 'Start Learning'}
          </button>

          <button type="button" className="secondary-button" onClick={() => goTo('learning')}>
            Explore DiSTEM
          </button>
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
  )
}

export default Hero
