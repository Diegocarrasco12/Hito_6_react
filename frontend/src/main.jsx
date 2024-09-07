import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from "./context/UserContext.jsx"
import CartProvider from "./context/CartContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>

          <App />

        </CartProvider>
      </UserProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
