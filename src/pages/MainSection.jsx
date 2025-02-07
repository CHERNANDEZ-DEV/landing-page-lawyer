import bgImage from "../assets/bg8.jpg"
import logo from "../assets/ley2.png"

const MainSection = () => {

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* Overlay oscuro */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}

            {/* Navbar */}
            <div className="relative z-10 p-4">
                <div className="flex items-center justify-between px-6 py-6 bg-[#2C2C2C] bg-opacity-40 rounded-2xl">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="w-12 h-12 mr-6" />
                        <h1 className="text-2xl font-serif font-bold text-white">
                            Despacho Jurídico Nuñez
                        </h1>
                    </div>
                    <div className="flex">
                        <ul className="flex space-x-8 text-white text-xl font-serif font-semibold mr-10 items-center">
                            <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Acerca de mí</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Mis servicios</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Trayectoria profesional</a></li>
                        </ul>
                        <button className="text-xl font-serif font-semibold px-6 py-2 text-white bg-[#FF577F] rounded-md shadow-md hover:bg-[#b8962e] transition duration-300">
                            Contáctame
                        </button>
                    </div>
                </div>
            </div>

            {/* Llamado a la acción */}
            <div className="flex flex-col h-screen pt-60 pl-28">
                <p className="text-white text-2xl font-sans">¿Necesitas ayuda?</p>
                <h1 className="mt-4 text-6xl font-serif font-bold text-white leading-tight">
                    Abogacía y Notariado
                </h1>
                <p className="mt-4 text-2xl font-sans text-white leading-relaxed">
                    Llámanos hoy y haz tu cita. Estamos listos para ayudarte
                </p>
                <p className="text-2xl font-sans text-white leading-relaxed">
                    en todo trámite legal para El Salvador desde Los Estados Unidos.
                </p>
            </div>
        </div>


    );

}

export default MainSection;