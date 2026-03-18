import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { BackgroundGlow } from "@/components/ui/Shared/BackgroundGlow";
import { Navbar } from "../components/sections/Navbar";

export default function Home() {
  return (
    <div className="relative isolate bg-linear-to-b from-blue-50/70 via-sky-50/60 to-zinc-50/75 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      <BackgroundGlow />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </div>
    </div>
  );
}
