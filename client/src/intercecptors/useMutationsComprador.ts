import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {  CompradorRelacion } from "../types/TypesTiendaBackend";
import { postCompador, getCompador, deleteCompador, putCompador  } from "../use-cases";


export function useMutationsComprador() {

    const QueryC = useQueryClient()

    const GetCompradorquery = useQuery({
        queryKey: ["data_comprador"],
        queryFn: getCompador,
    });
 
 

    const mutationPostCompador = useMutation({
        mutationFn: (dataCompador: CompradorRelacion) => {
            return postCompador(dataCompador)
        },
        onSuccess: function Exito() {
            console.log("Post exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_comprador"]
            })
        }
    })


    const mutationPutCompador = useMutation({
        mutationFn: (dataCompador: CompradorRelacion ) =>  putCompador(dataCompador),
        onSuccess: function Exito() {
            console.log("Edicion exitoso")
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
            alert("Eliminado exitosamente")
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
