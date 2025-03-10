import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteCliente, getClientes, postClientes, updateCliente } from "../use-cases/clientes-use-case";
import { UnCliente } from "../types/TypesTiendaBackend";


export function useMutationClientes() {

    const QueryC = useQueryClient()

    const GetClients = useQuery({
        queryKey: ["data_client"],
        queryFn: getClientes,
    });


    const mutationPostClientes = useMutation({
        mutationFn: (dataclient: UnCliente) => {
            return postClientes(dataclient)
        },
        onSuccess: function Exito() {
            alert("Post exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_cliente"]
            })
        }
    })

    const mutationPutCliente = useMutation({
        mutationFn: (dataclient: UnCliente ) =>  updateCliente(dataclient),
        onSuccess: function Exito() {
            console.log("Edicion exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_cliente"]
            })
        }
    })

    const mutationDeleteCliente = useMutation({
        mutationFn: deleteCliente,
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_cliente"]
            })
            alert("Eliminado exitosamente")
        }
    })


    return {
        QueryC,
        GetClients,
        mutationPostClientes,
        mutationPutCliente,
        mutationDeleteCliente
    }
}
