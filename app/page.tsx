import CoursesHome from "@/components/CoursesHome/coursesHome";
import HeroHome from "@/components/HeroHome/heroHome";
import { ModeToggle } from "@/components/navBar/modeToggle";


export default function Home() {
  return (
    <>
      <HeroHome />
      <CoursesHome />
    </>
  );
}
