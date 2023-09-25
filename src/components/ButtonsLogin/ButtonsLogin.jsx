"use client"
import { Button } from "@mui/material"
import style from "./Buttons.module.css"
const ButtonsLogin = () => {
    return(
        <div className={style.contButtos}>
            <Button variant="contained">Iniciar Sesión</Button>
            <Button variant="outlined">Registrarse</Button>
        </div>
    )
}
export default ButtonsLogin