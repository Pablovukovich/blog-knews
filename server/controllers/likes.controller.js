import likeModel from "../models/like.model.js";
import articuloModel from "../models/articulo.model.js";

export const toggleLike = async (req, res) => {
    const { articuloId } = req.params;
    const usuarioId = req.user.id;
    console.log("Usuario ID:", usuarioId);
    try {
      const existingLike = await likeModel.findOne({ usuario: usuarioId, articulo: articuloId });
  
      if (existingLike) {
        await likeModel.deleteOne({ _id: existingLike._id });
  
        await articuloModel.findByIdAndUpdate(articuloId, {
          $pull: { likes: existingLike._id },
        });
  
        return res.status(200).json({ message: "Like eliminado" });
      } else {
        const newLike = await likeModel.create({ usuario: usuarioId, articulo: articuloId });
  
        await articuloModel.findByIdAndUpdate(articuloId, {
          $push: { likes: newLike._id },
        });
  
        return res.status(201).json({ message: "Like agregado" });
      }
    } catch (error) {
      console.error("Error al agregar/eliminar like:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };