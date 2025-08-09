"use client";
import { Deadline } from "@/components/deadline/Deadline";
import { Destacados } from "@/components/destacados/Destacados";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/header/Navbar";
import SlideSwiper from "@/components/header/SlideSwiper";
import { Streams } from "@/components/stream/Streams";
import { UltimasNoticias } from "@/components/ultimasNoticias/UltimasNoticias";




export default function Home() {




  return (
    <>
      
      <Navbar/>
      <SlideSwiper/>
      <Deadline/>
      <UltimasNoticias/>
      <Destacados/>
      <Streams/>
      <Footer/>
    </>
  );
}
