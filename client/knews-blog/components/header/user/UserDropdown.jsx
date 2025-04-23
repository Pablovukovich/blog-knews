import React, { useState, useRef, useEffect } from 'react';
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from 'next/navigation';
import { logoutUser } from "@/services/auth"; // Asegúrate de que esta función esté correctamente importada


export default function UserDropdown() {
    const { user, logout } = useAuthStore();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    const toggleDropdown = () => {
        setOpen(!open);
      };
    
      const handleLogout = async () => {
        await logoutUser(); // Esto llama al backend y borra la cookie
        logout(); // Esto limpia el estado de Zustand
        router.push('/login'); // Redirige a la página de login después del logout
      };
      
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [dropdownRef]);

      if (!user) {
        return null; // No mostrar nada si no hay usuario logueado
      }

    return(
        <>
        <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="user-menu-button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <img
            src="/rose-album.jpg"
            alt="Avatar genérico"
            className="h-8 w-8 rounded-full mr-2"
          />
          {user.username || user.email} {/* Mostrar nombre de usuario o email */}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
          <div className="py-1" role="none">
            {/* Puedes agregar más opciones aquí */}
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
        
        </>

    )

}