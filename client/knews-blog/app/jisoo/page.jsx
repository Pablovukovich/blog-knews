"use client";

import React from "react";
import { JisooHeader } from "@/components/integrantes/jisoo/header/JisooHeader";
import { JisooBio } from "@/components/integrantes/jisoo/biografia/JisooBio";
import { JisooDisc } from "@/components/integrantes/jisoo/discografia/JisooDisc";
import { JisooMarcas } from "@/components/integrantes/jisoo/marcas/JisooMarcas";
import { Blissoo } from "@/components/integrantes/jisoo/empresa/Blissoo";
import { IntFooter } from "@/components/integrantes/footer/IntFooter";
import { IntNav } from "@/components/integrantes/IntNav/IntNav";
const marcas = [
  { img: "dior-2025.jpg", logo: "dior.png" },
  { img: "dior-beauty.jpg", logo: "dior-beauty.png" },
  { img: "cartier.jpg", logo: "cartier.png" },
  { img: "self.jpg", logo: "self.png" },
  { img: "tommy.jpg", logo: "tommy.png" },
  { img: "dyson.png", logo: "dyson.png" },
  { img: "alo-yoga.png", logo: "alo.png" },
];
const jisooAlbums = [
  { src: "/jisoo/discos-jisoo/amortage.jpg", title: "Amortage", song: "Album" },
  { src: "/jisoo/discos-jisoo/me.jpg", title: "Me", song: "Album" },
];

export default function Jisoo() {
  return (
    <>
      <IntNav
            label="deadline"
            className="text-[#A5A4BF]  hover:text-[#C1C2D9] transition duration-300 font-bold"
            btnClass="text-white px-4 py-2 rounded-md bg-[#464C59] hover:bg-[#C1C2D9] transition duration-300 flex items-center gap-2 w-42"
            />
      <JisooHeader/>
      
      <JisooBio/>
      
      <JisooDisc albums={jisooAlbums}/>

      
      <JisooMarcas marcas={marcas}/>
      
      <Blissoo/>  
      
      <IntFooter integrante={`Jisoo`}/>
    </>
  );
}
