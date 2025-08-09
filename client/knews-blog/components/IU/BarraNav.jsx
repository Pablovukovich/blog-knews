'use client';

import { useRouter } from 'next/navigation';

import { BotonFiltro } from './BotonFiltro';

export default function BarraNav() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-start w-full h-auto px-4 py-3 text-white shadow-md  mb-4 border-b-primary border-b-1">
      {/* Botón volver atrás */}
      <button
        onClick={() => router.back()}
        className=" text-xl hover:scale-105 transition-all ease-in-out duration-300 text-primary font-light px-4 py-2  mr-4"
      >
        ← Volver
      </button>

      {/* Botón o componente filtro */}
      <BotonFiltro/>
    </div>
  );
}