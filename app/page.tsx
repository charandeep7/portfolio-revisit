import About from "./_components/About/page";
import Contact from "./_components/Contact/page";
import Footer from "./_components/Footer/page";
import Navbar from "./_components/Header/page";
import Hero from "./_components/Hero/page";
import MySlide from "@/components/animtions/Slide";

export default function Home() {
  return (
    <div className="text-white overflow-hidden">
      <Navbar />
      <MySlide>
        <Hero />
      </MySlide>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
