import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'))
const GaleriePage = lazy(() => import('./pages/GaleriePage/GaleriePage'))
const SpecialitesPage = lazy(() => import('./pages/SpecialitesPage/SpecialitesPage'))
const AproposPage = lazy(() => import('./pages/AproposPage/AproposPage'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/galerie" element={<GaleriePage />} />
          <Route path="/specialites" element={<SpecialitesPage />} />
          <Route path="/apropos" element={<AproposPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App