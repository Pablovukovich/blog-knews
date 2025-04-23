"use client";
import { useState } from "react";
import Buscar from "./Buscar";
import LoginDropdown from "./user/LoginDropdown";
import Logo from "./Logo";
import Link from "next/link";
import CategoriasDropdown from "../IU/CategoriasDropdown";
import { Menu, X } from "lucide-react"; // Iconos de menú y cerrar
import Users from "./user/Users";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="flex items-center bg-zinc-900 h-16 justify-between py-10 px-4 z-50 relative">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

          <div className="items-center hidden lg:flex">
          <Buscar />
        </div>   
        {/* Menú en pantallas grandes */}
        <div className="hidden sm:flex items-center">
          <ul className="flex justify-center items-center space-x-10">
            <li>
              <Link
                href="/noticias"
                className="text-primary hover:border-b-2 hover:border-pink-700 hover:text-gray-300 transition duration-300"
              >
                Noticias
              </Link>
            </li>
            <li>
              
                <CategoriasDropdown />
              
            </li>
            <li>
              <Link
                href="/about"
                className="text-primary hover:border-b-2 hover:border-pink-700 hover:text-gray-300 transition duration-300"
              >
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>

       

        <div className="hidden sm:flex items-center">
          <Users/>
        </div>
      </nav>

      {/* Menú en pantallas pequeñas */}
      {isOpen && (
        <div className="sm:hidden bg-zinc-900 text-white absolute top-16 left-0 right-0 p-4 absolute z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-4 ">
            <li>
              <Link
                href="/noticias"
                className="text-primary hover:border-b-2 hover:border-pink-700 hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Noticias
              </Link>
            </li>
            <li>
              <Link href="" className="text-white hover:text-gray-300">
                <CategoriasDropdown />
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-primary hover:border-b-2 hover:border-pink-700 hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Sobre nosotros
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <Buscar />
          </div>
        </div>
      )}
    </>
  );
}



export default Navbar;
