import BottomNavigation from "@/components/Navigation/BottomNavigation/BottomNavigation";
import { IChildrenProps } from "@/types/children";

export default async function Home({ children }: IChildrenProps) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
}
