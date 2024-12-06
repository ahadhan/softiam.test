import Image from "next/image";
import Header from "../app/components/header/Header.jsx"
import HeroSection from "./components/heroSection/HeroSection.jsx";
import About from "./components/aboutSection/About.jsx";
import Services from "./components/servicesSection/Services.jsx";
import Faqs from "./components/faq's/Faqs.jsx";
import WorkingProcess from './components/workingprocess/WorkingProcess.jsx'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Services/>
      <About/>
      <Faqs/>
      <WorkingProcess/>
    </div>
  );
}
