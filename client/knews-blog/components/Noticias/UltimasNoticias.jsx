import Link from "next/link";

export default function UltimasNoticias({ noticia }) {
  const fechaFormateada = new Date(noticia.fechaPublicacion).toLocaleDateString(
    "es-ES",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
        <div className="space-y-6 w-full">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              className="w-full md:w-1/3 h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <p className="text-sm text-gray-500">
                  📅 {fechaFormateada} | 🎭 {noticia.categorias?.[0]}
                </p>
                <h3 className="text-xl font-semibold my-2">{noticia.titulo}</h3>
                <p className="text-gray-700">
                  {noticia.contenido?.slice(0, 100)}...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-600">✍{noticia.autor}</p>
                <Link href={`/noticias/${noticia.slug}`}>
                  <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
