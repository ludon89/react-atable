import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages importation
import Accueil from './pages/accueil';
import Recettes from './pages/recettes';
import Contact from './pages/contact';

// Components importation
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Accueil />} />
          <Route path='/accueil' element={<Accueil />} />
          <Route path='/recettes' element={<Recettes />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

      <Main />
      <Footer />
    </>
  );
}

export default App;


