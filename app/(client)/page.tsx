import { Bento } from "../components/ui/bento";
import { Chef } from "../components/ui/chef";
import { Favourites } from "../components/ui/favourites";
import { Hero } from "../components/ui/hero";
import CafeRitualSection from "../components/ui/cafe-ritual";
import TestimonialSection from "../components/ui/testimonial";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-neutral-900 flex flex-col  items-center justify-center relative ">

      <Hero />
      <Bento />
      <Favourites />
      <Chef />
      <TestimonialSection />
      <CafeRitualSection />
      
    </div>
  );
}
