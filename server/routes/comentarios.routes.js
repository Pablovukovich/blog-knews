import { Router } from "express";
import { crearComentario, obtenerComentariosPorArticulo } from "../controllers/comentarios.controller.js";


const router = Router();

router.post('/comentarios', crearComentario)

router.get('/comentarios/:articuloId', obtenerComentariosPorArticulo)


export default router;