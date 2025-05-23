import axios from "axios";
import { PaginationPedido } from "../types/type-pedido";
import { api_general } from "../api";
import { Bounce, toast } from "react-toastify";




const apiPedido = axios.create({
    baseURL: `${api_general}`
})
export const getPedido = async ({page, size}:{page: number, size: number}) => {
    const res = await apiPedido.get<PaginationPedido>("/pedido", {
        params: {page, size}
    })
    return res.data
}
export const postPedido = async (datapedido: PaginationPedido) => {
    try {
        const res = await apiPedido.post("/pedido", datapedido)
        console.log("Pedido creado")
        toast.success('Pedido creado ✅', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        return res.data
    } catch (error) {
        toast.warning('Pedido no se pudo crear 🛑', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        console.log(error)
    }
}
export const updatePedido = async (datapedido: PaginationPedido) => {
    const res = await apiPedido.put(`/pedido`, datapedido)
    return res.data
}
export const deletePedido = async (codigo_Pedido: number) => {
    try {
        toast.success('Pedido eliminado 🗑', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        await apiPedido.delete(`/pedido/${codigo_Pedido}`)
    } catch (error) {
        
        console.log(error)
    }

}


