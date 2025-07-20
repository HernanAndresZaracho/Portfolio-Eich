import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_haz2013emj"; // tu Service ID
const TEMPLATE_ID = "template_lkx7plh"; // tu Template ID
const PUBLIC_KEY = "QX73OFRjjC6A-W8K2"; // tu Public Key (antes User ID)

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("Gracias por tu mensaje, te responderé pronto.");
        setFormData({
          user_name: "",
          subject: "",
          user_email: "",
          mensaje: "",
        });
        form.current.reset();
      },
      (error) => {
        console.error("EmailJS error:", error);
        setStatus("Error al enviar el mensaje, por favor, intentá nuevamente.");
      }
    );
  };

  const [formData, setFormData] = useState({
    user_name: "",
    subject: "",
    user_email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#5e0721] min-h-screen py-16 px-6 md:px-24 text-white max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Contacto
      </h1>
      <p className="mb-12 text-center text-white/90 text-lg">
        ¿Querés consultarme algo o iniciar un proyecto? Completá el formulario o
        escribime a{" "}
        <a
          href="mailto:hernanandreszaracho@gmail.com"
          className="underline hover:text-[#f8f8f8] break-words"
        >
          hernanandreszaracho@gmail.com
        </a>
        .
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 bg-white rounded-xl p-8 text-[#5e0721] shadow-lg"
      >
        <label className="flex flex-col">
          Nombre
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#740526]"
            placeholder="Tu nombre"
          />
        </label>

        <label className="flex flex-col">
          Asunto
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#740526]"
            placeholder="Tu asunto"
          />
        </label>

        <label className="flex flex-col">
          Email
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#740526]"
            placeholder="tu.email@ejemplo.com"
          />
        </label>

        <label className="flex flex-col">
          Mensaje
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={6}
            className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#740526]"
            placeholder="Escribí tu mensaje aquí..."
          />
        </label>

        <button
          type="submit"
          className="bg-[#740526] text-white font-semibold py-3 rounded-full hover:bg-[#5e0721] transition"
        >
          Enviar
        </button>

        {status && <p className="mt-4 text-center text-green-600">{status}</p>}
      </form>
    </div>
  );
};

export default Contacto;
