import type { Metadata } from "next";
import { Space_Grotesk, Archivo_Black } from "next/font/google";
import "./globals.css";
import { AOSProvider } from "@/components/aos-provider";
import { site } from "@/lib/site";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const display = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
