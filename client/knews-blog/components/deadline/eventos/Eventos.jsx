import React, { useEffect } from "react";
import useEventStore from "@/store/useEventStore";

export const Eventos = () => {
  const { deadlineEvent, eventos, loading, error } = useEventStore();
  useEffect(() => {
    deadlineEvent();
  }, [deadlineEvent]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="scrollbar overflow-y-auto h-[500px] pr-2 space-y-4">
        {eventos.map((evento, index) => (
          <div
            key={evento.id}
            className="w-full max-w-2xl mx-auto bg-white/2 backdrop-blur-md border border-[#8C566F]/20 rounded-lg p-6 flex justify-between items-center text-white shadow-lg "
          >
            {/* Izquierda: Ciudad y lugar */}
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-bold uppercase">
                {evento.paisEstado}
              </h2>
              <p className="text-sm text-gray-300">{evento.estadio}</p>
            </div>

            {/* Derecha: Fecha, día y hora */}
            <div className="flex flex-col text-right">
              <span className="text-lg font-semibold">{evento.estadio}</span>
              <span className="text-sm text-gray-300">{evento.dia}</span>
              <span className="text-sm text-gray-300">{evento.horario}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
