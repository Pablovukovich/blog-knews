import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/header/Navbar";
import BarraCategorias from "@/components/Noticias/allArticulos/BarraCategorias";
import CardNoticias from "@/components/Noticias/allArticulos/CardNoticias";

export default function Noticias() {
    return (
        <>
            <Navbar/>
            <BarraCategorias/>
            <CardNoticias/>
            <Footer/>
        </>



    )


}