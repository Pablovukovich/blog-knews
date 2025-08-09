"use client";

import { RoseHeader } from "@/components/integrantes/rose/header/RoseHeader";
import { RoseBio } from "@/components/integrantes/rose/biografia/RoseBio";
import { RoseEmpresa } from "@/components/integrantes/rose/empresa/RoseEmpresa";
import { RoseDisc } from "@/components/integrantes/rose/discografia/RoseDisc";
import { RoseMarcas } from "@/components/integrantes/rose/marcas/RoseMarcas";
import { BlackLabel } from "@/components/integrantes/rose/blackLabel/BlackLabel";
import { IntFooter } from "@/components/integrantes/footer/IntFooter";
import { IntNav } from "@/components/integrantes/IntNav/IntNav";
export default function Rose() {
  const roseSongs = [
    {
      src: "/rose/discos-rose/on-my-mind.jpg",
      title: "On My Mind",
      song: "Rose,Alex Warren",
    },
    {
      src: "/rose/discos-rose/messy.jpg",
      title: "Messy(From F1 The Movie)",
      song: "Rose",
    },
    { src: "/rose/discos-rose/rosie.jpg", title: "Rosie", song: "Album" },
    {
      src: "/rose/discos-rose/number-one-girl.jpg",
      title: "Number One Girl",
      song: "Rose",
    },
    {
      src: "/rose/discos-rose/apt.jpg",
      title: "APT",
      song: "Rose ft. Bruno Mars",
    },
    { src: "/rose/discos-rose/r.jpg", title: "R", song: "Album" },
  ];

  const marcas = [
    {
      nombre: "SAINT LAUREN",
      imagen: "/rose/marcas/saint-lauren.jpg",
    },
    {
      nombre: "TIFFANY & CO",
      imagen: "/rose/marcas/tyco.jpg",
    },
    {
      nombre: "RIMOWA",
      imagen: "/rose/marcas/rimowa.jpg",
    },
    {
      nombre: "PUMA",
      imagen: "/rose/marcas/puma.jpg",
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

  return (
    <>
      <IntNav
        label="deadline"
        className="text-[#8C7632]  hover:text-[#D9B1A3] transition duration-300 font-bold"
        btnClass="text-white px-4 py-2 rounded-md bg-[#591F12] hover:bg-[#D9B1A3] transition duration-300 flex items-center gap-2 w-42"
      />
      <RoseHeader />

      <RoseBio />

      <RoseEmpresa />

      <RoseDisc albums={roseSongs} />

      <RoseMarcas marcas={marcas} cardVariants={cardVariants} />

      <BlackLabel />

      <IntFooter integrante={`Rose`} />
    </>
  );
}
