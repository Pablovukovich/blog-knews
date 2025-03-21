import Articulo from "../models/articulo.model.js";


export const getAll = async (req, res) => {
  try {

    const validatedQuery = querySchema.safeParse(req.query);

        if (!validatedQuery.success) {
            return res.status(400).json({
                success: false,
                message: validatedQuery.error.errors[0].message,
            });
        }

      let filtro = {} //objeto para construir el filtro 

      //si se proporciona la categoria en la query, agregar al filtro 
      if (validatedQuery.data.categoria) {
        filtro.categorias = { $in: [validatedQuery.data.categoria] };
    }

    const articulos = await Articulo.find(filtro).populate(
      "comentarios.usuario",
      "username"
    ); // Trae datos del usuario en los comentarios

    res.status(200).json({
      success: true,
      total: articulos.length,
      articulos,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener los artículos",
      error: error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id).populate(
      "comentarios.usuario",
      "username"
    );
    if (!articulo)
      return res
        .status(400)
        .json({ success: false, message: "articulo no encontrado" });

    res.status(200).json({
      success: true,
      articulo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener el articulo",
      error: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { titulo, contenido, categorias, imagen } = req.body;

    if (!titulo || !contenido || !categorias || categorias.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Todos los campos son obligatorios" });
    }

    const newArticulo = new Articulo({
      titulo,
      contenido,
      categorias,
      imagen: imagen || "", // Si no se envía imagen, queda vacío
    });

    const savedArticulo = await newArticulo.save();

    res.status(201).json({
      success: true,
      message: "Artículo creado exitosamente",
      articulo: savedArticulo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear el artículo",
      error: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const articulo = await Articulo.findByIdAndDelete(req.params.id);

    if (!articulo) {
      return res
        .status(404)
        .json({ success: false, message: "No se encontró el artículo" });
    }

    res.status(200).json({
      success: true,
      message: "Artículo eliminado correctamente",
      articulo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar el artículo",
      error: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {

    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ 
            success: false, 
            message: "No hay datos para actualizar" 
        });
    }



    const articulo = await Articulo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!articulo) {
      return res
        .status(404)
        .json({ success: false, message: "No se encontró el artículo" });
    }

    res.status(200).json({
      success: true,
      message: "Artículo actualizado correctamente",
      articulo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al actualizar el artículo",
      error: error.message,
    });
  }
};
