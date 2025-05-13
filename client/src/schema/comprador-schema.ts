import { z } from "zod";

export const compradorSchema = z.object({
  idComprador: z.number(),
  nombreComprador: z.string(),
  apellidoComprador: z.string().nullable(),
  dniComprador: z.number(),
  numTarjeta: z.number(),
//   fotoComprador: z.string().nullable(),
});
