import jwt from 'jsonwebtoken';

export const generarTokenYSetcookie = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'}); // Generamos un token con el id del usuario

    res.cookie( "token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 604800000 // 7 días
    } )

    return token;
}