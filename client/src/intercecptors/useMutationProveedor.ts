// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { getProveedor, deleteProveedor, postProveedor,  updateProveedor } from "../use-cases/proveedor-use-case"
// import { ProveedorType } from "../types/TypesTiendaBackend";


// export function useMutationProveedor() {

//     const QueryC = useQueryClient()

//     const GetProveedor = useQuery({
//         queryKey: ["data_Proveedor"],
//         queryFn: getProveedor,
//     });


//     const mutationPostProveedor = useMutation({
//         mutationFn: (dataProveedor: ProveedorType) => {
//             return postProveedor(dataProveedor)
//         },
//         onSuccess: function Exito() {
//             QueryC.invalidateQueries({
//                 queryKey: ["data_Proveedor"]
//             })
//         }
//     })

//     const mutationPutProveedor = useMutation({
//         mutationFn: (dataProveedor: ProveedorType ) =>  updateProveedor(dataProveedor),
//         onSuccess: function Exito() {
//             console.log("Edicion exitoso")
//             QueryC.invalidateQueries({
//                 queryKey: ["data_Proveedor"]
//             })
//         }
//     })

//     const mutationDeleteProveedor = useMutation({
//         mutationFn: deleteProveedor,
//         onSuccess: function Exito() {
//             QueryC.invalidateQueries({
//                 queryKey: ["data_Proveedor"]
//             })
//         }
//     })


//     return {
//         QueryC,
//         GetProveedor,
//         mutationPostProveedor,
//         mutationPutProveedor,
//         mutationDeleteProveedor
//     }
// }
