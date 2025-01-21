export interface Api_tienda {
    codigo_venta: number
    fecha_venta: string
    total: number
    lista_prod: ListaProd[]
    unCliente?: UnCliente
    id: string
  }
  
  export interface ListaProd {
    codigo_producto: number
    nombre: string
    marca: string
    costo: number
    stock: number
  }
  
  export interface UnCliente {
    id_cliente: number
    nombre: string
    apellido: string
    edad: number
    dni: number
  }
  