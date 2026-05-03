import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import HeroAboutMeSection from "./sections/aboutme-section";
import FeaturedProjectSection from "./sections/hero-project-section";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjectSection />
      <HeroAboutMeSection />
    </div>
  );
}
