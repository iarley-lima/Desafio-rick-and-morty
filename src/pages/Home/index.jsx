import Footer from '../../Footer/Footer.jsx';
import Header from '../../components/Header/header.jsx';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 id="titulo">Seja bem vindo ao segundo desafio!</h1>
        <p id="paragrafo">Aqui você vai aprender um pouco sobre os personagens da série america Rick and Morty</p>
      </div>
      <Footer />
    </>  
  );
}

export default Home;