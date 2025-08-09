import Link from 'next/link'
import React from 'react'

export const IntegrantesDropDown = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


  return (
    <>
        <div className="relative inline-block text-left">
            <div>
            <button
                type="button"
                className="text-primary hover:border-b-2 hover:border-pink-700 hover:text-gray-300 transition duration-300 "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleDropdown}
            >
                Integrantes
            </button>
            </div>
    
            <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-zinc-950${ isOpen ? ' block' : ' hidden' }`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                <Link href="/blackpink" className="block px-4 py-2 text-sm text-primary hover:bg-zinc-900" role="menuitem">BLACKPINK</Link>
                <Link href="/jennie" className="block px-4 py-2 text-sm text-primary hover:bg-zinc-900" role="menuitem">JENNIE</Link>
                <Link href="/lisa" className="block px-4 py-2 text-sm text-primary hover:bg-zinc-900" role="menuitem">LISA</Link>
                <Link href="/rose" className="block px-4 py-2 text-sm text-primary hover:bg-zinc-900" role="menuitem">ROSE</Link>
                <Link href="/jisoo" className="block px-4 py-2 text-sm text-primary hover:bg-zinc-900" role="menuitem">JISOO</Link>
            </div>
            </div>
        </div>
    
    
    </>
  )
}
