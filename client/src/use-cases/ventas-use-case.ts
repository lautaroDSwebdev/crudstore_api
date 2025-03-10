import axios from "axios";
import { ArrayTienda } from "../types/TypesTiendaBackend";

const apiVentas = axios.create({
    baseURL: "http://localhost:8080/ventas"
})
export const getVentas = async () => {
    const res = await apiVentas.get<ArrayTienda[]>("/get")
    return res.data
}
export const postVenta = async (dataVenta: ArrayTienda) => {
  try {
      const res = await apiVentas.post("/post", dataVenta)
      console.log("Esto es el post venta")
      console.log(res.data)
      return res.data
    } catch (error) {
        console.log("Hubo un error en el postVenta: " + error)
    }
}
export const updateVentas = async ( dataVenta: ArrayTienda) => {
    const res = await apiVentas.put(`/put`, dataVenta)
    return res.data
}
export const deleteVentas = async (codigo_venta: number) => {
    await apiVentas.delete(`/del/${codigo_venta}`)
    
}