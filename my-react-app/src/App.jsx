import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Post = lazy(() => import('./pages/Post'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Suspense>
        
      </main>
    </div>
  )
}

export default App
