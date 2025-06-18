/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// eslint-disable-next-line no-unused-vars
export default function Header() {
    return (
        <header className={styles.Header}>
            <Link to="/">
                <span>Desafio 2</span>
            </Link>
            <nav>
                <Link to="/Personagens">Personagens</Link> 
            </nav>
        </header>
    )
}