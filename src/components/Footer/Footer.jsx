const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black/95 border-t-2 border-red-900 shadow-[0_-10px_40px_rgba(255,0,0,0.3)] relative overflow-hidden">

            {/* Efecto de sangre en el borde superior */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Grid de contenido */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Columna 1: Sobre Stephen King */}
                    <div className="space-y-3">
                        <h3 className="text-red-600 font-extrabold text-2xl tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                            Stephen King
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            El maestro indiscutible del terror moderno. Más de 60 novelas publicadas y cientos de millones de copias vendidas en todo el mundo.
                        </p>
                    </div>

                    {/* Columna 2: Enlaces rápidos */}
                    <div className="space-y-3">
                        <h3 className="text-red-600 font-extrabold text-xl tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                            Enlaces
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a href="/books" className="hover:text-red-500 transition-colors duration-300 inline-block hover:translate-x-1">
                                    📚 Libros
                                </a>
                            </li>
                            <li>
                                <a href="/villains" className="hover:text-red-500 transition-colors duration-300 inline-block hover:translate-x-1">
                                    👹 Villanos
                                </a>
                            </li>
                            <li>
                                <a href="/shorts" className="hover:text-red-500 transition-colors duration-300 inline-block hover:translate-x-1">
                                    📖 Relatos cortos
                                </a>
                            </li>
                            <li>
                                <a href="https://stephenking.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300 inline-block hover:translate-x-1">
                                    🌐 Sitio oficial
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Redes sociales / Info */}
                    <div className="space-y-3">
                        <h3 className="text-red-600 font-extrabold text-xl tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                            Síguenos
                        </h3>
                        <div className="flex justify-center md:justify-start gap-4 text-2xl">
                            <a
                                href="https://twitter.com/StephenKing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transform hover:scale-110 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                𝕏
                            </a>
                            <a
                                href="https://www.facebook.com/OfficialStephenKing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transform hover:scale-110 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                📘
                            </a>
                            <a
                                href="https://www.instagram.com/stephenkinginsta/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transform hover:scale-110 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                📷
                            </a>
                        </div>
                        <p className="text-gray-500 text-xs mt-4 italic">
                            "Los monstruos son reales, los fantasmas son reales también. Viven dentro de nosotros, y a veces, ellos ganan."
                            <br />
                            <span className="text-red-700">— Stephen King</span>
                        </p>
                    </div>
                </div>

                {/* Separador */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>

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