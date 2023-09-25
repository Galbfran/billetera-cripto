import Link from "next/link"
import style from "./SeccionInicio.module.css"

const SeccionInicio = () =>{
    const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn656s25WghPkDuav6hPIdJbnBIPwojQg4dw&usqp=CAU"
    return(
        <article className={style.seccion}>
            <div className={style.contenido}>
                <h2>Compra y Venta</h2>
                <h3>Crypto al Instante</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad architecto perspiciatis assumenda cumque, necessitatibus tempora, molestias velit incidunt quidem possimus id iure voluptatem voluptatibus delectus, quod vitae quaerat commodi.</p>
                <Link href="/mercado">VER MERCADO</Link>
            </div>
            <div className={style.imagen}>
                <img src={imagen} alt="Descripción de la imagen"width={500} height={300} />
            </div>
        </article>
    )
}

export default SeccionInicio