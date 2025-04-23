"use client";
import { Heart, Facebook, Instagram, Twitter } from "lucide-react";
import { use, useState } from "react";
import api from "@/lib/axios";

export default function NoticiaCompleta({ noticia }) {
  //likes
  const [liked, setLiked] = useState(false);
  const [ likedCount, setLikedCount ] = useState(0);

  //comentarios
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  // Manejar el evento de like
  const manejarLike = async () => {
    try {
      const response = await api.post(`/likes/articulos/${noticia._id}/like`, null, {
        withCredentials: true, // ¡Esto es importante!
      });
      if (response.status === 200) {
        const nuevoEstadoLike = response.data.liked;
        setLiked(nuevoEstadoLike);
        setLikedCount((prev) => nuevoEstadoLike ? prev + 1 : prev - 1);
      }
    } catch (error) {
      console.error("Error al manejar el like:", error);
    }


  }

  const manejarComentario = () => {
    if (comentario.trim()) {
      setComentarios([...comentarios, comentario]);
      setComentario("");
    }
  };

  return (
    <article className="w-full max-w-6xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-8 mt-6">
      {/* Título */}
      <h1 className="text-4xl font-bold text-gray-900">{noticia.titulo}</h1>

      {/* Info */}
      <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
        <div className="space-x-4 mb-2">
          <span>🖋 {noticia.autor}</span>
          <span>📅 {noticia.fecha}</span>
          <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-medium">
            {noticia.categoria}
          </span>
        </div>

        <button
          onClick={manejarLike}
          className={`flex items-center gap-1 text-sm px-4 py-2 rounded-full transition ${
            liked
              ? "bg-pink-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-pink-100"
          }`}
        >
          <Heart className="w-4 h-4" fill={liked ? "white" : "none"} />
          {liked ? "Te gusta" : "Like"}
        </button>
      </div>

      {/* Imagen */}
      <img
        src={noticia.imagen}
        alt={noticia.titulo}
        className="w-full h-[450px] object-cover rounded-lg shadow-md"
      />

      {/* Descripción */}
      <p className="text-xl text-gray-700 font-medium">{noticia.descripcion}</p>

      {/* Cuerpo */}
      <div className="prose max-w-none text-gray-800 text-lg leading-relaxed">
        {noticia.cuerpo.split("\n").map((p, i) => (
          <p key={i}>
            {p ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, sapien ut fermentum congue...`}
          </p>
        ))}
      </div>

      {/* Redes sociales */}
      <div className="border-t border-gray-300 pt-6 flex items-center justify-center gap-6 text-gray-600">
        <a href="#" className="hover:text-blue-600 transition" title="Facebook">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-pink-600 transition" title="Instagram">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-sky-500 transition" title="Twitter">
          <Twitter className="w-5 h-5" />
        </a>
      </div>

      {/* Comentarios */}
      <div className="space-y-4 pt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Comentarios</h2>

        <textarea
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm resize-none"
          placeholder="Escribe tu comentario..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        <button
          onClick={manejarComentario}
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full shadow-sm transition"
        >
          Enviar comentario
        </button>

        {comentarios.length > 0 && (
          <div className="space-y-3 mt-4">
            {comentarios.map((c, i) => (
              <div
                key={i}
                className="bg-gray-100 p-3 rounded-md text-gray-800 shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
