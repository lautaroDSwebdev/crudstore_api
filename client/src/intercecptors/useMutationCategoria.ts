import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getCategoria , deleteCategoria, postCategoria, updateCategoria  } from "../use-cases/categoria-use-case";
import { CategoriaProd } from "../types/TypesTiendaBackend";


export function useMutationCategoria() {

    const QueryC = useQueryClient()

    const GetCategoria = useQuery({
        queryKey: ["data_categoria"],
        queryFn: getCategoria,
    });


    const mutationPostCategoria = useMutation({
        mutationFn: (datacategoria: CategoriaProd) => {
            return postCategoria(datacategoria)
        },
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_categoria"]
            })
        }
    })

    const mutationPutcategoria = useMutation({
        mutationFn: (datacategoria: CategoriaProd ) =>  updateCategoria(datacategoria),
        onSuccess: function Exito() {
            console.log("Edicion exitoso")
            QueryC.invalidateQueries({
                queryKey: ["data_categoria"]
            })
        }
    })

    const mutationDeletecategoria = useMutation({
        mutationFn: deleteCategoria,
        onSuccess: function Exito() {
            QueryC.invalidateQueries({
                queryKey: ["data_categoria"]
            })
        }
    })


    return {
        QueryC,
        GetCategoria,
        mutationPostCategoria,
        mutationPutcategoria,
        mutationDeletecategoria
    }
}
