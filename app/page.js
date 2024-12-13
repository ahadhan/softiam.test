import Image from "next/image";
import Head from "next/head.js";
import Header from "../app/components/header/Header.jsx"
import HeroSection from "./components/heroSection/HeroSection.jsx";
import About from "./components/aboutSection/About.jsx";
import Services from "./components/servicesSection/Services.jsx";
import Faqs from "./components/faq's/Faqs.jsx";
import WorkingProcess from './components/workingprocess/WorkingProcess.jsx'
import TechnologiesSection from "./components/technologies/Technologies.jsx";
import KnowUs from "./components/knowUs/KnowUs.jsx"
import OurProjects from "./components/projects/OurProjects.jsx"
import Testimonial from "./components/testimonials/Testimonial.jsx";
import GetInTouch from "./components/getintouch/GetInTouch.jsx";
import Footer from "./components/footer/Footer.jsx"

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header/>
      <HeroSection/>
      <Services/>
      <About/>
      <Faqs/>
      <WorkingProcess/>
      <TechnologiesSection/>
      <KnowUs/>
      <OurProjects/>
      <Testimonial/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}
