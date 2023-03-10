import { Box } from "./styledShowCard";
import data from "../Data/Data"
import { CurrencyBrazil } from "../Libs/MyLib";


export default function ShowCard(props) {
    const { setShowCard, showCard } = props

    const productShow = data.filter(e => e.code === showCard.codePro)

    return (
        <Box>
            <img src={productShow[0].img} alt="" />
            <div>
                <p>{productShow[0].name}</p>
                <p>{CurrencyBrazil(productShow[0].price, true)}</p>
                <h3>rotina em desenvolvimento</h3>
                <button onClick={() => setShowCard(false)}>FECHAR TESTE</button>
            </div>
        </Box>
    )
}