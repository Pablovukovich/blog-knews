import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { verificarRol } from "../middleware/verificarRol.js";
import { crearAdmin, cambiarAAdmin,cambiarAUser, cambiarASuperAdmin } from "../controllers/admins.controller.js";
const router = Router()

router.post('/crear-admin', verifyToken, verificarRol(["superAdmin"]), crearAdmin)
router.put("/cambiar-a-user/:id", verifyToken, verificarRol(["superAdmin"]), cambiarAUser);
router.put("/cambiar-a-admin/:id", verifyToken, verificarRol(["superAdmin"]), cambiarAAdmin);
router.put("/cambiar-a-superadmin/:id", verifyToken, verificarRol(["superAdmin"]), cambiarASuperAdmin);

export default router