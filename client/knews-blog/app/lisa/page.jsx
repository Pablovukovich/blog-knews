"use client";

import { LisaHeader } from "@/components/integrantes/lisa/header/LisaHeader";
import { LisaBio } from "@/components/integrantes/lisa/biografia/LisaBio";
import { LisaEmpresa } from "@/components/integrantes/lisa/empresa/LisaEmpresa";
import { LisaDisc } from "@/components/integrantes/lisa/discografia/LisaDisc";
import { LisaMarcas } from "@/components/integrantes/lisa/marcas/LisaMarcas";
import { Lloud } from "@/components/integrantes/lisa/lloud/Lloud";
import { IntFooter } from "@/components/integrantes/footer/IntFooter";
import { IntNav } from "@/components/integrantes/IntNav/IntNav";
const lisaSongs = [
  {
    src: "/lisa/discos-lisa/princeless.jpg",
    title: "Princeless",
    song: "Maroon5,LISA",
  },
  { src: "/lisa/discos-lisa/alterego.jpg", title: "Alterego", song: "Album" },
  {
    src: "/lisa/discos-lisa/kiss-me.jpg",
    title: "Moonlit Floor",
    song: "Lisa",
  },
  {
    src: "/lisa/discos-lisa/born-again.jpg",
    title: "Born Again",
    song: "LISA ft. Doja Cat & RAYE",
  },
  {
    src: "/lisa/discos-lisa/new-woman.jpg",
    title: "New Woman",
    song: "LISA ft. Rosalia",
  },
  { src: "/lisa/discos-lisa/rockstar.jpg", title: "Rockstar", song: "LISA" },
  {
    src: "/lisa/discos-lisa/sg.jpg",
    title: "SG",
    song: "LISA,Ozuna & Megan Thee Stallion",
  },
  { src: "/lisa/discos-lisa/lalisa.jpg", title: "LALISA", song: "Album" },
];

const marcas = [
  {
    nombre: "RCA X LLOUD",
    imagen: "/lisa/marcas/lloud-rca.jpg",
    link: "https://www.lloud.co/rca",
  },
  {
    nombre: "LISA X LV",
    imagen: "/lisa/marcas/lv.jpg",
    link: "https://www.lloud.co/louisvuitton-lisa",
  },
  {
    nombre: "KITH",
    imagen: "/lisa/marcas/kith.jpg",
    link: "https://www.lloud.co/kith-lisa",
  },
  {
    nombre: "LE GALA  DES PIECES JUANES",
    imagen: "/lisa/marcas/pieces-juanes.jpg",
    link: "https://www.lloud.co/le-gala",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Lisa() {
  return (
    <>
      <IntNav
              label="deadline"
              className="text-[#C1C9D9]  hover:text-[#E4E7F2] transition duration-300 font-bold"
              btnClass="text-white px-4 py-2 rounded-md bg-[#050409] hover:bg-[#E4E7F2] transition duration-300 flex items-center gap-2 w-42"
            />

      <LisaHeader />

      <LisaBio />

      <LisaEmpresa />

      <LisaDisc albums={lisaSongs} />

      <LisaMarcas marcas={marcas} cardVariants={cardVariants} />

      <Lloud />

      <IntFooter integrante={`Lisa`}/>
    </>
  );
}
