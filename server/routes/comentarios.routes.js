import { Router } from "express";
import { crearComentario, obtenerComentariosPorArticulo, eliminarComentario } from "../controllers/comentarios.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verificarRol } from "../middleware/verificarRol.js";

const router = Router();

router.post('/comentarios',verifyToken, verificarRol(["user", "admin"]) ,crearComentario)

router.get('/comentarios/:articuloId', obtenerComentariosPorArticulo)

router.delete('/comentarios/:id', verifyToken, eliminarComentario);

export default router;