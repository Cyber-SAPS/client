import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout } from './components/ui/layout'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App(){

  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </Layout>
  );
}

export default App;
