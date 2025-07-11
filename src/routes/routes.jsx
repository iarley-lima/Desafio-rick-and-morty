import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import Detalhes from "../pages/Detalhes/index";
import HeaderComponent from '../components/Header/HeaderComponent';


//rotas pras páginas do cabeçalho e dos cards
function appRoutes() {
    return (
        <>  
            <HeaderComponent />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/personagens" element={<Cards />}></Route>
                <Route path="/personagem/:id" element={<Detalhes />} />
            </Routes>
        </>  
    );
}

export default appRoutes;