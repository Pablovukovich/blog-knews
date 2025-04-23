"use client"
import Navbar from "@/components/header/Navbar";
import { Newspaper, Camera, Pencil, MessageCircle, Search } from "lucide-react";
 import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-zinc-800 text-white py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* LOGO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <Image
              src="/logo-principal-knews.png"
              alt="Logo Knews"
              width={120}
              height={120}
              className="mx-auto rounded-full shadow-md"
            />
          </motion.div>

          {/* TÍTULO */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#f79aaf" }}>
            Sobre nosotros
          </h2>

          {/* TEXTO PRINCIPAL */}
          <p className="text-lg leading-relaxed mb-6">
            Bienvenido a <span className="font-semibold" style={{ color: "#f79aaf" }}>Knews</span>, tu portal de noticias dedicado a <span className="font-semibold">Blackpink</span>.
            Somos un equipo de fans y desarrolladores apasionados por la música, el estilo y el impacto cultural de Blackpink. Nuestro objetivo es brindarte las últimas novedades, artículos exclusivos, curiosidades y contenido visual de alta calidad sobre cada una de las integrantes: <span className="font-semibold">Jennie, Jisoo, Rosé</span> y <span className="font-semibold">Lisa</span>.
          </p>

          {/* ¿QUÉ ENCONTRARÁS? */}
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#f79aaf" }}>¿Qué encontrarás en Knews?</h3>
          <ul className="space-y-4 text-base text-left max-w-xl mx-auto">
            <li className="flex items-center gap-3">
              <Newspaper size={20} style={{ color: "#f79aaf" }} />
              Noticias actualizadas sobre lanzamientos, conciertos y colaboraciones.
            </li>
            <li className="flex items-center gap-3">
              <Camera size={20} style={{ color: "#f79aaf" }} />
              Galerías de imágenes y momentos icónicos.
            </li>
            <li className="flex items-center gap-3">
              <Pencil size={20} style={{ color: "#f79aaf" }} />
              Artículos especiales: análisis, rankings y opiniones.
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={20} style={{ color: "#f79aaf" }} />
              Comunidad interactiva: comenta y califica cada publicación.
            </li>
            <li className="flex items-center gap-3">
              <Search size={20} style={{ color: "#f79aaf" }} />
              Búsqueda personalizada y categorías por integrante.
            </li>
          </ul>

          {/* MOTIVACIÓN */}
          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: "#f79aaf" }}>¿Por qué lo hacemos?</h3>
          <p className="text-lg leading-relaxed mb-8">
            Porque Blackpink no es solo música, es <span className="italic">inspiración</span>. Queremos que tengas un lugar donde revivir sus mejores momentos, descubrir historias detrás de escena y mantenerte informado en todo momento.
          </p>

          {/* MENSAJE FINAL */}
          <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: "#f79aaf", color: "#000" }}>
            <p className="font-semibold text-lg">
              Gracias por ser parte de esta comunidad.  
              <span className="block text-xl mt-2 font-bold">¡BLACKPINK IN YOUR AREA!</span>
            </p>
          </div>

          {/* CONTACTO */}
          <p className="mt-10 text-center text-sm text-white/70">
            ¿Querés ser parte o sugerir contenido? Contactanos desde la sección{" "}
            <a href="/contacto" style={{ color: "#f79aaf" }} className="underline hover:opacity-80">
              Contacto
            </a>{" "}
            o seguinos en nuestras redes.
          </p>
        </motion.div>
      </section>
      <Footer/>
    </>
  );
}
