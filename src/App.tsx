import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CadastroCategoria from './components/categorias/cadastrarCategorias/CadastrarCategoria';
import ListaCategorias from '../src/components/categorias/listaCategorias/ListaCategorias';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre';
import ListaProduto from './components/produtos/listaProdutos/ListaProdutos';
import CadastrarProduto from './components/produtos/cadastrarProdutos/CadastrarProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/home" element={<Home />} />

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path="/cadastrar" element={<CadastroUsuario />} />

          <Route path="/cadastrarCategoria" element={<CadastroCategoria />} />

          <Route path="/cadastrarCategoria/:id" element={<CadastroCategoria />} />

          <Route path="/categorias" element={<ListaCategorias />} />

          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          <Route path="/produtos" element={<ListaProduto />} />

          <Route path="/cadastrarProdutos" element={<CadastrarProduto />} />

          <Route path="/cadastrarProdutos/:id" element={<CadastrarProduto />} />

          <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
