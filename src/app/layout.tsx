import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gestión de Proyectos Ágil y Personalizable - Kapta",
  description:
    "Organiza, prioriza y colabora en tus proyectos de forma eficiente con [Nombre de la Web], la herramienta ágil para gestionar tareas, equipos y plazos. Personalización flexible, integración con tus aplicaciones favoritas y análisis en tiempo real para maximizar la productividad.",
  keywords:
    "gestión de proyectos, software ágil, tareas colaborativas, seguimiento de proyectos, organización de equipos, planificación de proyectos, personalización de herramientas, productividad, colaboración en línea, gestión de tareas, seguimiento de plazos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
