import { ProductMapper, ProductosEntity } from "../types/index"

export const ProductEntityMapper = {
    map: (apiProd: ProductosEntity): ProductMapper => ({
        value: apiProd?.id_producto,
        label: apiProd?.marca,
    }),

    mapArray: (options: ProductosEntity[] = []): ProductMapper[] =>
        options.map(ProductEntityMapper.map),
};