import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { login, logout, register, verificarEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.controller.js";
const router = Router();


router.get('/check-auth', verifyToken, checkAuth )
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout)


router.post('/verificar-email', verificarEmail);
router.post('/forgot-password', forgotPassword );
router.post('/reset-password/:token', resetPassword );




export default router;
