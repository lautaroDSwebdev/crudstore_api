import axios from "axios";
import { Api_tienda } from "../types/types";



const apiVentas = axios.create({
    baseURL: "http://localhost:3000/"
})

// const apiProductos = axios.create({
//     baseURL: "http://localhost:3000/"
// })

export const getVentas = async () => {
    const res = await apiVentas.get<Api_tienda[]>("api")
    return res.data
}

export const postVenta = async (dataVenta:Api_tienda) => {
  try {
      const res = await apiVentas.post("api", dataVenta)
      console.log("Esto es el post venta")
      console.log(res.data)
      return res.data
    } catch (error) {
        console.log("Hubo un error en el postVenta: " + error)
    }
}


// export const postProd = async ( newProd: ListaProd) => {
//     const res = await apiProductos.post("post", newProd)
//     return res.data
// }

export const updateVentas = async () => {
    const res = await apiVentas.put(`api`)
    return res.data
}
export const deleteVentas = async (id: string) => {
    const res = await apiVentas.delete(`api/${id}`)
    return res.data
}

