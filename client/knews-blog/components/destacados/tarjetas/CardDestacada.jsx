import React from 'react';
import Link from 'next/link';

export const CardDestacada = ({ imagen, titulo, categoria, fecha, resumen, link }) => {
  return (
    <div className="bg-zinc-950 shadow-md overflow-hidden transition hover:shadow-lg flex flex-col h-full">
      {imagen && (
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-56 object-cover"
        />
      )}

      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="uppercase tracking-wide text-[#8e4256] font-medium">
            {categoria}
          </span>
          <span>{fecha}</span>
        </div>

        <h3 className="text-xl font-semibold text-white">{titulo}</h3>

        <p className="text-gray-400 text-sm line-clamp-3">{resumen}</p>

        <div className="mt-auto pt-4">
          <Link
            href={link}
            className="block text-center w-full text-[#a64c5f] text-sm font-medium bg-white hover:bg-[#a64c5f] hover:text-white px-4 py-2 rounded transition duration-300"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </div>
  );
};
