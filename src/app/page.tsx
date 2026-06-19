import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ventures } from "@/components/Ventures";
import { Highlights } from "@/components/Highlights";
import { CareerTimeline } from "@/components/CareerTimeline";
import { Achievements } from "@/components/Achievements";
import { IconicMoments } from "@/components/IconicMoments";
import { Brands } from "@/components/Brands";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ventures />
        <Highlights />
        <CareerTimeline />
        <Achievements />
        <IconicMoments />
        <Brands />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
