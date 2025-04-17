"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogIn, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cierra el dropdown si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-primary hover:bg-pink-700 transition-colors px-4 py-2 rounded-lg text-white font-semibold"
      >
        Login <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-48 bg-secondary text-white shadow-lg rounded-lg overflow-hidden border border-gray-700"
        >
          <a href="/login" className="flex items-center gap-2 px-4 py-3 hover:bg-second transition">
            <LogIn className="w-5 h-5 text-pink-400" /> Iniciar sesión
          </a>
          <a href="/register" className="flex items-center gap-2 px-4 py-3 hover:bg-second transition">
            <UserPlus className="w-5 h-5 text-pink-400" /> Registrarse
          </a>
        </motion.div>
      )}
    </div>
  );
}
