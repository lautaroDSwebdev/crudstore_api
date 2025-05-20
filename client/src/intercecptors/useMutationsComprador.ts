import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {  Comprador } from "../types/TypesTiendaBackend";
import { postCompador, getCompador, deleteCompador, putCompador  } from "../use-cases";


export function useMutationsComprador() {

    const QueryC = useQueryClient()

    const GetCompradorquery = useQuery({
        queryKey: ["data_comprador"],
        queryFn: getCompador,
    });
 
 

    const mutationPostCompador = useMutation({
        mutationFn: (dataCompador: Comprador) => {
            return postCompador(dataCompador)
        },
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_comprador"]
            })
        }
    })


    const mutationPutCompador = useMutation({
        mutationFn: (dataCompador: Comprador ) =>  putCompador(dataCompador),
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
        GetCompradorquery,
        QueryC,
        mutationDeleteCompador,
        mutationPostCompador,
        mutationPutCompador,
    }
}
