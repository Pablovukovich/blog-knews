import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";

export default function Boton({ texto, link }) {
    return (
        <Link href={link} className=" hover:bg-pink-500 text-white font-bold py-2 px-4 m-4 rounded transition duration-300 flex items-center">
           <ArrowBigLeftDash /> {texto}
        </Link>
    );


}