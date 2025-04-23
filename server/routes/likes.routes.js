import { toggleLike } from "../controllers/likes.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { Router } from "express";

const router = Router();

router.post("/articulos/:articuloId/like", verifyToken, toggleLike); // Ruta para agregar o eliminar un like

export default router;