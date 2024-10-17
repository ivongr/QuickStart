import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppHooks from './AppHooks.jsx'
import Button from "./Button.jsx"
import Profile  from "./Profile.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHooks/>
    <App/>
    
      <Button title ="Proyecto 1" 
      style={{ backgroundColor: 'blue', color: 'white' }}
     component={Profile}
      />
    <Button title ="Proyecto 2" 
      style={{ backgroundColor: 'red', color: 'white' }}
     component={Profile}/>
     <Button title ="Proyecto 2" 
      style={{ backgroundColor: 'green', color: 'white' }}
     component={Profile}/>

  </StrictMode>
)
