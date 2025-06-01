import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Pages/Context/UserContext.jsx'
import CartContext from './Pages/Context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserContext>
      <CartContext>     
       <App/>
      </CartContext>
   </UserContext>
  </StrictMode>,
)
