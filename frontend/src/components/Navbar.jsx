import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import distemLogo from '../assets/distem-logo.jpg'

function Navbar({ user, onLogout, networkOnline = true, backendAvailable = true }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const goTo = (path, section) => {
    closeMenu()
    if (location.pathname !== path) {
      navigate(section ? `${path}#${section}` : path)
      window.setTimeout(() => section && document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
    } else if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const homePath = user ? '/dashboard-home' : '/'
  const isActive = (path) => location.pathname === path
  return (
    <header className="header">
      <div className="navbar">
        <button type="button" className="navbar-brand" onClick={() => goTo('/')} aria-label="Go to DiSTEM Rwanda home"><img className="navbar-logo" src={distemLogo} alt="DiSTEM Rwanda" /></button>
        <button type="button" className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="primary-navigation"><span></span><span></span><span></span><span className="sr-only">Menu</span></button>
        <nav id="primary-navigation" className={`nav-links ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <button type="button" className={isActive(homePath) ? 'active' : ''} onClick={() => goTo(homePath, 'home')}>Home</button><button type="button" onClick={() => goTo(homePath, 'about')}>About</button><button type="button" onClick={() => goTo(homePath, 'learning')}>Learning</button>
          {user && <button type="button" className={isActive('/courses') ? 'active' : ''} onClick={() => goTo('/courses')}>My Courses</button>}
          {user && <button type="button" className={location.pathname.startsWith('/virtual-lab') ? 'active' : ''} onClick={() => goTo('/virtual-lab')}>Virtual Lab</button>}
          <div className="nav-actions"><span className={`connectivity-status ${networkOnline && backendAvailable ? 'is-online' : 'is-offline'}`}><span aria-hidden="true">●</span> {networkOnline ? (backendAvailable ? 'Online' : 'Backend unavailable') : 'Offline'}</span>{!user ? <button type="button" className="login-button" onClick={() => goTo('/', 'auth')}>Sign In</button> : <><span className="user-role">{user.firstName || 'Learner'} · {(user.roles || ['STUDENT'])[0].replaceAll('_', ' ')}</span><button type="button" className="dashboard-button" onClick={() => goTo('/dashboard')}>Dashboard</button><button type="button" className="logout-button" onClick={() => { closeMenu(); onLogout() }}>Sign Out</button></>}</div>
        </nav>
      </div>
    </header>
  )
}
export default Navbar
