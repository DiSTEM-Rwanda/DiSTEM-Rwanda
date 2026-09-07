import { useNavigate } from 'react-router'
import distemLogo from '../assets/distem-logo.jpg'

function Footer() {
  const navigate = useNavigate()
  const goHome = (id) => {
    navigate(`/#${id}`)
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={distemLogo} alt="DiSTEM Rwanda" />
        <p>Offline-first STEM learning resources that help Rwanda’s learners build the skills of tomorrow.</p>
        <strong>Offline Today, Future Ready Tomorrow.</strong>
      </div>
      <div className="footer-links">
        <div><h2>Explore</h2><button type="button" onClick={() => goHome('about')}>About DiSTEM</button><button type="button" onClick={() => navigate('/courses')}>Courses</button></div>
        <div><h2>Learning</h2><button type="button" onClick={() => goHome('learning')}>STEM subjects</button></div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} DiSTEM Rwanda. All rights reserved.</p>
    </footer>
  )
}

export default Footer
