import { Router } from "express";
import { getAll, getOne, create, update,remove } from "../controllers/articulos.controller.js";

const router = Router()

router.get('/articulos', getAll);
router.get('/articulos/:id', getOne);
router.post('/articulos', create);
router.put('/articulos/:id', update);
router.delete('/articulos/:id', remove);

export default router;