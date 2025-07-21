import { CiLinkedin, CiInstagram, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#5e0721] text-white py-3">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Eich Enterprise
        </Link>

        {/* Redes sociales */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/hernan-andres-zaracho/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white/80"
          >
            <CiLinkedin size={24} />
          </a>
          <a
            href="https://x.com/hernan_zaracho"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white/80"
          >
            <CiTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/hernan_andres_zaracho/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white/80"
          >
            <CiInstagram size={24} />
          </a>
        </div>

        {/* Texto legal */}
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Eich Enterprise. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
