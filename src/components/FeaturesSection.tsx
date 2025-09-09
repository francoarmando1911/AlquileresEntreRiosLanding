'use client';

import { motion } from 'framer-motion';
import TarjetaCaracteristica from './TarjetaCaracteristica';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export default function FeaturesSection() {
    return (
        <motion.section
            className="w-full max-w-6xl py-20 bg-width"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="text-4xl font-bold text-center text-secondary mb-12">
                ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TarjetaCaracteristica
                    imagenSrc="https://placehold.co/300x300/F5DFC1/8FAD9C"
                    titulo="Diseño Intuitivo"
                    descripcion="Navega con facilidad y encuentra lo que buscas en segundos. Una experiencia de usuario diseñada para vos."
                />
                <TarjetaCaracteristica
                    imagenSrc="https://placehold.co/300x300/8FAD9C/FAF2E5"
                    titulo="Variedad de Propiedades"
                    descripcion="Desde apartamentos modernos hasta casas con jardín. Un catálogo diverso que se ajusta a tus necesidades."
                />
                <TarjetaCaracteristica
                    imagenSrc="https://placehold.co/300x300/C6C8BD/333"
                    titulo="Contacto Directo"
                    descripcion="Comunícate sin intermediarios. Conecta directamente con los propietarios y resolvé tus dudas."
                />
            </div>
        </motion.section>
    );
}
