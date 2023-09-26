import style from "./Footer.module.css"
import Link from "next/link"

const Enlaces = () =>{
    return(
        <div className={style.links}>
            <Link href="/">Exchange Inicio</Link>
            <Link href="/">Exchange Mercado</Link>
            <Link href="/">Exchange Mercado</Link>
            <Link href="/">Exchange Mercado</Link>
            <Link href="/">Exchange Mercado</Link>
        </div>
    )
}

export default Enlaces