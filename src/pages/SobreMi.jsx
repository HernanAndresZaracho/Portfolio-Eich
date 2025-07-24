import hernanProfile from "../assets/hernan-profile.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SobreMi = () => {
  return (
    <motion.section
      className="bg-[#5e0721] text-white py-20 px-6 md:px-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Imagen tipo avatar (opcional) */}
        <div className="mb-10 flex justify-center">
          <img
            src={hernanProfile}
            alt="Hernán Andres Zaracho"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Sobre mí</h1>

        <div className="space-y-8 text-lg md:text-xl text-white/90 text-left">
          <p>
            Soy Hernán Andrés Zaracho, estudiante de Licenciatura en Sistemas de
            Información en la Facultad de Ciencias Exactas, Naturales y
            Agrimensura. Empecé ayudando a amigos y compañeros, lo que me llevó
            a formarme como QA Automation Engineer en Crowdar Academy, donde fui
            seleccionado para trabajar en Fichap, una app de control horario.
          </p>

          <p>
            Me seguí capacitando en desarrollo web, automatización de procesos y
            herramientas no-code. Realicé cursos certificados en Folcademy:
            Back-End con Java, Front-End con React, Glide, Make e inteligencia
            artificial. Gracias a eso, pude desarrollar sitios, apps y flujos
            automatizados para clientes reales.
          </p>

          <p>
            Trabajé como técnico general en la Facultad de Medicina y desarrollé
            soluciones para Electro Punto y CM Innovation, combinando Glide,
            Make y Google Sheets. Incluso vendí mi primera web desarrollada
            desde cero como parte de un proyecto.
          </p>

          <p>
            No me caso con ninguna tecnología: si el proyecto requiere algo
            nuevo, lo aprendo y lo implemento. Soy autodidacta, proactivo y
            perseverante. Me gusta acompañar a los clientes con mantenimiento
            continuo y estar disponible para nuevos desafíos.
          </p>

          <p>
            Mi objetivo es seguir creciendo, brindar soluciones útiles y
            construir una empresa de software multifacética: testing,
            desarrollo, automatización y soporte técnico. Quiero ayudar a las
            personas con lo que sé, como lo hice desde el principio.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/public/CV-Zaracho_Hernan_Andres.pdf"
            download
            className="inline-block border-2 border-[#5e0721] bg-white text-[#5e0721] hover:bg-[#5e0721] hover:text-[#f8f8f8] hover:border-[#f8f8f8] font-semibold px-6 py-3 rounded-full transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default SobreMi;
