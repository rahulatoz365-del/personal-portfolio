import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/index";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
      </div>
    </main>
  );
}
