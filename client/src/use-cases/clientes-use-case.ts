import axios from "axios";
import { UnCliente } from "../types/TypesTiendaBackend";




const apiClientes = axios.create({
    baseURL: "http://localhost:8080/cliente"
})



export const getClientes = async () => {
    const res = await apiClientes.get<UnCliente[]>("/get")
    return res.data
}




export const postClientes = async (dataclient: UnCliente) => {
    try {
        const res = await apiClientes.post("/post", dataclient)
        console.log("cliente creado")
        return res.data
    } catch (error) {
        console.log(error)
    }
}




export const updateCliente = async ( dataclient: UnCliente) => {
    const res = await apiClientes.put(`/put`, dataclient)
    return res.data
}


export const deleteCliente = async (codigo_cliente: number) => {
    await apiClientes.delete(`/del/${codigo_cliente}`)
    
}


