import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { ThemeProvider } from './ThemeContext.jsx'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PlayGround = lazy(() => import('./pages/PlayGround'));
const Preloader = lazy(() => import('./pages/Preloader'));

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Nav />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/PlayGround/:id" element={<PlayGround />} />
            </Routes>
          </Suspense> 
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
