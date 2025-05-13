import { z } from "zod";

export const categoria_schema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    descripcion: z.string().min(1, "El apellido es obligatorio"),
})
    

