"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/header/Logo";
import { FaArrowLeft } from "react-icons/fa";
import { usePathname } from "next/navigation";

export const IntNav = ({ label, btnClass, className }) => {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex items-center justify-between w-full h-20 px-20 py-4 bg-transparent z-50 absolute">
        {/* Izquierda */}
        <div className="w-1/3">
          <Link href="/" className={btnClass}>
            <FaArrowLeft className="text-white font-bold" />
            Volver al home
          </Link>
        </div>

        {/* Centro */}
        <div className="w-1/3 flex justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Derecha */}
        <div className="w-1/3 hidden sm:flex justify-end items-center">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className={className}>
                INICIO
              </a>
            </li>
            {pathname === "/blackpink" && (
              <a href="#" className={className}>
                {label}
              </a>
            )}

            <li>
              <a href="#" className={className}>
                BIOGRAFIA
              </a>
            </li>
            <li>
              <a href="#" className={className}>
                DISCOGRAFIA
              </a>
            </li>
            <li>
              <a href="#" className={className}>
                MARCAS
              </a>
            </li>
            <li>
              <a href="#" className={className}>
                EMPRESA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
