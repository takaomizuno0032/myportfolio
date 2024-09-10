import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopScroll from "./components/TopScroll";
import Experience from "./routes/Experience";
import Header from "./components/Header";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import SkillDetail from "./routes/SkillDetail";
import Portfolios from "./routes/Portfolios";
import PageNotFound from "./routes/PageNotFound";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
    const theme = createTheme({
        palette: {
            custom: {
                light: "#A9A9A9",
                main: "#9DD6CE",
                dark: "#34343F",
            },
        },
    });

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <TopScroll />
                    <Header />
                    <Routes>
                        <Route path="/myportfolio" element={<Home />} />
                        <Route
                            path="/myportfolio/experience"
                            element={<Experience />}
                        />
                        <Route
                            path="/myportfolio/skills"
                            element={<Skills />}
                        />
                        <Route
                            path="/myportfolio/skills/:id"
                            element={<SkillDetail />}
                        />
                        <Route
                            path="/myportfolio/portfolios"
                            element={<Portfolios />}
                        />
                        <Route
                            path="/myportfolio/*"
                            element={<PageNotFound />}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
