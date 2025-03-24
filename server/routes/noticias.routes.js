import { Router } from "express";
import { getAll, getOne, create, update,remove, buscarArticulos } from "../controllers/articulos.controller.js";
import { verificarRol } from "../middleware/verificarRol.js";

const router = Router()

router.get('/articulos', getAll);
router.get('/articulos/:id', getOne);
router.post('/articulos',verificarRol(["superAdmin", "admin"]), create);
router.put('/articulos/:id',verificarRol(["superAdmin", "admin"]), update);
router.delete('/articulos/:id',verificarRol(["superAdmin", "admin"]), remove);

router.get("/articulos/buscar", buscarArticulos);

export default router;