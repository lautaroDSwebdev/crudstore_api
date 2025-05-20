import axios from "axios";
import { Productos } from "../types/TypesTiendaBackend";
import { api_general } from "../api";
import { Bounce, toast } from "react-toastify";

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
      toast.success('Productos creado ✅', {
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
      console.log("Esto es el post Productos")
      console.log(res.data)
      return res.data
    } catch (error) {
        toast.warning('Fallo creacion de productos  ✅', {
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
        console.log("Hubo un error en el postProductos: " + error)
    }
}
export const updateProductos = async ( dataProductos: Productos) => {
    try {

        const res = await apiProductos.put(`/prod`, dataProductos)
        toast.success('Productos editado ✅', {
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
        console.log(error)
        toast.warning('Fallo al editar producto  🛑', {
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
    }
}
export const deleteProductos = async (codigo_Productos: number) => {
    try {
        await apiProductos.delete(`/prod/${codigo_Productos}`)
        toast.success('Producto eliminado ✅', {
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
        console.log(error)
        toast.warning('Elimina este dato de otra entidad ya relacionada🛑', {
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
    }
    
}