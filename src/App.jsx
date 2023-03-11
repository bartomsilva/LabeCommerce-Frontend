import React, { useContext, useEffect } from "react"
import { ProductsContext } from './components/Context/ProductsContext'
import Header from "./components/Header/Header"
import Aside from "./components/Aside/Aside"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import ShoppingCart, { updateStatusCart } from "./components/ShoppingCart/ShoppingCart"
import { Container } from "./styles/styled"
import { saveCart } from "./components/Libs/MyLib"
import loadData from './components/Data/LoadUpdateData'

export default function App() {
  const { viewCart, cart, setCart, setItemsCart, setTotalCart } = useContext(ProductsContext)


  loadData()
  

  return (
    <>
      {
        viewCart ?
          (<ShoppingCart />) :
          (<>
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

