import { ProductMapper, Productos } from "../types/type-pedido";

export const ServiceEntityMapper = {
    map: (apiService: Productos): ProductMapper => ({
        value: apiService.id_producto,
        label: apiService.marca,
    }),

    mapArray: (apiServices: Productos[] = []): ProductMapper[] =>
        apiServices.map(ServiceEntityMapper.map),
};