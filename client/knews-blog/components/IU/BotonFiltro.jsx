"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export const BotonFiltro = () => {
  const [filter, setFilter] = useState(false);
  const [categoriaFiltro, setCategoriaFiltro] = useState(false);
  const dropdownRef = useRef(null);

  const toggleFilter = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilter(false);
        setCategoriaFiltro(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="px-2  transition duration-300  rounded-lg cursor-pointer relative hover:text-black"
      ref={dropdownRef}
    >
      <div className="relative inline-block ">
        <button
          className={`flex items-center gap-2 text-lg transition duration-300 cursor-pointer p-2 rounded-lg ${
            filter
              ? "bg-[#D9A0BB] text-neutral-950"
              : "text-primary hover:bg-[#D9A0BB] hover:text-neutral-950"
          }`}
          onClick={toggleFilter}
        >
          <IoFilterOutline className="inline-block " />
          <span className="text-lg text-center   ">Filtrar por:</span>
        </button>

        {/* Filtro principal */}
        <div
          className={`absolute mt-4 bg-zinc-950 text-gray-500 px-4 py-2 rounded-2xl -right-16 top-8 shadow flex flex-col gap-2 w-48 transition-all duration-300 ease-in-out z-50 ${
            filter
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="text-[#BF84A0]">
            {/* Categoría */}
            <button
              className="flex items-center text-center text-lg cursor-pointer w-full  transition duration-300  p-1 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                setCategoriaFiltro(!categoriaFiltro);
              }}
            >
              <span className="hover:text-[#D9A0BB]">Categoría</span>
              <IoIosArrowDown
                className={`ml-auto transition-transform duration-300 ${
                  categoriaFiltro ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Submenú de Categoría */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden bg-zinc-900 rounded-lg mt-2 ${
                categoriaFiltro
                  ? "max-h-60 opacity-100 p-3"
                  : "max-h-0 opacity-0 p-0"
              }`}
            >
              <span className="hover:text-[#D9A0BB] cursor-pointer block">
                JENNIE
              </span>
              <span className="hover:text-[#D9A0BB] cursor-pointer block">
                LISA
              </span>
              <span className="hover:text-[#D9A0BB] cursor-pointer block">
                ROSE
              </span>
              <span className="hover:text-[#D9A0BB] cursor-pointer block">
                JISOO
              </span>
              <span className="hover:text-[#D9A0BB] cursor-pointer block">
                BLACKPINK
              </span>
            </div>

            {/* Otros filtros */}
            <div className="flex flex-col gap-2 mt-2">
              <span className="hover:text-[#D9A0BB] cursor-pointer p-1">
                Fecha
              </span>
              <span className="hover:text-[#D9A0BB] cursor-pointer p-1">
                Popularidad
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
