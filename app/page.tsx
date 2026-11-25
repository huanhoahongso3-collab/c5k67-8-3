import CursorTrail from "@/components/CursorTrail";
import Envelope from "@/components/Envelope";
import FallingPetals from "@/components/FallingPetals";
import GiftBoxes from "@/components/GiftBoxes";
import Footer from "@/components/Footer";
import Greeting from "@/components/Greeting";
import Hero from "@/components/Hero";
import MusicToggle from "@/components/MusicToggle";
import WishWall from "@/components/WishWall";

export default function Home() {
  return (
    <main className="relative">
      <FallingPetals />
      <CursorTrail />
      <MusicToggle />
      <Envelope />
      <Hero />
      <Greeting />
      <GiftBoxes />
      <WishWall />
      <Footer />
    </main>
  );
}
