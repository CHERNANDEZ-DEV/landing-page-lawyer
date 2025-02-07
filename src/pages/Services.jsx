const Services = () => {
  return (

    <div className="flex flex-col bg-gray-900">
      <div className="pt-8 font-serif font-bold text-4xl">
        <h1 className="text-center text-white">Servicios ofrecidos</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            {/* Icono */}
            <svg
              className="w-14 h-14 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16h8m-4-8v8m9 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m16-10l-6-4-6 4m12 6v-2a9 9 0 10-18 0v2"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Rendimiento en Tribunales
          </h3>
          <p className="text-gray-600 text-center">
            Con una amplia experiencia en representación judicial <br></br>
            garantizamos resultados efectivos para casos civiles <br></br>
            nuestro equipo legal está preparado para enfrentar los <br></br>
            con estrategias sólidas y personalizadas.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            {/* Icono */}
            <svg
              className="w-14 h-14 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Práctica Jurídica Confiable
          </h3>
          <p className="text-gray-600 text-center">
            Con una amplia experiencia en representación judicial <br></br>
            garantizamos resultados efectivos para casos civiles <br></br>
            nuestro equipo legal está preparado para enfrentar los <br></br>
            con estrategias sólidas y personalizadas.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            {/* Icono */}
            <svg
              className="w-14 h-14 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 0a2 2 0 11-4 0 2 2 0 014 0m-8 0a2 2 0 11-4 0 2 2 0 014 0m8 0a6 6 0 10-12 0 6 6 0 0012 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Innovación Legal Global
          </h3>
          <p className="text-gray-600 text-center">
            Con una amplia experiencia en representación judicial <br></br>
            garantizamos resultados efectivos para casos civiles <br></br>
            nuestro equipo legal está preparado para enfrentar los <br></br>
            con estrategias sólidas y personalizadas.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Services;