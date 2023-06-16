import React  from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ListaCliente from "./pages/ListagemCliente";
//import CadastroFuncionario from "./pages/CadastroFuncionario";

const Rotas: React.FC = () => {

  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/listagem/cliente" element={ < ListaCliente/> } />
          
      </Routes>
    </div>
  );
};

export default Rotas;