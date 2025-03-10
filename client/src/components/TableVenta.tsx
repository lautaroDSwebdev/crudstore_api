import { useState } from "react";
import { useMutationsVentas } from "../intercecptors";
import { ArrayTienda } from "../types/TypesTiendaBackend";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

export const TableVenta = () => {

  const {
    GetVentasquery,
    mutationDeleteVenta,
    mutationPutVentas,
    mutationPostVentas
  } = useMutationsVentas();

  const { data } = GetVentasquery

  const [modal, setmodal] = useState(false)
  const [dataeditventa, setdataeditventa] = useState(null)
  console.log(dataeditventa)

  const { register, handleSubmit, reset } = useForm();


  const onSubmit: SubmitHandler<ArrayTienda> = (dataVenta) => {
    if (dataVenta.codigo_venta) {
      mutationPutVentas.mutate(dataVenta)
      console.log(dataVenta.codigo_venta)
      console.log("data editada")
    } else {
      mutationPostVentas.mutate(dataVenta)
      console.log("data creada")
      console.log(dataVenta)

    }
  }
  const nav = useNavigate()

  const HandleEditVenta = (e) => {
    console.log(e)
    console.log("Data para editar venta")
    setdataeditventa(e)
    reset(e)
  }


  const EditVenta = (e: ArrayTienda) => {
    nav("/")
    HandleEditVenta(e)
  }

  return (
    <>
      <button onClick={() => setmodal(!modal)} className="modal_button">abrir modal</button>
      {!data && <h2>Cargando...</h2>}
      {!data && <h2>Hubo un error</h2>}
      <div className="grid">
        {
          modal &&
          <div>
            <h2 className="">Formulario de Venta</h2>
            <div className="form-container">
              <div className="div_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <section>
                    <h2>Venta</h2>
                    <div className="form-group">
                      <input type="date"  {...register("fecha_venta")} />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="total precio" {...register("total")} />
                    </div>
                  </section>
                  <section>
                    <input type='submit'></input>
                  </section>
                </form>
              </div>
            </div>
          </div>
        }

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Total</th>
              <th>opciones</th>
            </tr>
          </thead>
          <tbody >
            {
              data?.map(e => (
                <tr key={e.codigo_venta}>
                  <td>{e.fecha_venta}</td>
                  <td>{e.total}</td>
                  <td>
                    <button onClick={() => EditVenta(e)}>editar</button>
                    <button onClick={() => mutationDeleteVenta.mutate(e.codigo_venta)}>eliminar</button>
                  </td>
                </tr>
              ))
            }

          </tbody>

        </table>


      </div>
    </>
  );
};
