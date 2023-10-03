import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollArrow from './components/ScrollArrow/ScrollArrow'
import './App.scss'


function App() {


  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <ScrollArrow />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
