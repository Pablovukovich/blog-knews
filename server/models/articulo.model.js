import mongoose from "mongoose";


const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fechaPublicacion: { type: Date, default: Date.now },
  categorias: [{ type: String, required: true }],
  autor: { type: String, default: "Knews", immutable: true }, // Admin fijo
  imagen: { type: String, default: "" },
  comentarios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comentario" }], // Referencia a comentarios
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }], // Referencia a likes
  popularidad: { type: Number, default: 0 }, // 🔥 Agregar popularidad si vas a usar el índice
});



articuloSchema.index({ titulo: "text" }); // Para búsqueda en títulos
articuloSchema.index({ categorias: 1 }); // Para filtrar por categoría
articuloSchema.index({ fechaPublicacion: -1 }); // Para ordenar por fecha
articuloSchema.index({ popularidad: -1, fechaPublicacion: -1 }); // Para ordenar por popularidad y fecha

const Articulo = mongoose.model("Articulo", articuloSchema);
export default Articulo;

 
