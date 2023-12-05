import BottomNavigation from "@/components/Navigation/BottomNavigation/BottomNavigation";
import { IChildrenProps } from "@/types/children";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NextAuthProvider from "@/providers/sessionProvider";

export default async function Home({ children }: IChildrenProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <NextAuthProvider>
        {children}
        <BottomNavigation />
      </NextAuthProvider>
    </>
  );
}
