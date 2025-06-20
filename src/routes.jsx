import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personagens from "./pages/Lista/personagens";
import Home from "./pages/Home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/personagens" element={<Personagens />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;