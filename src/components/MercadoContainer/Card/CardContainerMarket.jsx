import style from './CardMarket.module.css'
import MultiActionAreaCard from "./CardMarket"
import axios from 'axios'



const CardContainerMarket = () =>{
    let data = [
        {
        "chain_name": "avalanche",
        "chain_id": 43114,
        "name": "avax",
        "symbol": "AVAX",
        "logo_url": "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574",
        "decimals": 18,
        "actual_price": "9"
        },
        {
        "chain_name": "linea",
        "chain_id": 59144,
        "name": "ethereum",
        "symbol": "ETH",
        "logo_url": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "decimals": 18,
        "actual_price": "1591.43"
        },
        {
        "chain_name": "base",
        "chain_id": 8453,
        "name": "ethereum",
        "symbol": "ETH",
        "logo_url": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "decimals": 18,
        "actual_price": "1591.43"
        }]


    return(
        
            <div className={style.container}>
                {
                    data.map((coin)=> <MultiActionAreaCard coin={coin} key={coin.chain_id}/>)
                }
            </div>
        
    )
}

export default CardContainerMarket