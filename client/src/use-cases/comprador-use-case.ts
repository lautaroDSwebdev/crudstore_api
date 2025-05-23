import axios from "axios";
import { Comprador } from "../types/type-pedido";
import { api_general } from "../api";
import { Bounce, toast } from "react-toastify";

const apiCompador = axios.create({
    baseURL: `${api_general}`
})

export const getCompador = async () => {
    const res = await apiCompador.get<Comprador[]>("/comprador")
    return res.data
}
export const postCompador = async (dataprod: Comprador) => {
    try {
        const res = await apiCompador.post("/comprador", dataprod)
        console.log("Compador creado")
        toast.success('Comprador creado ✅', {
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
        toast.warning('esta categoria no se pudo eliminar 🛑', {
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
export const putCompador = async (dataprod: Comprador) => {
    try {
        const res = await apiCompador.put(`/comprador`, dataprod)
        console.log("Compador editado")
        toast.success('Comprador editado ✅', {
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
        toast.warning('Comprador no se pudo editar 🛑', {
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
export const deleteCompador = async (codigo_prod: number) => {
    try {

        await apiCompador.delete(`/comprador/${codigo_prod}`)
        toast.success('Comprador eliminado 🗑', {
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
    } catch (error) {
        toast.warning('Elimina el pedido el cual este comprador se relaciona', {
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