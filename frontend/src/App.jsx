import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Learning from './components/Learning'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Learning />
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