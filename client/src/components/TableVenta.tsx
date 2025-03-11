import { useState } from "react";
import { useMutationsVentas } from "../intercecptors";
import { ArrayTienda } from "../types/TypesTiendaBackend";
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

  const HandleEditVenta = (e) => {
    setdataeditventa(e)
    reset(e)
  }

  const EditVenta = (e: ArrayTienda) => {
    setmodal(true)
    HandleEditVenta(e)
  }

  const onSubmit: SubmitHandler<ArrayTienda> = (dataVenta) => {
    if (dataVenta.codigo_venta) {
      mutationPutVentas.mutate(dataVenta)
    } else {
      mutationPostVentas.mutate(dataVenta)
    }
    setmodal(false)
  }
  return (
    <>
      <button onClick={() => setmodal(!modal)} className="modal_button">abrir modal</button>
      <div className="grid">
        {
          modal &&
          <div className="modal">
            <div className="modal-content">
              <h2>{dataeditventa ? "Editar venta": "Crear venta"}</h2>
              <svg onClick={() => setmodal(!modal)} 
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#f51919", cursor: "pointer" }} ><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="date" {...register("fecha_venta")} placeholder="fecha venta" />
                <input type="number" {...register("total")} placeholder="total" />
                <button type="submit">crear</button>
              </form>
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
            {
              data?.length === 0 &&
              <tr className="tr_error-data">
                <td>sin datos</td>
                <td>sin datos</td>
                <td>sin datos</td>
              </tr>
            }
            {
              data === undefined &&
              <tr className="tr_error-data">
                <td>sin datos</td>
                <td>sin datos</td>
                <td>sin datos</td>
              </tr>
            }

          </tbody>

        </table>


      </div>
    </>
  );
};
