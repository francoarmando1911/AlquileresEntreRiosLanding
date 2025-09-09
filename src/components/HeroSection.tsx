import { motion } from 'framer-motion';
import BotonAnimado from './BotonAnimado';
import Image from 'next/image';

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function HeroSection() {
    return (
        <motion.section
            className="relative w-full h-screen flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <div className="absolute inset-0">
                <Image
                    src="/images/concordia.png"
                    alt="Fondo hero"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
            </div>

            <motion.h1
                className="text-5xl md:text-7xl font-extrabold text-secondary mb-4 relative z-10"
                variants={itemVariants}
            >
                Tus Próximas Vacaciones te Esperan
            </motion.h1>
            <motion.p
                className="text-lg md:text-xl text-gray-700 mb-8 relative z-10"
                variants={itemVariants}
            >
                La forma más sencilla de encontrar alquileres en Entre Ríos.
                Descubre propiedades increíbles y contacta directamente.
            </motion.p>
            <motion.div variants={itemVariants} className="relative z-10">
                <BotonAnimado texto="Ir a la Aplicación" url="https://alquileresentrerios.vercel.app/" />
            </motion.div>
        </motion.section>
    );
}
