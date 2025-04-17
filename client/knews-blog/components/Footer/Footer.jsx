export default function Footer  () {

    return (
      <footer className="w-full border-t border-neutral-200 bg-white dark:bg-neutral-900 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Knews. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="/about" className="hover:text-neutral-800 dark:hover:text-white transition">Sobre nosotros</a>
            <a href="/contact" className="hover:text-neutral-800 dark:hover:text-white transition">Contacto</a>
            <a href="/privacy" className="hover:text-neutral-800 dark:hover:text-white transition">Política de privacidad</a>
            <a href="/terms" className="hover:text-neutral-800 dark:hover:text-white transition">Términos de servicio</a>
        </div>
        </div>
      </footer>
    )
  };
  
