import Header from "../../../components/Header/header";
import Footer from "../../../Footer/Footer";
import styles from "./personagens.module.css";
import Cards from "../../../components/Cards";

function personagens() {
    return (
        <> 
            <Header />
            <section className={styles.personagens}>
                <h1>personagens aqui</h1>
                <p>exemplo apenas com um personagem</p>
            </section>
            <Footer />
            <Cards />

        </>
    );
}

export default personagens;