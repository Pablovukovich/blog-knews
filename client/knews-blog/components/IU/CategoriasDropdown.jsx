"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


export default function CategoriasDropdown () {

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Cierra el dropdown si se hace clic fuera
    useEffect(() =>{
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    return(
            <div className="relative "ref={dropdownRef}>
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 text-primary hover:border-b-2 hover:border-pink-700  transition duration-300 "
                >
                    Integrantes
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-secondary text-white shadow-lg rounded-lg overflow-hidden border border-gray-700">
                        <Link href="/categoria/1" className="flex items-center gap-2 px-4 py-3 hover:bg-second transition">
                             Lisa
                        </Link>
                        <Link href="/jennie" className="flex items-center gap-2 px-4 py-3 hover:bg-second transition">
                            Jennie
                        </Link>
                        <Link href="/categoria/3" className="flex items-center gap-2 px-4 py-3 hover:bg-second transition">
                            Rose
                        </Link>
                        <Link href="/categoria/3" className="flex items-center gap-2 px-4 py-3 hover:bg-second transition">
                            Jisoo
                        </Link>
                        <Link href="/categoria/3" className="flex items-center gap-2 px-4 py-3 hover:bg-second transition">
                            BLACKPINK
                        </Link>
                    </div>
                )}

            </div>


    )


}