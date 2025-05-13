export interface PedidosEntity {
  idPedido: number
  fechaPedido: string
  seniaPagada: boolean
  // listProds: Productos[]
  compradorRelacion: CompradorRelacion
  locacionTienda: string,
}

export interface Productos {
  id_producto: number
  marca: string
  proveedor: string
  precio: number
  stock: number
  numberoTalle: number
  color: string
  categoria_prod: CategoriaProd
}

export interface ProductMapper{
  value: number
  label: string
}

export interface CategoriaProd {
  id_categoria: number
  nombre: string
  descripcion: string
}

export interface CompradorRelacion {
  idComprador: number
  nombreComprador: string
  apellidoComprador: string
  dniComprador: number
  numTarjeta: number
}