const clientes = [
  {
    nombre: "Fichap",
    logo: "https://cdn.prod.website-files.com/66dea030b1b34fdbc17288af/66e13195be3bdc683f4c1178_BrandLogo.svg",
    url: "https://www.fichap.com/",
  },
  {
    nombre: "Electro Punto",
    logo: "https://electropunto.com.ar/wp-content/uploads/2025/02/1000x500.webp",
    url: "https://electropunto.com.ar/",
  },
  {
    nombre: "CM Innovation",
    logo: "https://cminnovation.com.ar/wp-content/uploads/2022/09/cropped-LOGO-FC-165x106.png",
    url: "https://cminnovation.com.ar/",
  },
  {
    nombre: "Facultad de Medicina",
    logo: "https://med.unne.edu.ar/wp-content/uploads/2022/10/Logo_MED_PNG.png",
    url: "https://med.unne.edu.ar",
  },
  {
    nombre: "Tucuman Shopping",
    logo: "https://tucumanshopping.com.ar/files/get/1945",
    url: "https://tucumanshopping.com.ar/",
  },
];

const Clientes = () => {
  return (
    <section className="relative bg-[#5e0721] text-white py-20 px-6 md:px-24 overflow-hidden">
      {/* Encabezado */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Clientes con los que trabajé
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          He colaborado con empresas de distintos rubros, aportando tecnología y
          soluciones adaptadas a cada necesidad.
        </p>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {clientes.map(({ nombre, logo, url }) => (
          <a
            key={nombre}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition duration-300 hover:scale-[1.03]"
            aria-label={`Sitio web de ${nombre}`}
          >
            <img
              src={logo}
              alt={`Logo de ${nombre}`}
              className="h-16 object-contain mb-4"
              loading="lazy"
            />
            <span className="text-[#5e0721] font-semibold text-center text-sm group-hover:underline">
              {nombre}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Clientes;
