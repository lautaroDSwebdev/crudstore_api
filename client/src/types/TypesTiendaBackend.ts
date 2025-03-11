export interface ArrayTienda {
    codigo_venta: number
    fecha_venta: string
    total: number
    lista_prod: ListaProd[]
    unCliente?: UnCliente
  }
  
  export interface ListaProd {
    codigo_producto: number
    nombre_producto: string
    marca: string
    costo: number
    stock: number
  }
  
  export interface UnCliente {
    id_cliente: number
    nombre_cliente: string
    apellido: string
    edad: number
    dni: number
  }
  