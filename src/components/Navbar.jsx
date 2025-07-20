import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoGif from "../assets/eich_logo.gif";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Clientes", path: "/clientes" },
  { name: "Sobre Mi", path: "/sobre-mi" },
  { name: "Contacto", path: "/contacto" },
];

// Componente reutilizable para los enlaces
const NavLinks = ({ onClick, className = "" }) => (
  <>
    {navItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        onClick={onClick}
        className={({ isActive }) =>
          `${className} block px-4 py-1 rounded-3xl font-semibold transition-colors duration-300 
            ${
              isActive
                ? "bg-[#5e0721] text-white ring-2 ring-white"
                : "text-white"
            } hover:bg-white hover:text-[#5e0721]`
        }
      >
        {item.name}
      </NavLink>
    ))}
  </>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev); //
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="bg-[#420316] text-white shadow-md">
      <nav
        className="max-w-screen-xl mx-auto px-4 py-6 flex justify-between items-center"
        role="navigation"
        aria-label="Menú principal"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white">
          <img src={logoGif} alt="Logo" className="h-16 w-16 object-contain" />
          <span className="text-xl font-bold">Eich Enterprise</span>
        </Link>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegación en escritorio */}
        <ul className="hidden md:flex gap-4">
          <NavLinks onClick={closeMenu} />
        </ul>
      </nav>

      {/* Menú desplegable en mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-[#740526] transition-all duration-300 ease-in-out overflow-hidden border-t border-white/10 shadow-inner shadow-white/10 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2 gap-2">
          <NavLinks onClick={closeMenu} />
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
