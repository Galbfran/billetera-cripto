import style from './Footer.module.css'
import Link from 'next/link'
import Enlaces from './Enlaces'
const Footer = () => {
    return(
        <footer className={style.footer}>
            <div>
                <h2>Billetera Virtual</h2>
            </div>
            <div className={style.footerContainer}>
                <div className={style.containerinks}>
                    <h3>Exchange</h3>
                    <Enlaces/>
                </div>
                <div className={style.containerinks}>
                    <h3>Exchange</h3>
                    <Enlaces/>
                </div>
                <div className={style.containerinks}>
                    <h3>Exchange</h3>
                    <Enlaces/>
                </div>
                <div className={style.containerinks}>
                    <h3>Exchange</h3>
                    <Enlaces/>
                </div>
            </div>
        </footer>
    )
}

export default Footer