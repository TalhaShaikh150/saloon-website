import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Services from "./components/Services";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Services />
    </div>
  );
}
