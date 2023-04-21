import "./App.css";
import Plan from "./components/Plan";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPosition from "./components/addPosition";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Plan />}/>
        <Route path="/add" element={  <AddPosition/>}/>
        </Routes>
      
       
      </BrowserRouter>
    </>
  );
}

export default App;
