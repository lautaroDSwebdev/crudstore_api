import axios from "axios";
import { Productos } from "../types/TypesTiendaBackend";
import { api_general } from "../api";

const apiProductos = axios.create({
    baseURL: `${api_general}`
})
export const getProductos = async () => {
    const res = await apiProductos.get<Productos[]>("/prod")
    return res.data
}
export const postProductos = async (dataProductos: Productos) => {
  try {
      const res = await apiProductos.post("/prod", dataProductos)
      console.log("Esto es el post Productos")
      console.log(res.data)
      return res.data
    } catch (error) {
        console.log("Hubo un error en el postProductos: " + error)
    }
}
export const updateProductos = async ( dataProductos: Productos) => {
    const res = await apiProductos.put(`/prod`, dataProductos)
    return res.data
}
export const deleteProductos = async (codigo_Productos: number) => {
    await apiProductos.delete(`/prod/${codigo_Productos}`)
    
}