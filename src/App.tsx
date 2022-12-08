import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import ListaProduto from './components/produtos/listaProdutos/ListaProdutos';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/home" element={<Home />} />
        
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/sobre" element={<Sobre />} />

        <Route path="/cadastrar" element={<CadastroUsuario />} />
        
        <Route path="/produto" element={<ListaProduto />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
