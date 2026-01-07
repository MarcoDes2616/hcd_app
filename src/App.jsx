import React from 'react';
import Nav from "./components/Nav";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import LuminoLissPage from "./pages/luminoliss/LuminolissPage";
import Footer from "./components/sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <HashRouter>
      {/* <Loading openModal={isLoading} /> */}
      <Nav />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luminoliss" element={<LuminoLissPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
