import Link from "next/link"
import ButtonsLogin from "../ButtonsLogin/ButtonsLogin"
import style from "./NavBar.module.css"
const NavBar = () =>{
    return(
        <nav className={style.nav}>
            <h1>Billetara FrancoDev</h1>
            <ul className={style.ul}>
                <Link href="/">Inicio</Link>
                <Link href="/mercado">Mercado</Link>
                <Link href="/portafolio">Portafolio</Link>
            </ul>
            <ButtonsLogin/>
        </nav>
    )
}

export default NavBar