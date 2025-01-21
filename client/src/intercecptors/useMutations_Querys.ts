import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Api_tienda } from "../types/types"
import { deleteVentas, getVentas, postVenta } from "./useFetch";


export function MutationREST() {

    const QueryC = useQueryClient()


    const GetVentasquery = useQuery({
        queryKey: ["data_tienda"],
        queryFn: getVentas,
    });
    
    const mutationPostVentas = useMutation({
        mutationFn: ( dataVenta: Api_tienda  ) => {
            return postVenta(dataVenta)
        },
        onSuccess: function Exito() {
            alert("Post exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_tienda"]
            })
        }
    })
    // const mutationPostProd = useMutation({
    //     mutationFn: ( productosConVenta ) => {
    //         // 
    //         return postProd(productosConVenta)
    //     },
    //     onSuccess: function Exito() {
    //         console.log("Post exitoso")
    //         QueryC.invalidateQueries({
    //             queryKey: ["data_tienda"]
    //         })
    //     }
    // })

    const mutationDeleteVenta = useMutation({
        mutationFn: deleteVentas , 
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_tienda"]
            })
            alert("Eliminado exitosamente")
        }
    })



    return { GetVentasquery, QueryC, deleteVentas, getVentas, mutationDeleteVenta, mutationPostVentas }
}
