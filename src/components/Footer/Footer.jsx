const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black/95 border-t-2 border-red-900 shadow-[0_-10px_40px_rgba(255,0,0,0.3)] relative overflow-hidden">

            {/* Efecto de sangre en el borde superior */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-6 py-5">

                {/* Grid de contenido */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">

                    {/* Columna 1: Sobre Stephen King */}
                    <div className="space-y-2">
                        <h3 className="text-red-600 font-extrabold text-xl tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                            Stephen King
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            El maestro indiscutible del terror moderno. Más de 60 novelas publicadas y cientos de millones de copias vendidas en todo el mundo.
                        </p>
                    </div>

                    {/* Columna 2: Enlaces rápidos */}
                    <div className="space-y-2">
                        <h3 className="text-red-600 font-extrabold text-lg tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                            Enlaces
                        </h3>
                        <ul className="space-y-1 text-gray-300 text-sm">
                            <li>
                                <a href="/" className="hover:text-red-600 transition-colors duration-300 inline-block hover:translate-x-1">
                                    🏚️ Inicio
                                </a>
                            </li>
                            <li>
                                <a href="/books" className="hover:text-red-600 transition-colors duration-300 inline-block hover:translate-x-1">
                                    🎈 Libros
                                </a>
                            </li>
                            <li>
                                <a href="/author" className="hover:text-red-600 transition-colors duration-300 inline-block hover:translate-x-1">
                                    ✍️ Autor
                                </a>
                            </li>
                            <li>
                                <a href="https://stephenking.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300 inline-block hover:translate-x-1">
                                    🕸️ Página Oficial
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Redes sociales */}
                    <div className="space-y-2">
                        <h3 className="text-red-600 font-extrabold text-lg tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                            Síguenos
                        </h3>
                        <div className="flex justify-center md:justify-start gap-4">
                            {/* Twitter/X */}
                            <a
                                href="https://twitter.com/StephenKing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-400 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                                aria-label="Twitter"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/OfficialStephenKing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-400 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                                aria-label="Facebook"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/stephenkinginsta/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-400 transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                                aria-label="Instagram"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-gray-500 text-xs italic mt-3">
                            "Los monstruos son reales, los fantasmas son reales también. Viven dentro de nosotros, y a veces, ellos ganan."
                            <br />
                            <span className="text-red-700">— Stephen King</span>
                        </p>
                    </div>
                </div>

                {/* Separador */}
                <div className="my-3 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm">
                    <p>
                        © {currentYear} Stephen King Universe. Todos los derechos reservados.
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                        Sitio web de fans. No afiliado oficialmente con Stephen King.
                    </p>
                </div>
            </div>

            {/* Efecto de textura de fondo */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </footer>
    );
};

export default Footer;