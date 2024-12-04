import Hero from "@/components/hero";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";


export default function Home() {
  return (
   <div>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
   </div>
  );
}
