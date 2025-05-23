import { useMutation, useQueryClient } from "@tanstack/react-query"
import { PaginationProd } from "../types/type-productos";
import { deleteProductos, postProductos, updateProductos } from "../use-cases";


export function useMutationsProds() {

    const QueryC = useQueryClient()

 
  

    const mutationPostProductos = useMutation({
        mutationFn: (dataprod: PaginationProd) => {
            return postProductos(dataprod)
        },
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_prod"]
            })
        }
    })
    const mutationPutProductos = useMutation({
        mutationFn: (dataprod: PaginationProd) => {
            return updateProductos(dataprod)
        },
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_prod"]
            })
        }
    })



    const mutationDeleteProd= useMutation({
        mutationFn: deleteProductos,
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_prod"]
            })
        }
    })

    return {
        QueryC,
        
        mutationPostProductos,
        mutationDeleteProd,
        mutationPutProductos
    }
}
