import axios from "axios";
import { CategoriaProd } from "../types/type-pedido";
import { api_general } from "../api";
import { Bounce, toast } from "react-toastify";




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
        toast.success('Categoria creada ✅', {
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
export const updateCategoria = async (dataCategoria: CategoriaProd) => {
    try {
        
        const res = await apiCategoria.put(`/categoria`, dataCategoria)
        toast.success('Categoria editada ✅', {
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
        toast.warning('Categoria no se pudo editar 🛑', {
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
export const deleteCategoria = async (codigo_Categoria: number) => {
    try {
        
        await apiCategoria.delete(`/categoria/${codigo_Categoria}`)
        toast.success('Categoria eliminada 🗑', {
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
        toast.warning('Categoria relacionada con otra entidad 🛑', {
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


