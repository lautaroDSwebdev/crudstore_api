import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ListaProd } from "../types/TypesTiendaBackend";
import { deleteProducto, getProductos, postProductos } from "../use-cases";


export function useMutationsProds() {

    const QueryC = useQueryClient()

 
    const GetProds = useQuery({
        queryKey: ["data_producto"],
        queryFn: getProductos,
    });

    const mutationPostProductos = useMutation({
        mutationFn: (dataprod: ListaProd[]) => {
            return postProductos(dataprod)
        },
        onSuccess: function Exito() {
            alert("Post exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_tienda"]
            })
        }
    })



    const mutationDeleteProd= useMutation({
        mutationFn: deleteProducto,
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_tienda"]
            })
            alert("Eliminado exitosamente")
        }
    })

    return {
        QueryC,
        GetProds,
        mutationPostProductos,
        mutationDeleteProd,
    }
}
