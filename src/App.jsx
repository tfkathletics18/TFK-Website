import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ReactPixel from 'react-facebook-pixel';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Schedule from './pages/Schedule/Schedule'
import Pricing from './pages/Pricing/Pricing'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollArrow from './components/ScrollArrow/ScrollArrow'
import './App.scss'
import { useEffect } from 'react'


function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    ReactPixel.pageView();
  }, [location.pathname]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ScrollArrow />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
