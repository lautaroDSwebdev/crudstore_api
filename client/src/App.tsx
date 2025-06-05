import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Tablecategoria, TableComprador, TablePedidos, TableProductos } from "./components";
import { NavBar} from "./components/Navbar"
function App() {

  return (
    <BrowserRouter>
      <div className="div_nav-routes">
        <NavBar></NavBar>
        <Routes>
          <Route path="/categoria" element={<Tablecategoria />} />
           <Route path="/comprador" element={<TableComprador />} />
          <Route path="/pedido" element={<TablePedidos />} /> 
          <Route path="/productos" element={<TableProductos />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 
