export default function SlideArticulo({ data }) {
  const articulo = data?.articulo?.data?.attributes;

  if (!articulo) return <div className="p-6">Artículo no disponible</div>;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      {articulo.imagen?.data?.attributes?.url && (
        <img
          src={`http://localhost:1337${articulo.imagen.data.attributes.url}`}
          alt={articulo.titulo}
          className="rounded-xl mb-4 w-full h-64 object-cover"
        />
      )}
      <h2 className="text-lg font-bold">{articulo.titulo}</h2>
      <p className="text-gray-600 mt-2">{articulo.resumen}</p>
    </div>
  );
}