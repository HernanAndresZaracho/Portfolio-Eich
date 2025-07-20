import { Link } from "react-router-dom";

const servicios = [
  {
    titulo: "QA Automation (CrowdAr)",
    descripcion:
      "Realicé testing automatizado en Fichap, una app de control horario, usando herramientas como Playwright y Cypress. Me enfoqué en asegurar la estabilidad de funcionalidades clave.",
    imagen:
      "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/qa-testing.jpg",
  },
  {
    titulo: "Desarrollo Web",
    descripcion:
      "Diseñé y desarrollé tucumanshopping.com.ar, un sitio web adaptable para comercio electrónico y contenido dinámico, optimizado para performance y SEO.",
    imagen:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    titulo: "Automatización con Make",
    descripcion:
      "En Electro Punto, implementé flujos de trabajo con Make para facturación automática, envío de emails con IA y actualización de bases de datos en tiempo real.",
    imagen:
      "https://images.ctfassets.net/un655fb9wln6/7GEeMkOnNUv7gn3GzeuJWC/09326006388e78d623aea03dc0793111/automation-for-beginners.png",
  },
  {
    titulo: "App de stock con Glide",
    descripcion:
      "Para CM Innovation, desarrollé una app con Glide que gestiona stock, calcula precios sugeridos y automatiza reportes en Sheets, todo sin código.",
    imagen:
      "https://techcrunch.com/wp-content/uploads/2019/02/App-example-sheet.png?w=680",
  },
  {
    titulo: "Soporte Técnico y Redes",
    descripcion:
      "En la Facultad de Medicina, fui responsable del mantenimiento de hardware, armado de redes, asignación de recursos y gestión de técnicos en campo.",
    imagen:
      "https://quanti.com.mx/wp-content/uploads/2020/10/network-engineer-connecting-1.jpg",
  },
];

const Servicios = () => {
  return (
    <div className="bg-[#5e0721] text-white">
      {/* Intro */}
      <section className="py-16 px-6 md:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mis Servicios</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
          Aplico tecnología para mejorar la eficiencia, reducir errores y
          potenciar resultados. Desde automatización y QA hasta desarrollo y
          soporte técnico.
        </p>
      </section>

      {/* Servicios Detallados */}
      <section className="py-16 px-6 md:px-24 bg-white text-[#5e0721]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {servicios.map(({ titulo, descripcion, imagen }) => (
            <div
              key={titulo}
              className="flex flex-col bg-[#f8f8f8] border rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(94,7,33,0.5)] 
              hover:shadow-[0_6px_28px_rgba(94,7,33,0.7)] transition"
            >
              <img
                src={imagen}
                alt={titulo}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6 flex flex-col justify-center h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{titulo}</h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 md:px-24 bg-[#5e0721] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Querés llevar tus procesos al siguiente nivel?
        </h2>
        <p className="mb-8 text-white/90">
          Hablemos y veamos cómo la tecnología puede ayudarte a crecer.
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-white text-[#5e0721] font-semibold px-8 py-4 rounded-full hover:bg-[#f8f8f8] transition"
        >
          Contactame
        </Link>
      </section>
    </div>
  );
};

export default Servicios;
