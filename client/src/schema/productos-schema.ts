import { z } from 'zod';

export const productoSchema = z.object({
  id_producto: z.number(),
  marca: z.string(),
  proveedor: z.nullable(z.string()), // puede ser string o null
  precio: z.number(),
  stock: z.number(),
  numberoTalle: z.number(),
  color: z.string(),
  categoria_prod: z.object({
    id_categoria: z.number(),
    nombre: z.string(),
    descripcion: z.string(),
  }),
});
