import axios from "axios";
import { ListaProd } from "../types/TypesTiendaBackend";

const apiProds = axios.create({
    baseURL: "http://localhost:8080/prod"
})

export const getProductos = async () => {
    const res = await apiProds.get<ListaProd[]>("/get")
    return res.data
}
export const postProductos = async (dataprod: ListaProd[]) => {
    try {
        const res = await apiProds.post("/post", dataprod)
        console.log("Producto creado")
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteProducto = async (codigo_prod: number) => {
    await apiProds.delete(`/del/${codigo_prod}`)
    
}