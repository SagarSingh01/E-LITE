import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FilterFunction } from './Context/Context.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './Components/Cards/ProductDetails'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FilterFunction>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </FilterFunction>
  </BrowserRouter>
)
