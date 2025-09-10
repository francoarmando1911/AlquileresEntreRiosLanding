import Link from "next/link";

export default function Footer() {

    const socialLinks = [
        { name: "LinkedIn", href: "https://www.linkedin.com/company/intra-argentina", target: "_blank" },
        { name: "Instagram", href: "https://www.instagram.com/intrasoftware__?igsh=MXY0Y2h0cmR3eTdhaw==", target: "_blank" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col gap-8 md:grid md:grid-cols-3">

                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <h2 className="text-xl font-bold mb-2 text-center md:text-left">Alquileres Turisticos Entre Ríos</h2>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <h3 className="font-semibold mb-2">Síguenos</h3>
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target={social.target}
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 text-sm"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Alquileres Turisticos Entre Ríos. Todos los derechos reservados.
            </div>
        </footer>
    );
}
