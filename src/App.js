import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Header1 from "./components/Header1";
import ContextProvider from "./context/Context";
import StudentList from "./pages/StudentList";
import StudentForm from "./pages/StudentForm";




function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/studentform" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
