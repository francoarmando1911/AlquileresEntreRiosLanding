'use client';

import { motion } from 'framer-motion';

interface BotonAnimadoProps {
    texto: string;
    url: string;
}

const BotonAnimado: React.FC<BotonAnimadoProps> = ({ texto, url }) => {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg bg-black hover:bg-blue-300"
            whileHover={{ scale: 1.05 }}red-200
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            {texto}
        </motion.a>
    );
};

export default BotonAnimado;
