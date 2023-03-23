import { useRef, useContext, useState } from 'react'
import * as h from './styled'
import { ProductsContext } from '../Context/ProductsContext'
import { ContaninerMenuMobile, HeaderMenu } from "./stelydMenuMobile";
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate()

    const filterIsOn = () => {
        const name = nameFind.current
        setFilterName(name.value)
        name.value = ''
    }
    
    function handleOnChange(e, setState) {
        setState(e.target.value)
    }

    const {
        itemsCart,
        setFilterName,
        setFilterSector
    } = useContext(ProductsContext)


    const nameFind = useRef(null)

    return (
        <h.Header>
            <h.Container>
                <h.Logo>
                    <img src="/static/logo/logo.png" alt="logo image" />
                </h.Logo>
                <h.BoxFind>
                    <input id="nameSearch" type="text" name='name' ref={nameFind}
                        placeholder="O que está procurando?" />
                    <h.FindImg onClick={filterIsOn} src="/static/icons/search.svg" alt="button search" />
                </h.BoxFind>
                <h.BoxAux>
                    <h.CadUser>
                        <span>Olá,</span><a href='#'>faça seu login</a><span> ou </span><a href='#'>cadastre-se</a>
                    </h.CadUser>
                    <h.Cart>
                        <span>{itemsCart}</span>
                        <img onClick={() =>itemsCart?
                            navigate("/shoppingcart"):
                            navigate("/emptycart")} src="/static/icons/cart_view.svg" alt='cart image' />
                    </h.Cart>
                </h.BoxAux>
            </h.Container>
            <MenuMobile />
            <h.Sections>
                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='all'>Ver Todos</h.ButtonSelect>
                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='toys'>Brinquedos</h.ButtonSelect>
                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='schoolbags'>Mochilas</h.ButtonSelect>
                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='mugs'>Canecas</h.ButtonSelect>
                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='shirts'>Camisas</h.ButtonSelect>
                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='shoes'>Tênis</h.ButtonSelect>
            </h.Sections>
        </h.Header>
    )

}

function MenuMobile() {

    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => setIsOpen(!isOpen)
    const {
        itemsCart,
        setViewCart,
        setFilterName,
        setFilterSector
    } = useContext(ProductsContext)

    const handleOnChangeMobile = (e, setState) => {
        handleOnChange(e, setState)
        setIsOpen()
    }

    return (
        <>
            <HeaderMenu>
                <button onClick={handleMenu}></button>
            </HeaderMenu>
            <ContaninerMenuMobile isOpen={isOpen}>
                <ul>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='all'>Todos Produtos</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='toys'>Brinquedos</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='schoolbags'>Mochilas</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='mugs'>Canecas</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='shirts'>Camisas</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='shoes'>Tênis</button></li>
                </ul>
            </ContaninerMenuMobile>
        </>
    )
}