import React, { useContext, useEffect } from "react"
import { ProductsContext } from './components/Context/ProductsContext'
import Header from "./components/Header/Header"
import Aside from "./components/Aside/Aside"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import ShoppingCart, { updateStatusCart } from "./components/ShoppingCart/ShoppingCart"
import { Container } from "./styles/styled"

export default function App() {
  const { viewCart } = useContext(ProductsContext)
  return (
    <>
      {
        viewCart ?
          ( <ShoppingCart />) :  
          ( <>
              <Header />
              <Aside />
              <Container>
                <Main />
              </Container>
              <Footer />
            </>
          )
      }
    </>
  )
}

