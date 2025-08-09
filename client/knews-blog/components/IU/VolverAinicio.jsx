import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import Link from "next/link";
export const VolverAinicio = () => {
  return (
    <>
      <Link
        href="/"
        className="text-primary  hover:bg-[#D9A0BB] hover:text-[#0D080A]  transition duration-300 p-2 rounded-lg flex items-center"
      >
        <IoIosArrowDropleft className="inline-block mr-2" />
        Volver a Inicio
      </Link>
    </>
  );
};
