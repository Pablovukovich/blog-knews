export default function SlidePersonalizado({ data }) {
  return (
    <div className="p-6 bg-pink-200 rounded-2xl shadow-md text-center">
      <h2 className="text-xl font-bold">{data.titulo}</h2>
      <p className="mt-2">{data.descripcion}</p>
      {data.texto_boton && (
        <a
          href={data.enlace_boton || "#"}
          className="mt-4 inline-block bg-pink-600 text-white px-4 py-2 rounded-lg"
        >
          {data.texto_boton}
        </a>
      )}
    </div>
  );
}
