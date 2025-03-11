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
            {
              data?.length === 0  &&
              <tr className="tr_error-data" >
                <td>sin datos</td>
                <td>sin datos</td>
                <td>sin datos</td>
                <td>sin datos</td>
                <td>sin datos</td>
              </tr>
            }
            {
              data === undefined  &&
              <tr className="tr_error-data" >
                <td>sin datos</td>
                <td>sin datos</td>
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
