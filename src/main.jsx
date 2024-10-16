import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppHooks from './AppHooks.jsx'
import MyButton from "./Button.jsx"
import Profile  from "./Profile.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHooks/>
    <App/>
    <MyButton/>
    <MyButton/>
    <MyButton/>
    <Profile/>
  </StrictMode>
)
