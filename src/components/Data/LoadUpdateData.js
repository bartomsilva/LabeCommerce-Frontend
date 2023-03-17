import { useContext, useEffect } from "react"
import { ProductsContext } from "../Context/ProductsContext"
import axios from "axios"
import { saveCart } from "../Libs/MyLib"
import { updateStatusCart } from "../ShoppingCart/ShoppingCart"

export default function LoadData() {
    const {
        cart,
        setCart,
        setProducts,
        setItemsCart,
        setTotalCart,
        setTotalProducts
    } = useContext(ProductsContext)

    useEffect(() => {
        (async () => {
            try {
                // const response = await axios.get("https://project-react-pilares.bartomsilva.repl.co")
                const response = await axios.get("/static/Data.json")
                setProducts(response.data);
                setTotalProducts(response.data.length)
            }
            catch (error) {
                console.log(error);
            };
        })()
    }, [])

    // criar ou ler o carrinho

    useEffect(() => {
        if (!localStorage.shoppingCart) {
          saveCart(cart)
        } else {
          setCart(JSON.parse(localStorage.getItem("shoppingCart")))
        }
      }, [])
        
      useEffect(() => {
        updateStatusCart(cart, setItemsCart, setTotalCart)
      }, [cart])


    

}



