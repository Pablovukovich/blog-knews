import Navbar from "@/components/header/Navbar";
import React from "react";
import Articulo from "./Articulo";
import Footer from "@/components/Footer/Footer";
import { Empresas } from "@/components/IU/Empresas";
import { RedesSociales } from "@/components/IU/RedesSociales";

export const ArticuloCompleto = ({slug}) => {




  return (
    <>
      <Navbar />
     <section className="bg-zinc-800  p-8  flex  flex-col ">

      <div className=" flex h-auto">

      <Articulo slug={slug}/>
      <div className="flex flex-col gap-4 w-64 mx-8  border-l border-l-primary  p-2">
        <Empresas/>
        <RedesSociales/>

      </div>
      </div>
     </section>
      <Footer/>
    </>

  );
};
