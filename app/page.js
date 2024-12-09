import Image from "next/image";
import Header from "../app/components/header/Header.jsx"
import HeroSection from "./components/heroSection/HeroSection.jsx";
import About from "./components/aboutSection/About.jsx";
import Services from "./components/servicesSection/Services.jsx";
import Faqs from "./components/faq's/Faqs.jsx";
import WorkingProcess from './components/workingprocess/WorkingProcess.jsx'
import TechnologiesSection from "./components/technologies/Technologies.jsx";
import KnowUs from "./components/knowUs/KnowUs.jsx"
import OurProjects from "./components/projects/OurProjects.jsx"
import GetInTouch from "./components/getintouch/GetInTouch.jsx";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Services/>
      <About/>
      <Faqs/>
      <WorkingProcess/>
      <TechnologiesSection/>
      <KnowUs/>
      <OurProjects/>
      <GetInTouch/>
    </div>
  );
}
