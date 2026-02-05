import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-900 shadow-[0_0_25px_rgba(255,0,0,0.3)] px-6 py-4 flex justify-between items-center">

            {/* Título con efecto perturbador */}
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-red-600 relative animate-pulse">
                <span className="drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">
                    STEPHEN KING
                </span>

                {/* sombra fantasma detrás */}
                <span className="absolute left-0 top-0 text-red-900 blur-sm opacity-40 -z-10">
                    STEPHEN KING
                </span>
            </h1>

            {/* Links */}
            <ul className="flex gap-8 text-gray-300 font-semibold text-lg">
                {[
                    { to: "/", label: "Home" },
                    { to: "/books", label: "Libros" },
                    { to: "/author", label: "Autor" },
                ].map((link) => (
                    <li key={link.to} className="relative group">
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                `transition-all duration-300 ${isActive
                                    ? "text-red-500"
                                    : "hover:text-red-500"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>

                        {/* sangre / línea roja animada */}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full shadow-[0_0_10px_red]" />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
