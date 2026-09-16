import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import Leadership from "@/components/home/Leadership";
import WhyJoin from "@/components/home/WhyJoin";
import Newsletter from "@/components/home/Newsletter";
import FocusSectors from "@/components/home/FocusSectors";
import Intro from "@/components/home/Intro";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Intro />
      <UpcomingEvent />
      <Leadership />
      <WhyJoin />
      <Newsletter />
      <FocusSectors />
    </>
  );
}
