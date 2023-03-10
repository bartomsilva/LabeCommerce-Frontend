import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ProductsProvider from './components/Context/ProductsContext'
import App from './App'
import LoadUpdateData from './components/Data/LoadUpdateData'
import Reset from './styles/Reset'
import Base from './styles/base'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <Base />
      <ProductsProvider>
        <LoadUpdateData />
        <App />
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
