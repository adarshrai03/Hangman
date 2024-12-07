import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { InputValueProvider } from './InputValue/InputValueContext'


createRoot(document.getElementById('root')).render(
    <InputValueProvider>
      <BrowserRouter>
        <App />
    </BrowserRouter>
    </InputValueProvider>
    
    
  ,
)
