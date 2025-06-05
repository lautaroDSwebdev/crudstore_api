export interface CompradorTypesPaged{
    content: Content[]
    pageable: Pageable
    last: boolean
    totalElements: number
    totalPages: number
    first: boolean
    size: number
    number: number
    sort: Sort2
    numberOfElements: number
    empty: boolean
  }
  
  export interface Content {
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
    paged: boolean
    unpaged: boolean
  }
  
  export interface Sort {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  
  export interface Sort2 {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  