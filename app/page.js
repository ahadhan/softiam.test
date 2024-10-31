import Image from "next/image";
import Header from "../app/components/header/Header.jsx"
import HeroSection from "./components/header/heroSection/HeroSection.jsx";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
    </div>
  );
}
