import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  articulo: { type: mongoose.Schema.Types.ObjectId, ref: "Articulo", required: true },
  fecha: { type: Date, default: Date.now }
});

likeSchema.index({ usuario: 1, articulo: 1 }, { unique: true });

export default mongoose.model("Like", likeSchema);