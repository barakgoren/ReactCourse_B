import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import { AppProvider } from "./Context/AppContext";
import Favorites from "./pages/Favorites";
import MoreInfo from "./pages/MoreInfo";
import MoreInfoFav from "./pages/MoreInfoFav";




function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/employee" element={<MoreInfo />} />
          <Route path="/favs/employee" element={<MoreInfoFav />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>

  );
}

export default App;
