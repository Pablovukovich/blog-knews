import jwt from 'jsonwebtoken';
import User from '../models/usuario.model.js'; // Asegúrate de importar el modelo

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Obtenemos el token desde las cookies

        if (!token) {
            return res.status(401).json({ success: false, message: "No autorizado - No hay token" });
        }

        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ success: false, message: "No autorizado - Token inválido" });
        }

        // Buscar el usuario en la base de datos
        const user = await User.findById(decoded.userId).select("-password"); // Excluimos la contraseña
        if (!user) {
            return res.status(404).json({ success: false, message: "Usuario no encontrado" });
        }

        // Guardamos la info del usuario en `req.user`
        req.user = {
            id: user._id,
            role: user.role, // Guardamos el rol para validaciones futuras
            email: user.email,
            username: user.username
        };

        next(); // Pasamos al siguiente middleware o controlador

    } catch (error) {
        console.error("Error al verificar el token", error);

        const mensajeError = error.name === "TokenExpiredError"
        ? "No autorizado - Token expirado"
        : "No autorizado - Token inválido";

    return res.status(401).json({ success: false, message: mensajeError });
    }
};
