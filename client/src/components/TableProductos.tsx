// // import { useState } from "react";
// import { useState } from "react";
// import { useMutationsProds } from "../intercecptors";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { ListaProd } from "../types/TypesTiendaBackend";
// import Input from "../reusable/Input";
// // import { useNavigate } from "react-router-dom";

// export const TableProductos = (
// ) => {

//   const { GetProds,
//     mutationDeleteProd,
//     mutationPostProductos,
//     mutationPutProductos } = useMutationsProds();
//   const [modal, setmodal] = useState(false)


//   const { data } = GetProds
//   const [dataeditprod, setdataeditprod] = useState(null)
//   console.log(dataeditprod)
//   const { register, handleSubmit, reset } = useForm();

//   const HandleEditVenta = (e) => {
//     setdataeditprod(e)
//     reset(e)
//   }

//   const EditProd = (e: ListaProd) => {
//     setmodal(true)
//     HandleEditVenta(e)
//   }

//   const onSubmit: SubmitHandler<ListaProd> = (dataProd) => {
//     if (dataProd.codigo_producto) {
//       mutationPutProductos.mutate(dataProd)
//     } else {
//       mutationPostProductos.mutate(dataProd)
//     }
//     console.log("data de producto")
//     console.log(dataProd)
//     setmodal(false)
//   }

//   const marca_prod = [
//     { id: 1, marca: "Marolio" },
//     { id: 2, marca: "La serenisima" },
//     { id: 3, marca: "Rocklets" },
//     { id: 4, marca: "Chocolino" },
//     { id: 5, marca: "Don anclas" },
//     { id: 6, marca: "Mr Musculo" },
//   ]
//   return (
//     <>
//       <button onClick={() => setmodal(!modal)} className="modal_button">abrir modal</button>
//       {
//         modal &&
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{dataeditprod ? "Editar producto" : "Crear producto"}</h2>
//             <svg onClick={() => setmodal(!modal)}
//               xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#f51919", cursor: "pointer" }} ><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <Input type="text" {...register("nombre_producto")} placeholder="nombre" />
//               <select {...register("marca")} name="marca">
//                 {
//                   marca_prod.map(e => (
//                     <option key={e.id} defaultValue={""} value={e.marca}>{e.marca}</option>
//                   ))
//                 }
//               </select>
//               <Input type="number" {...register("costo")} placeholder="costo" />
//               <Input type="number" {...register("stock")} placeholder="stock" />
//               <button type="submit">{dataeditprod ? "editar producto" : "crear producto"}</button>
//             </form>
//           </div>
//         </div>
//       }
//       <div className="grid">
//         <table>
//           <thead>
//             <tr>
//               <th>nombre producto</th>
//               <th>marca</th>
//               <th>costo</th>
//               <th>stock</th>
//               <th>opciones</th>
//             </tr>
//           </thead>
//           <tbody >
//             {data?.map(e => (
//               <tr key={e.codigo_producto} >
//                 <td>{e?.nombre_producto} </td>
//                 <td>{e?.marca}   </td>
//                 <td>{e?.costo}   </td>
//                 <td>{e?.stock}   </td>
//                 <td>
//                   <button onClick={() => EditProd(e)}>editar</button>
//                   <button onClick={() => mutationDeleteProd.mutate(e.codigo_producto)}>eliminar</button>
//                 </td>
//               </tr>
//             ))}
//             {
//               data?.length === 0 || data === undefined &&
//               <tr className="tr_error-data" >
//                 <td>sin datos</td>
//                 <td>sin datos</td>
//                 <td>sin datos</td>
//                 <td>sin datos</td>
//                 <td>sin datos</td>
//               </tr>
//             }
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };
