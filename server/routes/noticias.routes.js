import { Router } from "express";
import { getAll, getOne, create, update,remove } from "../controllers/articulos.controller.js";
import { verificarRol } from "../middleware/verificarRol.js";

const router = Router()

router.get('/articulos', getAll);
router.get('/articulos/:id', getOne);
router.post('/articulos',verificarRol(["superAdmin", "admin"]), create);
router.put('/articulos/:id',verificarRol(["superAdmin", "admin"]), update);
router.delete('/articulos/:id',verificarRol(["superAdmin", "admin"]), remove);

export default router;