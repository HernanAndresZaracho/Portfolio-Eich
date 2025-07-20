import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#5e0721] text-white py-3">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          StartApp
        </Link>

        {/* Redes sociales */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white/80"
          >
            <CiFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white/80"
          >
            <CiInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white/80"
          >
            <CiTwitter size={24} />
          </a>
        </div>

        {/* Texto legal */}
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} StartApp. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
