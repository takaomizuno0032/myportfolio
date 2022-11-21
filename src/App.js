import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Personal from './components/Personal';
import Header from './components/Header';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
  const theme = createTheme(
    {
      palette: {
        custom: {
          light: '#A9A9A9',
          main: '#9DD6CE',
          dark: '#34343F',
        }
      }
    }
  )

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header>
          <Header />
        </header>
        <main>
          <div>
            <Routes>
              <Route path="/myportfolio" element={<Home />} />
              <Route path="myportfolio/personal" element={<Personal />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>

          </div>
        </main>
        <footer>
          <Footer />
        </footer>

      </ThemeProvider>
    </div>
  );
}

export default App;
