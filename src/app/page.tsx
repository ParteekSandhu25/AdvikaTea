import Image from "next/image";
import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/layouts/HeroSection";
import Footer from "../components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}
