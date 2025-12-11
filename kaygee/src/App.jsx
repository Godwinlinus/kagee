import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
import Preloader from './pages/Preloader'

const App = () => {
  return (
    <div className='font-display bg-background-black'>
      {/* <Background /> */}
      <Nav />
      <main className=''>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense> 
      </main>
      <Footer />
    </div>
  )
}

export default App
