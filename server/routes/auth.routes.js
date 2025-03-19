import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {validateSchema} from '../middleware/validator.js';
import { loginSchema, registerSchema } from "../schema/auth.schema.js";
import { login, logout, register, verificarEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.controller.js";
const router = Router();


router.get('/check-auth', verifyToken, checkAuth )
router.post('/register',validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema), login);
router.post('/logout', logout)


router.post('/verificar-email', verificarEmail);
router.post('/forgot-password', forgotPassword );
router.post('/reset-password/:token', resetPassword );




export default router;
