import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alquileres Entre Ríos - Alquileres Turisticos",
  description: "La mejor plataforma para encontrar alquileres turisticos en la provincia de Entre Ríos. Rápido, fácil y directo.",
  icons: {
    icon: "/images/logo-actualizado.png",
    apple: "/images/logo-actualizado.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/logo-actualizado.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}