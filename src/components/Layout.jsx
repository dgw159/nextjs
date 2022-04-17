import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Layout(props){
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Layout padrao'}</h1>
                <Link href="/">Home</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>           
        </div>
    )
}