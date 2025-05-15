import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Productos } from "../types/TypesTiendaBackend";
import { deleteProductos, getProductos, postProductos, updateProductos } from "../use-cases";


export function useMutationsProds() {

    const QueryC = useQueryClient()

 
    const GetProds = useQuery({
        queryKey: ["data_producto"],
        queryFn: getProductos,
    });

    const mutationPostProductos = useMutation({
        mutationFn: (dataprod: Productos) => {
            return postProductos(dataprod)
        },
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_prot"]
            })
        }
    })
    const mutationPutProductos = useMutation({
        mutationFn: (dataprod: Productos) => {
            return updateProductos(dataprod)
        },
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_prot"]
            })
        }
    })



    const mutationDeleteProd= useMutation({
        mutationFn: deleteProductos,
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_prot"]
            })
        }
    })

    return {
        QueryC,
        GetProds,
        mutationPostProductos,
        mutationDeleteProd,
        mutationPutProductos
    }
}
