import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { BackgroundGlow } from "@/components/ui/Shared/BackgroundGlow";
import { Navbar } from "../components/sections/Navbar";

export default function Home() {
  return (
    <div className="relative isolate">
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
