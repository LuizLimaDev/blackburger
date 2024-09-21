import NextAuthProvider from "@/providers/sessionProvider";
import supabase from "@/services/supabase/supabase";
import type { Metadata } from "next";
import { Chilanka, Lilita_One } from "next/font/google";
import "./globals.css";

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
  let counter = 0;

  async function freeDbKeeper() {
    counter++;

    const fakeUser = {
      name: `user ${counter}`,
      email: "teste@teste.com",
      phone: "149999999",
      password: "asd21dsd21d",
    };

    const { error } = await supabase.from("users").insert(fakeUser);
  }

  setTimeout(() => {
    freeDbKeeper();
  }, 10);

  return (
    <html lang="pt-br">
      <body className={`${lilita.variable} ${chilankaFont.variable}`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
