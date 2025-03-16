import Comentario from "../models/comentario.model.js";
import Articulo from "../models/articulo.model.js";

export const crearComentario = async (req, res) => {
  try {
    const { articuloId, usuarioId, contenido } = req.body;

    const nuevoComentario = new Comentario({
      usuario: usuarioId,
      articulo: articuloId,
      contenido,
    });

    //guardar en la base de datos
    await nuevoComentario.save();

    // Agregar referencia al artículo
    await Articulo.findByIdAndUpdate(articuloId, {
      $push: { comentarios: nuevoComentario._id },
    });

    res.status(201).json(nuevoComentario);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el comentario", error: error.message });
  }
};

export const obtenerComentariosPorArticulo = async (req, res) => {
  try {
    //obtenemos el articulo
    const { articuloId } = req.params;
    //obtenemos los comentarios 
    const comentarios = await Comentario.find({
      articulo: articuloId,
    }).populate("usuario", "username");

    //respuesta
    res.status(200).json(comentarios);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener los comentarios",
        error: error.message,
      });
  }
};
