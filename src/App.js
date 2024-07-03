import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import { AppProvider } from "./Context/AppContext";




function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>

  );
}

export default App;
