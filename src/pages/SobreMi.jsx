import heroImg from "../assets/hernan-profile.png"; // O la ruta que uses para tu foto

const SobreMi = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#5e0721] overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={heroImg}
        alt="Hernán Andres Zaracho"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        style={{ filter: "grayscale(100%)" }}
      />

      {/* Contenido encima */}
      <div className="relative z-10 text-[#f8f8f8] text-center px-6 max-w-3xl py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Sobre mí</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Soy Hernán Andrés Zaracho, estudiante de la carrera Licenciatura en
          Sistemas de Información en la Facultad de Ciencias Exactas, Naturales
          y Agrimensura. Mi camino en la tecnología comenzó ayudando a amigos y
          compañeros, lo que me llevó a formarme como QA Automation Engineer en
          Crowdar Academy, donde me destaqué al punto de ser seleccionado para
          trabajar en Fichap, una app de control horario.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          A lo largo del tiempo, continué capacitándome en áreas
          complementarias: desarrollo web, automatización de procesos y
          herramientas no-code. Hice cursos certificados en Folcademy que
          incluyeron Back-End con Java, Front-End con React, Glide, y
          automatización con Make e inteligencia artificial. Esa formación me
          permitió desarrollar sitios, aplicaciones y flujos automatizados para
          distintos clientes reales.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Fui contratado por la Facultad de Medicina como técnico general, y
          también desarrollé soluciones para empresas como Electro Punto y CM
          Innovation, combinando herramientas como Glide, Make y Google Sheets.
          Incluso llegué a vender mi propia web, creada desde cero como parte de
          un proyecto.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          No me caso con ninguna tecnología: si un proyecto requiere algo que no
          conozco, lo aprendo y lo implemento. Soy autodidacta, proactivo y
          perseverante. Me gusta mantener buenas relaciones con mis clientes,
          acompañarlos con mantenimiento continuo y estar disponible para
          futuros proyectos.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Mi objetivo actual es seguir ganando experiencia, ofrecer soluciones
          útiles y construir a futuro una empresa de software multifacética:
          testing, desarrollo, automatización, soporte técnico y más. Quiero
          ayudar a las personas con lo que sé, como lo hice desde el principio.
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
