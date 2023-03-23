// import React, { useContext } from "react"
import React from "react"
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import { Container } from "../Header/styled"
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
    <>
        <Header />
        <Aside />
        <Container>
            <Main />
        </Container>
        <Footer />
    </>
    )
}
