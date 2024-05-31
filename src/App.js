import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header1 from "./components/Header1";
import TodoPage from "./pages/TodoPage";
import ContextProvider from "./context/Context1";
import Form1 from "./pages/Form1";
import Icons from "./pages/Icons";
import MapPage from "./pages/MapPage";




function App() {

  return (
    <ContextProvider>
      <BrowserRouter>

        <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/map" element={<MapPage />} />

        </Routes>

      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
