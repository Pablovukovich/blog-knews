import User from "../models/usuario.model.js"; // Importamos el modelo de usuario
import bcryptjs from "bcryptjs"; // Importamos bcryptjs
import { generarTokenYSetcookie } from "../utils/generarTokenYSetcookie.js"; // Importamos la función para generar un token y setear una cookie
import { sendVereficationEmail, sendWelcomeEmail, sentPasswordResetEmail, sendResetPasswordEmail } from "../mailtrap/emails.js";
import crypto from "crypto"

// Función para registrar un nuevo usuario
export const register = async (req, res) => {
    const {username, email, password} = req.body; // Extraemos los datos del cuerpo de la petición

    // Creamos un nuevo usuario
    try{
        if(!username || !email || !password) {
            throw new Error("No se proporcionaron todos los campos"); // Si no se proporcionan todos los campos, lanzamos un error
        }

        const userFound  = await User.findOne({email}); // Buscamos un usuario con el mismo email

        if(userFound) return res.status(400).json({success:false, message: "El email ya está registrado"}); // Si el email ya está registrado, devolvemos un error

        const hashedPassword = await bcryptjs.hash(password, 10); // Encriptamos la contraseña

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString(); // Generamos un código de verificación

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            verificationToken,
            verificationExpiresAt: Date.now() + 600000 // El código de verificación expira en 10 minutos
        })

        await newUser.save(); // Guardamos el nuevo usuario

        //jwt
        generarTokenYSetcookie(res, newUser._id);

       await sendVereficationEmail(newUser.email, verificationToken)

        res.status(201).json({
            success:true,
            message: "Usuario registrado correctamente",
            user:{
                ...newUser._doc,
                password: undefined
            }
        })

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

// Función para verificar un email
export const verificarEmail = async (req, res) => {
    const {code} = req.body; // Extraemos el código de verificación del cuerpo de la petición
    try{
        
        const user = await User.findOne({
            verificationToken: code,
            verificationExpiresAt: {$gt: Date.now()}
        })

        if(!user) return res.status(400).json({message: "Código de verificación inválido o expirado"});

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationExpiresAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.username);

        res.status(200).json({
            success: true ,
            message: "Email verificado correctamente",
             user: {...user._doc, 
                password: undefined
            }
            
            });

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

// Función para loguear un usuario
export const login = async (req, res) =>{
    const {email, password} = req.body; // Extraemos los datos del cuerpo de la petición

    try{
        const userFound = await User.findOne({email}); // Buscamos un usuario con el email proporcionado
        if(!userFound) return res.status(400).json({message: "Usuario no encontrado"}); // Si el usuario no existe, devolvemos un error

        const matchPassword = await bcryptjs.compare(password, userFound.password); // Comparamos la contraseña proporcionada con la contraseña del usuario  

        if(!matchPassword) return res.status(401).json({success: false, message: "Contraseña inválida"}); // Si la contraseña no coincide, devolvemos un error

        generarTokenYSetcookie(res, userFound._id); // Generamos un token y seteamos una cookie

        userFound.lastLogin = new Date(); // Actualizamos la fecha de último login
        await userFound.save(); // Guardamos los cambios

        res.status(200).json({
           success: true,
              message: "Login exitoso",
              user: {...userFound._doc, 
                password: undefined
            }
        })

    }catch(error){
        res.status(500).json({message: error.message});
    } 
}

//funcion para el logout
export const logout = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false, // tiene que coincidir con la función de seteo
        sameSite: "lax",
      })
    res.status(200).json({success: true,message: "Logout exitoso"})
}

//funcion para forgot password
export const forgotPassword = async (req,res)=>{
    const { email } = req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success: false, message: "User not found"})
        }

        //generar el token del reseteo
        const resetToken = crypto.randomBytes(20).toString("hex")
        const resetTokenExpiresAt= Date.now() + 1 * 60 * 60 * 1000; //1 hora 

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;

        await user.save()

        //send email
        await sentPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`)

        res.status(200).json({success: true, message: "el link para restablecer la contraseña fue enviado con exito a tu email"})

    }catch(error){
        console.log("error in forgot password", error)
        res.status(400).json({success: false, message: error.message})
    }
}

//funcion reset password 
export const resetPassword = async (req, res) =>{
    try{
        const {token} = req.params;
        const {password} = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: {$gt: Date.now()}

        })

        if(!user){
            return res.status(400).json({success: false, message:"Invalido o el token ha expirado"})
        }

        //actualizar password
        const hashPassword = await bcryptjs.hash(password, 10);

        user.password = hashPassword; 
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;

        await user.save();

        await sendResetPasswordEmail(user.email)

        res.status(200).json({success: true, message: "La contraseña ha sido reseteada correctamente"})

    }catch(error){
        console.log("Error in resetPassword", error)
        res.status(400).json({success: false, message: error.message})
    }
}

//funcion para chequear si esta auth 
export const checkAuth = async ( req, res ) =>{
    try{
        const user = await User.findById(req.userId).select("-password")
        if(!user) return res.status(400).json({success: false, message:"usuario no encontrado"}) 

         res.status(200).json({ success: true, user })   

    }catch(error){
        console.log("Error a autneticar", error)
        res.status(400).json({success: false, message: error.message}) 
    }
}