import type { Metadata } from "next";
import { Chilanka, Lilita_One } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/sessionProvider";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lilita",
});

const chilankaFont = Chilanka({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-chilanka",
});

export const metadata: Metadata = {
  title: "Black Burger",
  description: "Seu pretinho básico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${lilita.variable} ${chilankaFont.variable}`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
