import mongoose from "mongoose"; // Importamos mongoose



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum:  ["user", "admin","superAdmin"], // Solo puede ser "user" o "admin"
        default: "user"
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationExpiresAt: Date

}, {
    timestamps: true
});

export default mongoose.model("Usuario", userSchema); // Exportamos el modelo de usuario