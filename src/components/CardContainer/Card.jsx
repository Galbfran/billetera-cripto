import style from "./Card.module.css";
import Link from "next/link";

export default function MediaCard({coin}) {
    const {logo_url ,name ,actual_price} = coin


  return (
    <div className={style.card}>
        <img src={logo_url} alt="" />
        <div className={style.card__content}>
            <p className={style.card__title}>{name}</p>
            <p className={style.card__description}>Descripcion:</p>
            <p className={style.card__description}>{actual_price}</p>
            <Link href="/mercado">VER MERCADO</Link>
        </div>
    </div>
  );
}

