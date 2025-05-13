import { z } from 'zod';

export const pedidoSchema = z.object({
  fechaPedido: z.string(), // Puedes validarlo más si sabes el formato
  seniaPagada: z.boolean(),
  compradorRelacion: z.object({
    idComprador: z.number(),
  }),
});
