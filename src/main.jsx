import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ProductsProvider from './components/Context/ProductsContext'
import App from './App'
import LoadUpdateData from './components/Data/LoadUpdateData'
import Reset from './Styles/Reset'
import Base from './Styles/base'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Reset />
    <Base />
    <ProductsProvider>
      <LoadUpdateData/>
      <App />
    </ProductsProvider>
  </BrowserRouter>
)
