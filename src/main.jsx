import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import ReactPixel from 'react-facebook-pixel'
import './main.scss'

const options = {
  autoConfig: true,
  debug: false,
};

// Initialize FB Pixel
ReactPixel.init('1781517582747172', {}, options);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
