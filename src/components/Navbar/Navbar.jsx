import { NavLink } from "react-router-dom";

const Navbar = () => {
    const redColor = "red-600"; 

    return (
        <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-900 shadow-[0_0_30px_rgba(255,0,0,0.4)] px-12 py-6 flex justify-between items-center">

            {/* Logo + Título */}
            <div className="flex items-center gap-6">
                <img
                    src="src/assets/images/logo/logoStephenKing.png"
                    alt="Logo Stephen King"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h1 className={`text-3xl md:text-5xl font-extrabold tracking-widest text-${redColor} relative animate-pulse`}>
                    <span className={`drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]`}>
                        STEPHEN KING
                    </span>
                    <span className="absolute left-0 top-0 blur-sm opacity-40 -z-10" style={{ color: "#B91C1C" }}>
                        STEPHEN KING
                    </span>
                </h1>
            </div>

            {/* Links */}
            <ul className="flex gap-12 text-gray-300 font-bold text-xl md:text-2xl">
                {[
                    { to: "/", label: "Inicio" },
                    { to: "/books", label: "Libros" },
                    { to: "/author", label: "Autor" },
                ].map((link) => (
                    <li key={link.to} className="relative group">
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                `transition-all duration-300 ${isActive ? "text-red-600" : "hover:text-red-600"}`
                            }
                        >
                            {link.label}
                        </NavLink>

                        {/* línea roja animada */}
                        <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full shadow-[0_0_12px_red]" />
                    </li>
                ))}
            </ul>

        </nav>
    );
};

export default Navbar;
