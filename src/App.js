import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Personal from './components/Personal';
import Header from './components/Header';
import Card from './components/Card';
import Skills from './components/Skills';
import Experiences from './components/Portfolios';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Routes>
            <Route path="myportfolio" element={<Home />} />
            <Route path="profile" element={<Personal />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;