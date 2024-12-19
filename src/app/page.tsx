import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import FooterSection from "./component/FooterSection";

export default function Home() {
  return (
  <div> 
    {/* <Navbar/> */}
    <HeroSection></HeroSection>
    <FooterSection></FooterSection>
  </div>
  );
}
