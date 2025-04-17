import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/header/Navbar";
import SlideSwiper from "@/components/header/SlideSwiper";
import Listen from "@/components/listen/Listen";
import Noticias from "@/components/Noticias/Noticias";


export default function Home() {
  return (
    <>
      <Navbar/>
      <SlideSwiper/>
      <Noticias/>
      <Listen/>
      <Footer/>
    </>
  );
}
