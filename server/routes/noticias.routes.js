import { Router } from "express";
import { getAll, getOne, create, update,remove, buscarArticulo,getBySlug } from "../controllers/articulos.controller.js";
import { verificarRol } from "../middleware/verificarRol.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router()

router.get('/articulos', getAll);
router.get("/articulos/buscar", buscarArticulo);
router.get('/articulos/:id', getOne);
router.get("/articulos/slug/:slug", getBySlug);
router.post('/articulos',verifyToken,verificarRol(["superAdmin", "admin"]), create);
router.put('/articulos/:id',verificarRol(["superAdmin", "admin"]), update);
router.delete('/articulos/:id',verificarRol(["superAdmin", "admin"]), remove);



export default router;