import User from "../models/usuario.model.js";

export const crearAdmin = async (req, res) =>{
    try{
        const {username, email, password} = req.body;

        //ver si el usuario ya existe 
        const userFound = await User.findOne({email})
        if(userFound){
            res.status(400).json({error: "el usuario ya existe"})
        }

        //crear el nuevo admin
        const nuevoAdmin = new User({username, email, password, role:"admin"})
        await nuevoAdmin.save()

        res.status(201).json({ message: "Administrador creado con éxito", nuevoAdmin });
    }catch(error){
        res.status(500).json({ error: "Error al crear el administrador" });
    }
}

export const cambiarAUser = async (req, res ) => {
    try{

        const { id } = req.params;

        //buscar admin a eliminar
        const admin = await User.findById(id)

        if (!admin || admin.role !== "admin") {
            return res.status(404).json({ error: "Administrador no encontrado" });
          }

       //cambiar el rol
       admin.role = "user"
       await admin.save()

       res.json({ message: "Administrador degradado a usuario con éxito", admin });

    }catch(error){
        res.status(500).json({ error: "Error al degradar el administrador" });
    }
} 

export const cambiarAAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar usuario a cambiar
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ success: false, message: "Usuario no encontrado" });
        }

        // Cambiar el rol
        user.role = "admin";
        await user.save();

        res.json({ success: true, message: "Usuario promovido a administrador", user });

    } catch (error) {
        console.error("Error al cambiar el rol:", error);
        res.status(500).json({ success: false, message: "Error al cambiar el rol a administrador" });
    }
};


export const cambiarASuperAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar el usuario
        const admin = await User.findById(id);

        if (!admin || admin.role !== "admin") {
            return res.status(404).json({ error: "Administrador no encontrado" });
        }

        // Asignar nuevo rol
        admin.role = "superAdmin";
        await admin.save();

        res.json({ message: "Administrador promovido a SuperAdmin con éxito", admin });

    } catch (error) {
        res.status(500).json({ error: "Error al promover el administrador" });
    }
};
