export interface PaginationPedido {
  content: ContentPedido[]
  pageable: Pageable
  last: boolean
  totalElements: number
  totalPages: number
  first: boolean
  numberOfElements: number
  size: number
  number: number
  sort: Sort2
  empty: boolean
}

export interface ContentPedido {
  idPedido: number
  fechaPedido: string
  seniaPagada: boolean
  horaDespacho: string
  horaLlegada: string
  locacionTienda: string
  listProds: ListProd[]
  compradorRelacion?: CompradorRelacion
}

export interface ListProd {
  id_producto: number
  marca: string
  precio: number
  stock: number
  numberoTalle: number
  color: string
  categoria: Categoria
}

export interface Categoria {
  id_categoria: number
  nombreCategoria: string
  descripcionCategoria: string
}

export interface CompradorRelacion {
  idComprador: number
  nombreComprador: string
  apellidoComprador: string
  dniComprador: number
  numTarjeta: number
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  unpaged: boolean
  paged: boolean
}

export interface Sort {
  empty: boolean
  unsorted: boolean
  sorted: boolean
}

export interface Sort2 {
  empty: boolean
  unsorted: boolean
  sorted: boolean
}
