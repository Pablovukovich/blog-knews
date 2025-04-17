import Comentario from "../models/comentario.model.js";
import Articulo from "../models/articulo.model.js";


export const crearComentario = async (req, res) => {
  try {
    const { articuloId, contenido } = req.body;
    const usuarioId = req.user.id;

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
    })
    .skip((page - 1) * limit)  // Saltar los comentarios previos según la página
    .limit(parseInt(limit))  // Limitar el número de comentarios por página
    .populate("usuario", "username");

    const totalComentarios = await Comentario.countDocuments({
      articulo: articuloId,
    });


    //respuesta
    res.status(200).json({
      comentarios,
      total: totalComentarios,
      page: parseInt(page),
      totalPages: Math.ceil(totalComentarios / limit),
    });
    
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener los comentarios",
        error: error.message,
      });
  }
};

export const eliminarComentario = async (req, res) =>{
  try{
    const {comentarioId} = req.params;

    if(!comentarioId) return res.status(400).json({success: false, message: "No existe el ID del comentario"})
  
      //buscamos el comentario en la DB
      const comentario = await Comentario.findById(comentarioId);
  
    if(!comentario) return res.status(404).json({success:false, message:"comentario no encontrado"})
  
      // Verificar si el usuario es el autor o tiene rol de admin/superAdmin
      if (req.user.id !== comentario.autor.toString() && req.user.role !== "admin" && req.user.role !== "superAdmin") {
        return res.status(403).json({ success: false, message: "No tienes permisos para eliminar este comentario" });
    }
    
    //si es encontrado lo eliminamos
    await comentario.deleteOne();
  
    res.json({ success: true, message: "Comentario eliminado correctamente" });
  
  }catch(error){
    console.error("Error al eliminar el comentario:", error);
        res.status(500).json({ success: false, message: "Error del servidor" });
  }
 
}