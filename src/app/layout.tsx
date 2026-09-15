import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paca Viva • Compost entre Vecinos — Parque de las Pacas (Medellín)",
  description:
    "Comunidad de compostaje barrial en el Parque de las Pacas (Calle 38 # 64A-8, Medellín). Biotecnología limpia Guillermo Silva: cero moscas, cero olores y mantillo de bosque fértil.",
  keywords: [
    "Paca Digestora Silva",
    "Compostaje Comunitario",
    "Medellín",
    "Guillermo Silva",
    "Parque de las Pacas",
    "Conquistadores",
    "Laureles",
    "Residuos Orgánicos",
  ],
  authors: [{ name: "Comunidad Parque de las Pacas" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-[#F8F3E8] text-[#1E271D] min-h-screen">{children}</body>
    </html>
  );
}
