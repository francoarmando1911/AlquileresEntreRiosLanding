'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="sticky top-0 z-50" style={{ backgroundColor: "#fbfbeb" }}>
            <motion.div
                className="max-w-7xl mx-auto flex justify-center items-center px-4 py-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src="/images/logo-actualizado.png"
                    alt="Alquileres Concepción"
                    width={160}
                    height={110}
                    priority
                    className="w-auto h-36"
                />
            </motion.div>
        </header>
    );
}
