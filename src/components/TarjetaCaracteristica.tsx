'use client';

import { motion } from 'framer-motion';

interface Props {
    imagenSrc: string;
    titulo: string;
    descripcion: string;
}

export default function TarjetaCaracteristica({ imagenSrc, titulo, descripcion }: Props) {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="w-48 h-48 mb-4">
                <img
                    src={imagenSrc}
                    alt={titulo}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
            <p className="text-gray-600">{descripcion}</p>
        </motion.div>
    );
}
