import Link from "next/link";

export default function AllArticulos({ noticia }) {
  const fechaFormateada = new Date(noticia.fechaPublicacion).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
  <>
  <Link href={`/noticias/${noticia.slug}`} className="w-full hover:scale-105 transition-transform duration-200">
  <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
  <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col">
    <img
      src={noticia.imagen || "/rose-album.jpg"}
      alt={noticia.titulo}
      className="h-40 w-full object-cover "
    />
    <div className="p-4 flex flex-col justify-between flex-grow">
      <h3 className="text-lg font-semibold mb-1">{noticia.titulo}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-3">
        {noticia.contenido?.slice(0, 100)}...
      </p>
      <div className="flex flex-wrap text-xs text-gray-500 mt-auto gap-2">
        <span className="bg-gray-100 px-2 py-0.5 rounded-full">
          {noticia.categorias?.[0]}
        </span>
        <span>•</span>
        <span>{noticia.autor}</span>
        <span>•</span>
        <span>{fechaFormateada}</span>
      </div>
    </div>
  </div>
   

  </div>
  </Link>
  </>
  );
}
