import axios from "axios";
import { ProveedorType} from "../types/TypesTiendaBackend";
import { api_general } from "../api";
import { Bounce, toast } from "react-toastify";




const apiProveedor = axios.create({
    baseURL: `${api_general}`
})
export const getProveedor = async () => {
    const res = await apiProveedor.get<ProveedorType[]>("/proveedor")
    return res.data
}
export const postProveedor = async (dataProveedor: ProveedorType) => {
    try {
        const res = await apiProveedor.post("/proveedor", dataProveedor)
        console.log("Proveedor creado")
        toast.success('Proveedor creado ✅', {
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
        toast.warning('Proveedor no se pudo crear 🛑', {
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
export const updateProveedor = async (dataProveedor: ProveedorType) => {
    const res = await apiProveedor.put(`/proveedor`, dataProveedor)
    return res.data
}
export const deleteProveedor = async (codigo_Proveedor: number) => {
    try {
        toast.success('Proveedor eliminado 🗑', {
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
        await apiProveedor.delete(`/proveedor/${codigo_Proveedor}`)
    } catch (error) {
        
        console.log(error)
    }

}


