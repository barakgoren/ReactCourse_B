import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header1 from "./components/Header1";
import CounterPage from "./pages/CounterPage";
import ContextProvider from "./context/Context";
import ShopPage from "./pages/ShopPage";




function App() {


  // value - כל מה שנמצא שם יהיה גלובלי לכל הקומפנינטות ש
  // APPCONTEXT.PROVIDER - עוטף
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
