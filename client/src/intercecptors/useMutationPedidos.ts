import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postPedido, deletePedido, updatePedido } from "../use-cases/pedidos-use-case";
import { PaginationPedido } from "../types/type-pedido";


export function useMutationPedidos() {

    const QueryC = useQueryClient()



    const mutationPostPedidos = useMutation({
        mutationFn: (datapedido: PaginationPedido) => {
            return postPedido(datapedido)
        },
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_pedido"]
            })
        }
    })

    const mutationPutPedidos = useMutation({
        mutationFn: (datapedido: PaginationPedido ) =>  updatePedido(datapedido),
        onSuccess: function Exito() {
            console.log("Edicion exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_pedido"]
            })
        }
    })

    const mutationDeletePedidos = useMutation({
        mutationFn: deletePedido,
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_pedido"]
            })
        }
    })


    return {
        QueryC,
        mutationPostPedidos,
        mutationPutPedidos,
        mutationDeletePedidos
    }
}
