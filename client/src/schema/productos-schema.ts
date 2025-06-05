import { z } from 'zod';

export const productoSchema = z.object({
  marca: z.string(),
  precio: z.number(),
  stock: z.number(),
  numberoTalle: z.number(),
  color: z.string(),
  categoria: z.object({
    nombre: z.string(),
    descripcion: z.string(),
  }),
});
