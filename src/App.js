import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './comps/Gallery';
import ApiShop from './comps/ApiShop';
import Header from './comps/Header';
import Foods from './pages/Foods';
import Query from './pages/Query';
import Games from './pages/Games';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="">
        <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/shop' element={<ApiShop/>}/>
          <Route path='/foods/:id_category' element={<Foods/>}/>
          <Route path='/query' element={<Query/>}/>
          <Route path='/games' element={<Games/>}/>
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
