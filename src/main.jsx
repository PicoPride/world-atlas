import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/header.css"
import "../src/styles/footer.css"
import "../src/styles/home.css"
import "../src/styles/about.css"
import "../src/styles/contact.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
