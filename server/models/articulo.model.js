import mongoose from "mongoose";


const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fechaPublicacion: { type: Date, default: Date.now },
  categorias: [{ type: String, required: true }],
  autor: { type: String, default: "Admin", immutable: true }, // Admin fijo
  imagen: { type: String, default: "" },
  calificacion: {
    promedio: { type: Number, default: 0 },
    votos: [
      {
        usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
        valor: { type: Number, min: 1, max: 5, required: true }
      }
    ]
  },
  comentarios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comentario" }], // Referencia a comentarios
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }] // Referencia a likes
});

const Articulo = mongoose.model("Articulo", articuloSchema);
export default Articulo;

 
