import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { ArrayTienda } from "../types/TypesTiendaBackend";
import { deleteVentas, getVentas, postVenta, updateVentas } from "../use-cases";


export function useMutationsVentas() {

    const QueryC = useQueryClient()

    const GetVentasquery = useQuery({
        queryKey: ["data_tienda"],
        queryFn: getVentas,
    });
 
 

    const mutationPostVentas = useMutation({
        mutationFn: (dataVenta: ArrayTienda) => {
            return postVenta(dataVenta)
        },
        onSuccess: function Exito() {
            console.log("Post exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_tienda"]
            })
        }
    })


    const mutationPutVentas = useMutation({
        mutationFn: (dataVenta: ArrayTienda ) =>  updateVentas(dataVenta),
        onSuccess: function Exito() {
            console.log("Edicion exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_tienda"]
            })
        }
    })

    const mutationDeleteVenta = useMutation({
        mutationFn: deleteVentas,
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_tienda"]
            })
            alert("Eliminado exitosamente")
        }
    })

    

    return {
        GetVentasquery,
        QueryC,
        mutationDeleteVenta,
        mutationPostVentas,
        mutationPutVentas,
    }
}
