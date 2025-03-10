// import { useState } from "react";
import {  useMutationsProds } from "../intercecptors";
// import { useNavigate } from "react-router-dom";

export const TableProductos = (
  // { HandleEdit }
) => {

  const { GetProds, mutationDeleteProd } = useMutationsProds();

  const { data } = GetProds

  // const [createventa, setcreateventa] = useState(false)

  console.log(data)
  // const nav = useNavigate()

  // const EditVenta = (e: ArrayTienda) => {
  //   nav(-1)
  //   HandleEdit(e)
  // }

  return (
    <>

      {!data && <h2>Cargando...</h2>}
      {!data && <h2>Hubo un error</h2>}
      <div className="grid">
        <table>
          <thead>
            <tr>
              <th>nombre producto</th>
              <th>marca</th>
              <th>costo</th>
              <th>stock</th>
              <th>opciones</th>
            </tr>
          </thead>
          <tbody >
            {data?.map(e => (
              <tr key={e.codigo_producto} >
                <td>{e?.nombre}   </td>
                <td>{e?.marca}   </td>
                <td>{e?.costo}   </td>
                <td>{e?.stock}   </td>
                <td>
                  <button onClick={() => mutationDeleteProd.mutate(e.codigo_producto)}>eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
