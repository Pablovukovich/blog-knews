"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/header/Navbar";
import SlideSwiper from "@/components/header/SlideSwiper";
import VerificacionPendienteModal from "@/components/IU/VerificacionPendienteModal";
import Listen from "@/components/listen/Listen";
import Noticias from "@/components/Noticias/Noticias";
import useAuthStore from "@/store/useAuthStore";


export default function Home() {


  const { user } = useAuthStore();

  return (
    <>
      {user && !user.isVerified && <VerificacionPendienteModal email={user.email} />}
      <Navbar/>
      <SlideSwiper/>
      <Noticias/>
      <Listen/>
      <Footer/>
    </>
  );
}
