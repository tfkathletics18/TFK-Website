import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
