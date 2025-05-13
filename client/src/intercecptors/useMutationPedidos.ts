import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { postPedido, getPedido, deletePedido, updatePedido } from "../use-cases/pedidos-use-case";
import { PedidosEntity } from "../types/TypesTiendaBackend";


export function useMutationPedidos() {

    const QueryC = useQueryClient()

    const GetPedido = useQuery({
        queryKey: ["data_pedido"],
        queryFn: getPedido,
    });


    const mutationPostPedidos = useMutation({
        mutationFn: (datapedido: PedidosEntity) => {
            return postPedido(datapedido)
        },
        onSuccess: function Exito() {
            alert("Post exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_pedido"]
            })
        }
    })

    const mutationPutPedidos = useMutation({
        mutationFn: (datapedido: PedidosEntity ) =>  updatePedido(datapedido),
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
            alert("Eliminado exitosamente")
        }
    })


    return {
        QueryC,
        GetPedido,
        mutationPostPedidos,
        mutationPutPedidos,
        mutationDeletePedidos
    }
}
