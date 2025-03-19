import { Router } from "express";
import { crearComentario, obtenerComentariosPorArticulo } from "../controllers/comentarios.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.post('/comentarios',verifyToken ,crearComentario)

router.get('/comentarios/:articuloId', obtenerComentariosPorArticulo)


export default router;