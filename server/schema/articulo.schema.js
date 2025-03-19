import { z } from 'zod';



export const articuloSchema = z.object({
  titulo: z.string({
    required_error: "Debe contener un título",
  }).min(5, "El título debe tener al menos 5 caracteres")
    .max(100, "El título no debe superar los 100 caracteres")
    .trim(),
  
  contenido: z.string({
    required_error: "Debe haber un contenido",
  }).min(20, "El contenido debe tener al menos 20 caracteres")
    .max(5000, "El contenido no debe superar los 5000 caracteres")
    .trim(),

  autor: z.string().optional(), 

  categoria: z.enum(["Lisa", "Rose", "Jennie", "Jisoo", "Blackpink"])
    .default("Blackpink"), 
});
