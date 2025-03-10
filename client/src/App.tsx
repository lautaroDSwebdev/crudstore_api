import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form, Nav, TableCliente, TableProductos, TableVenta } from "./components";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {

  const [dataeditventa, setdataeditventa] = useState(null)
  // const [dataeditcliente, setdataeditcliente] = useState(null)
  console.log(dataeditventa)
  console.log(dataeditventa)

  const { register, handleSubmit, reset } = useForm();




  const HandleEditVenta = (e) => {
    console.log(e)
    console.log("Data para editar venta")
    setdataeditventa(e)
    reset(e)
  }


  return (
    <BrowserRouter>
      <div className="div_nav-routes">

        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Form handleSubmit={handleSubmit} register={register} />} />
          <Route path="/data" element={<TableVenta HandleEdit={HandleEditVenta} />} />
          <Route path="/cliente" element={<TableCliente />} />
          <Route path="/prods" element={<TableProductos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 
