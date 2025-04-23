import Navbar from "@/components/header/Navbar";

export default function Jennie() {

    return (
        <>
        <Navbar/>
        <div className="bg-zinc-800 text-white py-16 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#f79aaf" }}>
            Jennie
        </h1>
        <p className="text-lg leading-relaxed mb-6">
            Bienvenido a la sección dedicada a Jennie, una de las integrantes más carismáticas y talentosas de Blackpink.
            Aquí encontrarás noticias, artículos y contenido exclusivo sobre su carrera y vida personal.
        </p>
        </div>
        
        
        </>
    );

}