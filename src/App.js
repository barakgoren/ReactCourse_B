import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header1 from "./components/Header1";
import CounterPage from "./pages/CounterPage";
import ContextProvider, { AppContext } from "./context/Context";
import { useState } from "react";
import ShopPage from "./pages/ShopPage";




function App() {
  const [count, setCount] = useState(4);

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
