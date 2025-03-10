// import { useState } from "react";
import { useMutationClientes } from "../intercecptors";
// import { useNavigate } from "react-router-dom";

export const TableCliente = (
  // { HandleEdit }
) => {

  const { GetClients, mutationDeleteCliente } = useMutationClientes();

  const { data } = GetClients

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
              <th>nombre</th>
              <th>apellido</th>
              <th>dni</th>
              <th>edad</th>
              <th>opciones</th>
            </tr>
          </thead>
          <tbody >
            {data?.map(e => (
              <tr key={e.id_cliente} >
                <td>{e?.nombre_cliente}   </td>
                <td>{e?.apellido}   </td>
                <td>{e?.dni}   </td>
                <td>{e?.edad}   </td>
                <td>
                  <button onClick={() => mutationDeleteCliente.mutate(e.id_cliente)}>eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
