import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header1 from "./components/Header1";
import CounterPage from "./pages/CounterPage";
import { AppContext } from "./context/Context";



function App() {
  const [counter, setCounter] = useState(44);

  // value - כל מה שנמצא שם יהיה גלובלי לכל הקומפנינטות ש
  // APPCONTEXT.PROVIDER - עוטף
  return (
    <AppContext.Provider value={{counter,setCounter}}>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
