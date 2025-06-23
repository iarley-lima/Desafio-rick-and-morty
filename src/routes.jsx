import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Detalhes from "./pages/detalhes/index";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/personagens" element={<Cards />}></Route>
            <Route path="/personagem/:id" element={<Detalhes />} />
        </Routes>
    );
}

export default AppRoutes;