import { useMutation, useQueryClient } from "@tanstack/react-query"

import { CompradorTypesPaged } from "../types/index";
import { postCompador, deleteCompador, putCompador } from "../use-cases";


export function useMutationsComprador() {

    const QueryC = useQueryClient()

 


    const mutationPostCompador = useMutation({
        mutationFn: (dataCompador: CompradorTypesPaged) => {
            return postCompador(dataCompador)
        },
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_comprador"]
            })
        }
    })


    const mutationPutCompador = useMutation({
        mutationFn: (dataCompador: CompradorTypesPaged) => putCompador(dataCompador),
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_comprador"]
            })
        }
    })

    const mutationDeleteCompador = useMutation({
        mutationFn: deleteCompador,
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_comprador"]
            })
        }
    })



    return {
        mutationDeleteCompador,
        mutationPostCompador,
        mutationPutCompador,
    }
}
