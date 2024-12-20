import Image from "next/image";
import Navbar from "./compunents/Navbar";
import Hero from "./compunents/Hero";
import HeroSec from "./compunents/HeroSec";
import Footer from "./compunents/Footer";
import SponsorSection from "./compunents/Sponcer";

export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <HeroSec />
  <SponsorSection />
  <Footer />
  </>
  );
}
