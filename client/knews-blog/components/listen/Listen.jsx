import Discos from "./Discos";
import Titulos from "../IU/Titulos"
export default function Listen() {
  return (
    <section className="w-full bg-zinc-900 py-5 px-4 lg:px-20">
        <Titulos titulo="STREAM" />
        <Discos/>
    </section>
  );
}
