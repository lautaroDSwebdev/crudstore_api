import { z } from "zod";

export const Categoria_schema = z.object({
    nombreCategoria: z.string().min(1, "El nombre es obligatorio"),
    descripcionCategoria: z.string().min(1, "El apellido es obligatorio"),
})
    

