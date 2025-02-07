import profile from "../assets/profile.jpeg";

const AboutMe = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100">
            {/* Contenedor principal */}
            <div className="flex items-start gap-16 max-w-6xl m-10 mx-auto p-12 bg-white rounded-lg shadow-lg">
                {/* Sección de texto */}
                <div className="flex-1">
                    <h2 className="text-gray-800 uppercase text-lg mb-4">Acerca de mí</h2>
                    <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6 leading-tight">
                        Bienvenido a Bufete Legal Nuñez & Asociados
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Con más de 10 años de experiencia, ofrecemos asesoría y representación
                        legal de excelencia. Ayudamos a nuestros clientes en trámites legales
                        como la creación de empresas, resolución de conflictos laborales,
                        compra de propiedades y mucho más.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Nuestro compromiso es brindarte soluciones legales eficientes,
                        transparentes y con la más alta ética profesional.
                    </p>
                    <p className="text-lg italic text-gray-800 font-serif">
                        Rene Nuñez <br />
                        <span className="text-base font-sans text-gray-600">
                            Fundador de Bufete Nuñez & Asociados
                        </span>
                    </p>
                </div>
                {/* Sección de imagen */}
                <div className="relative w-96 h-auto">
                    {/* Fondo superpuesto */}
                    <div className="absolute top-6 left-6 w-full h-full bg-[#C4B99E]"></div>

                    {/* Imagen de perfil */}
                    <div className="relative z-10 w-full h-full">
                        <img
                            src={profile} /* Aquí va tu imagen */
                            alt="profile"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;