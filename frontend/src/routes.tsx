import React  from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ListaCliente from "./pages/ListagemCliente";
import CadastrarCliente from "./pages/CadastrarCliente";
import CadastrarAcomodacao from "./pages/CadastrarAcomodação";
import CadastrarHospedagem from "./pages/CadastrarHospedagem";
import ListaAcomodacao from "./pages/ListagemAcomodacoes";

const Rotas: React.FC = () => {

  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/listagem/cliente" element={ < ListaCliente/> } />
          <Route path="/listagem/acomodacao" element={ < ListaAcomodacao/> } />
          <Route path="/cadastro/cliente" element={ < CadastrarCliente/> } />
          <Route path="/cadastro/acomodacao" element={ < CadastrarAcomodacao/> } />    
          <Route path="/cadastro/hospedagem" element={ < CadastrarHospedagem/> } />      
      </Routes>
    </div>
  );
};

export default Rotas;