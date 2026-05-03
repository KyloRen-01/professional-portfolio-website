import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import HeroAboutMeSection from "./sections/aboutme-section";
import FeaturedProjectSection from "./sections/featured-project-section";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroAboutMeSection />
      <FeaturedProjectSection />
    </div>
  );
}
