import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header1 from "./components/Header1";
import CounterPage from "./pages/CounterPage";




function App() {

  return (

    <BrowserRouter>

        <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/counter" element={<CounterPage />} />

        </Routes>

    </BrowserRouter>

  );
}

export default App;
