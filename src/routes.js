import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Home from './pages/Home'


    function RoutesApp() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/cadastro" element={ <Cadastro/> }/>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/login" element={ <Login/> }/>
                </Routes>
            </BrowserRouter>
        )
    }

export default RoutesApp;   
