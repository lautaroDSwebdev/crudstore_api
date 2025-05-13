import axios from "axios";
import { PedidosEntity } from "../types/TypesTiendaBackend";
import { api_general } from "../api";




const apiPedido = axios.create({
    baseURL: `${api_general}`
})
export const getPedido = async () => {
    const res = await apiPedido.get<PedidosEntity[]>("/pedido")
    return res.data
}
export const postPedido = async (datapedido: PedidosEntity) => {
    try {
        const res = await apiPedido.post("/pedido", datapedido)
        console.log("Pedido creado")
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const updatePedido = async ( datapedido: PedidosEntity) => {
    const res = await apiPedido.put(`/pedido`, datapedido)
    return res.data
}
export const deletePedido = async (codigo_Pedido: number) => {
    await apiPedido.delete(`/pedido/${codigo_Pedido}`)
    
}


