import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout } from './components/ui/layout'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home';
import Faq from './pages/faq';
import Contact from './pages/contact';
import EventCalendar from './pages/calendar';

function App(){

  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="faq" element={ <Faq/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="events" element={ <EventCalendar/> } />
      </Routes>
    </Layout>
  );
}

export default App;
