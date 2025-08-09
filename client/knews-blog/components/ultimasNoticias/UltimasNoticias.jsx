import React from "react";
import Titulo from "../IU/Titulo";
import { UltimasNoticiasGrid } from "./gridNoticias/UltimasNoticiasGrid";
import { BotonFiltro } from "../IU/BotonFiltro";

export const UltimasNoticias = () => {
  return (
    <section className="bg-zinc-900  p-8  flex  flex-col ">
      <Titulo>ÚLTIMAS NOTICIAS</Titulo>
      <div className=" items-start   w-full flex justify-between py-1 rounded-lg mb-2">
        <BotonFiltro />
      </div>
      <UltimasNoticiasGrid />
    </section>
  );
};
