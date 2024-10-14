import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppHooks from './AppHooks.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHooks/>
  </StrictMode>,
)
