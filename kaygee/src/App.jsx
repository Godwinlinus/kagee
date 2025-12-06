import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { ThemeProvider } from './ThemeContext.jsx'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
import Preloader from './pages/Preloader'

const App = () => {
  return (
    <ThemeProvider>
      <div className='font-display'>
        {/* <Background /> */}
        <Nav />
        <main className='max-w-5xl'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense> 
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
