import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/logoStephenKing.png";
const Navbar = () => {
    const redColor = "red-600";
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { to: "/", label: "Inicio" },
        { to: "/books", label: "Libros" },
        { to: "/author", label: "Autor" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-900 shadow-[0_0_30px_rgba(255,0,0,0.4)] px-6 md:px-12 py-4 md:py-6 flex justify-between items-center">

            {/* Logo + Título */}
            <div className="flex items-center gap-4 md:gap-6">
                <img
                    src={Logo}
                    alt="Logo Stephen King"
                    className="w-12 h-12 md:w-20 md:h-20 object-contain"
                />
                <h1 className={`text-2xl md:text-5xl font-extrabold tracking-widest text-${redColor} relative animate-pulse`}>
                    <span className="drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]">STEPHEN KING</span>
                    <span className="absolute left-0 top-0 blur-sm opacity-40 -z-10" style={{ color: "#B91C1C" }}>
                        STEPHEN KING
                    </span>
                </h1>
            </div>

            {/* Menú de escritorio */}
            <ul className="hidden md:flex gap-12 text-gray-300 font-bold text-xl md:text-2xl">
                {links.map((link) => (
                    <li key={link.to} className="relative group">
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                `transition-all duration-300 ${isActive ? "text-red-600" : "hover:text-red-600"}`
                            }
                        >
                            {link.label}
                        </NavLink>
                        <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full shadow-[0_0_12px_red]" />
                    </li>
                ))}
            </ul>

            {/* Botón hamburguesa */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col justify-between w-8 h-6 text-gray-300 focus:outline-none"
                >
                    <span
                        className={`block h-1 w-full bg-gray-300 transition-transform duration-300 ${
                            isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-1 w-full bg-gray-300 transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-1 w-full bg-gray-300 transition-transform duration-300 ${
                            isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    ></span>
                </button>
            </div>

            {/* Menú móvil */}
            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-red-900 flex flex-col items-center py-6 gap-6 text-gray-300 font-bold text-xl shadow-[0_0_20px_rgba(255,0,0,0.4)] md:hidden">
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `transition-all duration-300 ${isActive ? "text-red-600" : "hover:text-red-600"}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
