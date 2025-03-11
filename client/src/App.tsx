import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Nav, TableCliente, TableProductos, TableVenta } from "./components";

function App() {

  return (
    <BrowserRouter>
      <div className="div_nav-routes">

        <Nav></Nav>
        <Routes>
          <Route path="/venta" element={<TableVenta  />} />
          <Route path="/cliente" element={<TableCliente />} />
          <Route path="/prods" element={<TableProductos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 
