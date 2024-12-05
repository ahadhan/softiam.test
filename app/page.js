import Image from "next/image";
import Header from "../app/components/header/Header.jsx"
import HeroSection from "./components/header/heroSection/HeroSection.jsx";
import About from "./components/aboutSection/About.jsx";
import Services from "./components/servicesSection/Services.jsx";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Services/>
      <About/>
    </div>
  );
}
