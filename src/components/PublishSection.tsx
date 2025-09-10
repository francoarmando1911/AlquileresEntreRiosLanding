'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

export default function PublishSection() {

    const whatsappUrl = `https://wa.me/5493442310036?text=${encodeURIComponent(
        "Hola, me gustaría consultar sobre los planes para publicar mi propiedad para Alquiler Turístico en su plataforma!"
    )}`;


    return (
        <motion.section
            className="w-full py-20 bg-slate-400 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold text-center text-black mb-6">
                ¿Querés publicar tu propiedad en Alquileres Entre Ríos?
            </h2>
            <p className="text-center text-gray-700 mb-6 max-w-xl">
                Elegí tu plan y nosotros nos ocupamos de que tu propiedad esté visible para miles de turistas.
            </p>
            <p className="text-center text-gray-700 mb-8 max-w-xl">
                Es simple, rápido y seguro. ¡Nos encargamos de todo para que tu propiedad llegue a muchas personas!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                    href="mailto:intrasoftware1911@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white flex items-center gap-2 rounded-full px-6 py-3">
                        <FaMailBulk size={18} /> Mail
                    </Button>
                </a>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 rounded-full px-6 py-3">
                        <FaWhatsapp size={18} /> WhatsApp
                    </Button>
                </a>
            </div>


        </motion.section>
    );
}
