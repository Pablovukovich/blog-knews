import Articulo from "../models/articulo.model.js";
import { querySchema } from "../schema/categoria.schema.js";

export const getAll = async (req, res) => {
  try {
    const validatedQuery = querySchema.safeParse(req.query);
    if (!validatedQuery.success) {
      return res.status(400).json({
        success: false,
        message: validatedQuery.error.errors[0].message,
      });
    }
    const { categoria, page, limit,sort } = validatedQuery.data;

       // Construir filtro dinámico
    let filtro = {};
    if (categoria && categoria.toLowerCase() !== "all") {
      filtro.categorias = { $in: [categoria] };
    }
     // Configurar paginación
     const pageNumber = page ? parseInt(page) : 1;
     const limitNumber = limit ? parseInt(limit) : null;
     const skip = (pageNumber - 1) * (limitNumber || 0);
     
      // Definir criterios de ordenación
      let sortOptions = {};
      if (sort === 'fecha') {
          sortOptions = { createdAt: -1 }; // Más recientes primero
      } else if (sort === 'popularidad') {
          sortOptions = { likes: -1 }; // Más likes primero
      }

      let query = Articulo.find(filtro)
      .populate("comentarios.usuario", "username")
      .sort(sortOptions);// Aplicamos ordenación; // Trae datos del usuario en los comentarios

    if (limitNumber) {
      query = query.skip(skip).limit(limitNumber);
    }

     // Ejecutar la consulta
     const articulos = await query;

     res.status(200).json({
      success: true,
      total: articulos.length,
      page: limitNumber ? pageNumber : null,
      limit: limitNumber || "Todos",
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

export const getBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const articulo = await Articulo.findOne({ slug }).populate(
      "comentarios.usuario",
      "username"
    );

    if (!articulo)
      return res
        .status(404)
        .json({ success: false, message: "Artículo no encontrado" });

    res.status(200).json({
      success: true,
      articulo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener el artículo por slug",
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
        message: "No hay datos para actualizar",
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

export const buscarArticulo = async (req, res) => {
  try{
    const {titulo, categorias} = req.query;

    let filtro = {};

    if(titulo){
      filtro.titulo = { $regex: titulo, $options: "i" }; // "i" para hacer la búsqueda insensible a mayúsculas/minúsculas
    }
  
    if(categorias) {
      filtro.categorias ={ $in: [categorias] };
    }
  
    const articulos = await Articulo.find(filtro).populate(
      "comentarios.usuario",
      "username"
    );
  
    res.status(200).json({
      success: true,
      total: articulos.length,
      articulos,
    });
  
  }catch(error){
     res.status(500).json({
      success: false,
      message: "Error al buscar artículos",
      error: error.message,
    });
  }
  
 
}