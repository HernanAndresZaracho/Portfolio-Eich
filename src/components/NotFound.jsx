function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8] px-6 text-center">
      <h1 className="text-6xl font-extrabold text-[#5e0721] mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        Página no encontrada
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        Lo sentimos, la página que estás buscando no existe o fue movida.
        Verificá la URL o volvé al inicio.
      </p>
      <a
        href="/"
        className="inline-block bg-[#5e0721] hover:bg-[#47041b] text-white font-semibold px-6 py-3 rounded-3xl transition"
      >
        Ir al Inicio
      </a>
    </div>
  );
}

export default NotFound;
