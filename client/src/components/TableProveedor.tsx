// import { useState } from "react";
// import { useMutationProveedor } from "../intercecptors";
// import { ProveedorType } from "../types/TypesTiendaBackend";
// import { SubmitHandler, useForm } from "react-hook-form";
// export const Tableproveedor = () => {



//     const {
//         GetProveedor,
//         mutationDeleteProveedor,
//         mutationPostProveedor,
//         mutationPutProveedor
//     } = useMutationProveedor()

//     const { data } = GetProveedor
//     const [modal, setmodal] = useState(false)
//     const [dataeditproveedor, setdataeditproveedor] = useState(null)
//     console.log(data)



//     const { register, handleSubmit, reset } = useForm({
//         defaultValues: {
//             nombre: "",
//             locacion: ""
//         }
//     });

//     const HandleEditproveedor = (e) => {
//         setdataeditproveedor(e)
//         reset(e)
//     }

//     const Editproveedor = (e: ProveedorType) => {
//         setmodal(true)
//         HandleEditproveedor(e)
//     }

//     const onSubmit: SubmitHandler<ProveedorType> = (data) => {
//         if (data.id_proveedor) {
//             mutationPutProveedor.mutate(data)
//             console.log("Put exitoso")
//             console.log(data)
//         } else {
//             mutationPostProveedor.mutate(data)
//             console.log(data)
//         }
//         console.log(data)

//         setmodal(false)
//     }
//     return (
//         <>
//             <button onClick={() => setmodal(!modal)} className="modal_button">abrir modal</button>
//             <div className="grid">
//                 {
//                     modal &&
//                     <div className="modal">
//                         <div className="modal-content">
//                             <h2>{dataeditproveedor ? "Editar proveedor" : "Crear proveedor"}</h2>
//                             <svg onClick={() => setmodal(!modal)}
//                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#f51919", cursor: "pointer" }} ><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
//                             <form onSubmit={handleSubmit(onSubmit)}>
//                                 <input type="text" {...register("locacion")} placeholder="locacion proveedor" />
//                                 <input type="text" {...register("nombre")} placeholder="nombre proveedor" />
//                                 <button type="submit">{dataeditproveedor ? "editar proveedor" : "crear proveedor"}</button>
//                             </form>
//                         </div>
//                     </div>
//                 }

//                 <table>
//                     <thead>
//                         <tr>
//                             <th>nombre proveedor</th>
//                             <th>locacion proveedor</th>
//                             <th>opciones</th>
//                         </tr>
//                     </thead>
//                     <tbody >
//                         {
//                             data?.map(e => (
//                                 <tr key={e.id_proveedor}>
//                                     <td> {e.nombre}</td>
//                                     <td> {e.locacion}</td>
//                                     <td>
//                                         <button onClick={() => Editproveedor(e)}>editar</button>
//                                         <button onClick={() => mutationDeleteProveedor.mutate(e.id_proveedor)}>eliminar</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                         {
//                             data?.length === 0 &&
//                             <tr className="tr_error-data">
//                                 <td>sin datos</td>
//                                 <td>sin datos</td>
//                                 <td>sin datos</td>
//                             </tr>
//                         }
//                         {
//                             data === undefined &&
//                             <tr className="tr_error-data">
//                                 <td>sin datos</td>
//                                 <td>sin datos</td>
//                                 <td>sin datos</td>
//                             </tr>
//                         }

//                     </tbody>

//                 </table>


//             </div>
//         </>
//     );
// };
