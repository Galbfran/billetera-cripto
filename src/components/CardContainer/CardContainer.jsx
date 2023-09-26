import MediaCard from "./Card"
import style from "./Card.module.css"
const CardContainer = () =>{
    let coin = [{
        "chain_name": "opbnb",
        "chain_id": 204,
        "name": "bnb",
        "symbol": "BNB",
        "logo_url": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
        "decimals": 18,
        "actual_price": "209.7"
        },
        {
        "chain_name": "base",
        "chain_id": 8453,
        "name": "ethereum",
        "symbol": "ETH",
        "logo_url": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "decimals": 18,
        "actual_price": "1586.14"
        },
        {
        "chain_name": "linea",
        "chain_id": 59144,
        "name": "ethereum",
        "symbol": "ETH",
        "logo_url": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "decimals": 18,
        "actual_price": "1586.14"
        },
        {
        "chain_name": "polygon",
        "chain_id": 137,
        "name": "matic",
        "symbol": "MATIC",
        "logo_url": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
        "decimals": 18,
        "actual_price": "0.518897"
        }]


    return(
        <article className={style.article}>
            <p>Top Mercado</p>
            <h3>Compra Varios Cripto Coin</h3>
            <div className={style.container}>
                {coin.map(coin =>(<MediaCard key={coin.chain_id} coin={coin}/>))}
            </div>
        </article>
    )
}

export default CardContainer