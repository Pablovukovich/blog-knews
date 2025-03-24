import z from 'zod';
export const categoriaSchema = z.string().refine(
    (val) => ['jennie', 'lisa', 'rose', 'jisoo', 'blackpink'].includes(val),
    {
        message: 'Categoría no válida.',
    }
);

export const querySchema = z.object({
    categoria: categoriaSchema.optional(),
    page: z.string().optional(),  // `page` puede ser un string porque viene de req.query
    limit: z.string().optional(),
    sort: z.enum(['fecha', 'popularidad']).optional(),
  });