import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

const base = import.meta.env.BASE_URL || '/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${base}service-worker.js`).catch(() => {
      // A failed registration must not prevent the offline-capable React app from loading.
    })
  })
}
