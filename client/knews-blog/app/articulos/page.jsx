
import Navbar from "@/components/header/Navbar";

import Footer from "@/components/Footer/Footer";
import { AllArticulos } from "@/components/articulos/AllArticulos";
import BarraNav from "@/components/IU/BarraNav";
const Noticias = () => {



return (
  <div className="flex flex-col h-screen bg-zinc-800">   
    <Navbar/>
    <BarraNav/>
    <AllArticulos/>
    <Footer/>
   </div> 
)
}

export default Noticias;