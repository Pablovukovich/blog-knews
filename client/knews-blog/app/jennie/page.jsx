"use client";
import React from "react";
import { SiAdidas } from "react-icons/si";
import { CgChanel } from "react-icons/cg";
import { JennieHeader } from "@/components/integrantes/jennie/header/JennieHeader";
import { JennieBio } from "@/components/integrantes/jennie/biografia/JennieBio";
import { JennieDisc } from "@/components/integrantes/jennie/discografia/JennieDisc";
import { JennieMarcas } from "@/components/integrantes/jennie/marcas/JennieMarcas";
import { JennieEmpresa } from "@/components/integrantes/jennie/empresa/JennieEmpresa";
import { IntFooter } from "@/components/integrantes/footer/IntFooter";
import { IntNav } from "@/components/integrantes/IntNav/IntNav";

const marcas = [
  {
    content: (
      <>
        <CgChanel className="text-white text-6xl" /> CHANEL
      </>
    ),
  },
  {
    content: (
      <>
        <SiAdidas className="text-white text-6xl" /> ADIDAS
      </>
    ),
  },
  {
    content: (
      <>
        <img src="/jennie/marcas/ck.png" alt="ck-logo" className="w-40 h-40" />{" "}
        CALVIN KLEIN
      </>
    ),
  },
  {
    content: (
      <>
        <img
          src="/jennie/marcas/hera.png"
          alt="hera logo"
          className="w-40 h-40"
        />{" "}
        HERA
      </>
    ),
  },
];

const jennieAlbums = [
  { src: "/jennie/discos-jennie/ruby.jpg", title: "Ruby", song: "Album" },
  {
    src: "/jennie/discos-jennie/you-and-me.jpg",
    title: "YOU & ME",
    song: "Special Single",
  },
  { src: "/jennie/discos-jennie/solo.jpg", title: "SOLO", song: "Jennie" },
  { src: "/jennie/discos-jennie/spot.jpg", title: "SPOT!", song: "feat. ZICO" },
  {
    src: "/jennie/discos-jennie/slow-motion.jpg",
    title: "Slow Motion",
    song: "feat. Matt Champion",
  },
  {
    src: "/jennie/discos-jennie/ootg.jpg",
    title: "One of the Girls",
    song: "feat. The Weeknd",
  },
];

export default function Jennie() {
  

  return (
    <>
   
      <IntNav
      label="deadline"
      className="text-[#730202]  hover:text-[#BF0404] transition duration-300 font-bold"
      btnClass="text-white px-4 py-2 rounded-md bg-[#730202] hover:bg-[#F2071B] transition duration-300 flex items-center gap-2 w-42"
      />  
      <JennieHeader/>
      <JennieBio/>
      <JennieDisc albums={jennieAlbums}/>
      <JennieMarcas marcas={marcas} />
      <JennieEmpresa/>
      <IntFooter integrante={`Jennie`}/>
    </>
  );
}
