import { useContext, useEffect } from "react";
import { ProductsContext } from "../Context/ProductsContext";

import * as s from "./styled";
import { currencyBrazil, saveCart } from "../Libs/MyLib";

export default function ShoppingCart() {

    const {
        cart,
        setCart,
        setViewCart,
        products,
        itemsCart,
        totalCart,
        setItemsCart,
        setTotalCart        
    } = useContext(ProductsContext)

    function renderItemCard(objPro, index) {
        const codePro = objPro.code
        const amount = objPro.amount
        const dataPro = products.find(e => e.code === codePro)
        const { name, img, price } = dataPro
        return (
            <s.HeaderDetail key={index}>
                <s.ContainerItem>
                    <s.SubTitleProd>produto</s.SubTitleProd>
                    <s.ItemDetail>
                        <img src={img} alt="" />
                        <p>{name}</p>
                    </s.ItemDetail>
                </s.ContainerItem>
                <s.ContainerAmount>
                    <s.SubTitleAmount>quantidade</s.SubTitleAmount>
                    <s.ControlAmount>
                        <img onClick={() => handlerMinus(index, cart, setCart)}
                            src="/static/icons/item_minus.svg"
                            alt="item minus" />
                        <span>{amount}</span>
                        <img onClick={() => handlerPlus(index, cart, setCart)}
                            src="/static/icons/item_plus.svg"
                            alt="item plus" data-codepro={index} />
                    </s.ControlAmount>
                    {/* <s.ButtonRemove onClick={() => removeItem(codePro, cart, setCart)}>
                        remover
                    </s.ButtonRemove> */}
                </s.ContainerAmount>
                <s.ContainerPrice>
                    <s.SubTitlePrice>preço</s.SubTitlePrice>
                    <s.OldPrice>{currencyBrazil(+price * 1.30)}</s.OldPrice>
                    <s.Price>{currencyBrazil(price, true)}</s.Price>
                </s.ContainerPrice>
            </s.HeaderDetail>
        )
    }
    
    return (
        <s.Container>
            <s.Products>
                <div>
                    <s.Title>Minha Cesta</s.Title>
                </div>
                {cart.map((e, index) =>
                    renderItemCard(e, index)
                )}
            </s.Products>
            <s.Summary>
                <div>
                    <s.Title>Resumo do Pedido</s.Title>
                </div>
                <div>
                    <ul id="summary">
                        <li>
                            <label>{itemsCart} {itemsCart <= 1 ? "Produto" : "Produtos"}</label>
                            <span>{currencyBrazil(totalCart, true)}</span>
                        </li>
                        <li>
                            <label>Frete</label>
                            <span>Grátis</span>
                        </li>
                        <div>
                            <span>Total</span>
                            <span><b>{currencyBrazil(totalCart, true)}</b></span>
                        </div>
                        <p>em até 10x sem juros {currencyBrazil(totalCart / 10)}</p>
                    </ul>
                </div>
                <div>
                    <s.Button>Confirmar Pedido</s.Button>
                </div>
                <div>
                    <s.Button onClick={() => setViewCart(false)}>Fechar Carrinho</s.Button>
                </div>
            </s.Summary>
        </s.Container>
    )
}


// function removeItem(nCode, array, setState) {
//     const copyArray = array.filter(item => item.code != nCode)
//     setState(copyArray)
// }

function handlerMinus(nIndex, array, setState) {
    const copyArray = [...array]
    const nAmount = copyArray[nIndex].amount
    if (nAmount > 1) {
        copyArray[nIndex].amount--
    } else {
        copyArray.splice(nIndex,1)
    }
    setState(copyArray)
}

function handlerPlus(nIndex, array, setState) {
    const copyArray = [...array]
    copyArray[nIndex].amount++
    setState(copyArray)
}

export function updateStatusCart(cart, setItemsCart,setTotalCart) {
    // atualização dos valore carrinho 
    const vTotal = cart.reduce((total, atual) => total += (atual.price * atual.amount), 0)
    const vTotalItems = cart.reduce((total, atual) => total += atual.amount, 0)
    setItemsCart(vTotalItems)
    setTotalCart(vTotal)
    saveCart(cart)
}