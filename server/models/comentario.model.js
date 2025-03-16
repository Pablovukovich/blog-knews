import mongoose from "mongoose";


const comentarioSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
    articulo: { type: mongoose.Schema.Types.ObjectId, ref: "Articulo", required: true },
    contenido: {type: String, required: true},
    fecha: {type: Date, default: Date.now()}
})


export default mongoose.model("Comentario", comentarioSchema)
