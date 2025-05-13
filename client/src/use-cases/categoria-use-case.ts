import axios from "axios";
import { CategoriaProd } from "../types/TypesTiendaBackend";
import { api_general } from "../api";




export const apiCategoria = axios.create({
    baseURL: `${api_general}`
})
export const getCategoria = async () => {
    try {
        const res = await apiCategoria.get<CategoriaProd[]>("/categoria")
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const postCategoria = async (dataCategoria: CategoriaProd) => {
    try {
        const res = await apiCategoria.post("/categoria", dataCategoria)
        console.log("Categoria creado")
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const updateCategoria = async ( dataCategoria: CategoriaProd) => {
    const res = await apiCategoria.put(`/categoria`, dataCategoria)
    return res.data
}
export const deleteCategoria = async (codigo_Categoria: number) => {
    await apiCategoria.delete(`/categoria/${codigo_Categoria}`)
    
}


