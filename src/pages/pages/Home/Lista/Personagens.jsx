import Header from "../../../components/Header/header";
import Footer from "../../../Footer/Footer";
import styles from "./Personagens.module.css";
import Cards from "../../../components/Cards";

function Personagens() {
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

export default Personagens;