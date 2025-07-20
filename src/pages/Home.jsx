import { Link } from "react-router-dom";
import { FaBug, FaCode, FaRobot, FaChartLine } from "react-icons/fa";

import hernanProfile from "../assets/hernan-profile.png";

const servicios = [
  {
    icon: <FaBug size={36} className="text-[#5e0721]" />,
    titulo: "QA Automation",
    descripcion:
      "Automatización de pruebas con Cypress y Playwright para garantizar calidad y estabilidad.",
  },
  {
    icon: <FaCode size={36} className="text-[#5e0721]" />,
    titulo: "Desarrollo Web",
    descripcion:
      "Páginas web modernas, responsivas y funcionales usando React, Tailwind y Glide.",
  },
  {
    icon: <FaRobot size={36} className="text-[#5e0721]" />,
    titulo: "Automatización",
    descripcion:
      "Flujos eficientes con Make, n8n y Google Sheets para optimizar procesos y ahorro de tiempo.",
  },
  {
    icon: <FaChartLine size={36} className="text-[#5e0721]" />,
    titulo: "Optimización de Negocios",
    descripcion:
      "Gestión de stock, análisis y flujos para mejorar la rentabilidad y control del negocio.",
  },
];

const proyectos = [
  {
    nombre: "Fichap (CrowdAr)",
    descripcion:
      "Testing automatizado de la app de control horario como QA Tester.",
    imagen:
      "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/qa-testing.jpg",
  },
  {
    nombre: "Electro Punto",
    descripcion:
      "Automatización con IA de facturación y envio de correos con Make.",
    imagen:
      "https://images.ctfassets.net/un655fb9wln6/7GEeMkOnNUv7gn3GzeuJWC/09326006388e78d623aea03dc0793111/automation-for-beginners.png",
  },
  {
    nombre: "CM Innovation",
    descripcion:
      "App de stock, precios sugeridos y automatizar tareas con Glide.",
    imagen:
      "https://techcrunch.com/wp-content/uploads/2019/02/App-example-sheet.png?w=680",
  },
  {
    nombre: "Shopping Tucuman",
    descripcion: "Sitio web desarrollado desde cero para empresa comercial.",
    imagen:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
];

const Home = () => {
  return (
    <div className="text-white overflow-hidden bg-[#5e0721]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center py-16">
        {/* Imagen de fondo */}
        <img
          src={hernanProfile}
          alt="Hernán Andres Zaracho"
          className="absolute h-full object-cover opacity-40"
          style={{ filter: "grayscale(100%)" }}
        />

        {/* Overlay de contenido */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transformo ideas en soluciones digitales eficientes
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            QA Automation Engineer, desarrollador web y creador de
            automatizaciones con Make, n8n y herramientas no-code. Siempre
            buscando optimizar procesos y mejorar negocios.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/clientes"
              className="bg-white text-[#5e0721] hover:bg-[#f5f5f5] font-semibold px-6 py-3 rounded-full transition"
            >
              Conocé mi trabajo
            </Link>
            <Link
              to="/contacto"
              className="border-2 border-white hover:bg-white hover:text-[#5e0721] text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 px-6 md:px-24 bg-white text-[#5e0721]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Qué hago
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {servicios.map(({ icon, titulo, descripcion }) => (
            <div
              key={titulo}
              className="flex flex-col items-center text-center p-6 border rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
              <p className="text-sm">{descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="py-16 px-6 md:px-24 bg-[#5e0721] text-[#f8f8f8]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proyectos destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {proyectos.map(({ nombre, descripcion, imagen }) => (
            <div
              key={nombre}
              className="bg-[#f8f8f8] text-[#5e0721] rounded-xl overflow-hidden border-2 shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={imagen}
                alt={nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{nombre}</h3>
                <p className="text-sm">{descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="py-16 px-6 md:px-24 bg-[#f8f8f8] text-[#5e0721] max-w-4xl mx-auto text-center rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="text-lg leading-relaxed">
          Soy autodidacta, me apasiona ayudar y enseñar. Cuando tomo un
          proyecto, me enfoco al 100% para entregar calidad. También tengo
          mentalidad negociadora, siempre buscando soluciones prácticas y
          eficientes para cada cliente.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-6 md:px-24 bg-[#5e0721] text-[#f8f8f8] text-center rounded-xl shadow-md max-w-4xl mx-auto my-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Querés que tu negocio crezca con tecnología?
        </h2>
        <Link
          to="/contacto"
          className="inline-block bg-[#f8f8f8] text-[#5e0721] font-semibold px-8 py-4 rounded-4xl hover:bg-[#5e0721] transition border-2 border-[#f8f8f8] hover:text-[#f8f8f8]"
        >
          Contactame
        </Link>
      </section>
    </div>
  );
};

export default Home;
