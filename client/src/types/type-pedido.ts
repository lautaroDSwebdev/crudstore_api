import { ProductosEntity } from "./type-productos"
import { CompradorTypesPaged } from "./types-comprador"

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
  listProds: ProductosEntity[]
  compradorRelacion?: CompradorTypesPaged
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
