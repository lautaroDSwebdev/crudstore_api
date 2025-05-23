export interface PaginationProd {
  content: Content[]
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  numberOfElements: number
  first: boolean
  size: number
  number: number
  sort: Sort2
  empty: boolean
}

export interface Content {
  id_producto: number
  marca: string
  precio: number
  stock: number
  numberoTalle: number
  color: string
  categoria?: Categoria
}

export interface Categoria {
  id_categoria: number
  nombreCategoria: string
  descripcionCategoria: string
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}

export interface Sort2 {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}
