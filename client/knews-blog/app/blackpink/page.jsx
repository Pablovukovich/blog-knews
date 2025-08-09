"use client";
import { BpHeader } from "@/components/integrantes/blackpink/header/BpHeader";
import { BpDeadline } from "@/components/integrantes/blackpink/deadline/BpDeadline";
import { BpBio } from "@/components/integrantes/blackpink/biografia/BpBio";
import { BpEmpresa } from "@/components/integrantes/blackpink/empresa/BpEmpresa";
import { BpDisc } from "@/components/integrantes/blackpink/discografia/BpDisc";
import { BpIntegrantes } from "@/components/integrantes/blackpink/integrantes/BpIntegrantes";
import { Yg } from "@/components/integrantes/blackpink/yg/Yg";
import { IntFooter } from "@/components/integrantes/footer/IntFooter";
import { IntNav } from "@/components/integrantes/IntNav/IntNav";
const bpSong = [
  {
    src: "/blackpink/discos-blackpink/jump.jpg",
    title: "JUMP",
    song: "Blackpink",
  },
  {
    src: "/blackpink/discos-blackpink/bornpink.jpg",
    title: "BORN PINK",
    song: "Album",
  },
  {
    src: "/blackpink/discos-blackpink/pinkvenom.jpg",
    title: "PIINK VENOM",
    song: "Blackpink",
  },
  {
    src: "/blackpink/discos-blackpink/the-album.jpg",
    title: "THE ALBUM",
    song: "Album",
  },
  {
    src: "/blackpink/discos-blackpink/icecream.jpg",
    title: "ICE CREAM",
    song: "Blackpink ft. Selena Gomez",
  },
  {
    src: "/blackpink/discos-blackpink/howyoulikethat.jpg",
    title: "HOW YOU LIKE THAT",
    song: "Blackpink",
  },
  {
    src: "/blackpink/discos-blackpink/killthislove.jpg",
    title: "KILL THIS LOVE",
    song: "Album",
  },
  {
    src: "/blackpink/discos-blackpink/squareup.jpg",
    title: "SQUARE UP",
    song: "Album",
  },
  {
    src: "/blackpink/discos-blackpink/asifitsyourlast.jpg",
    title: "AS IF IT WAS THE LAST TIME",
    song: "Blackpink",
  },
  {
    src: "/blackpink/discos-blackpink/squaretwo_2.jpg",
    title: "SQUARE TWO",
    song: "Album",
  },
  {
    src: "/blackpink/discos-blackpink/squareone.jpg",
    title: "SQUARE ONE",
    song: "Album",
  },
];

const integrantes = [
  {
    nombre: "JENNIE",
    imagen: "/blackpink/integrantes/int-jennie.jpg",
    link: "/jennie",
  },
  {
    nombre: "LISA",
    imagen: "/blackpink/integrantes/int-lisa.jpg",
    link: "/lisa",
  },
  {
    nombre: "ROSE",
    imagen: "/blackpink/integrantes/int-rose.jpg",
    link: "/rose",
  },
  {
    nombre: "JISOO",
    imagen: "/blackpink/integrantes/int-jisoo.jpg",
    link: "/jisoo",
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

export default function Blackpink() {
  return (
    <>
      <IntNav
        label="DEADLINE"
        className="text-[#DCE2F2]  hover:text-primary transition duration-300 font-bold"
        btnClass="text-white px-4 py-2 rounded-md bg-[#050409] hover:bg-[#E4E7F2] transition duration-300 flex items-center gap-2 w-42"
      />

      <BpHeader />

      <BpDeadline />

      <BpBio />

      <BpEmpresa />

      <BpDisc albums={bpSong} />

      <BpIntegrantes integrantes={integrantes} cardVariants={cardVariants} />

      <Yg />

      <IntFooter integrante={`Blackpink`} />
    </>
  );
}
