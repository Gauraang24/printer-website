import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './commonComponents/Navbar.jsx'
import Footer from './commonComponents/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='sticky bg-white z-10 top-0 left-0 right-0'>
      <Navbar />
    </div>
    <App />
    <Footer />
  </StrictMode>,
)
