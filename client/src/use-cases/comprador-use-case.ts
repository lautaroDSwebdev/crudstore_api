import axios from "axios";
import { CompradorRelacion } from "../types/TypesTiendaBackend";
import { api_general } from "../api";

const apiCompador = axios.create({
    baseURL: `${api_general}`
})

export const getCompador = async () => {
    const res = await apiCompador.get<CompradorRelacion[]>("/comprador")
    return res.data
}
export const postCompador = async (dataprod: CompradorRelacion) => {
    try {
        const res = await apiCompador.post("/comprador", dataprod)
        console.log("Compador creado")
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const putCompador = async (dataprod: CompradorRelacion) => {
    try {
        const res = await apiCompador.put(`/comprador`, dataprod)
        console.log("Compador editado")
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteCompador = async (codigo_prod: number) => {
    await apiCompador.delete(`/comprador/${codigo_prod}`)
    
}