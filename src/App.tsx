import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ExpertTeam from "./components/ExpertTeam";
import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Transport from "./components/Transport";

function App() {
  return (
    <main className="subpixel-antialiased max-w-[1920px] mx-auto">
      {/* Navbar */}
      <section id="home" className="">
        <Header />
      </section>

      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* What we do */}
      <section id="about" className="">
        <About />
      </section>

      {/* Services */}
      <section id="services" className="mb-12">
        <Services />
      </section>

      {/* Transport accross the world */}
      <section id="project" className="mb-[101px] pt-12">
        <Transport />
      </section>

      {/* Testimonial */}
      <section className="mb-[101px]">
        <Testimonial />
      </section>

      {/* Why choose TransitFlow */}
      <section className="mb-[96px]">
        <Features />
      </section>

      {/* Meet expert team */}
      <section id="expert" className="mb-[101px]">
        <ExpertTeam />
      </section>

      {/* Contact us */}
      <section id="contact" className="mb-[101px]">
        <ContactUs />
      </section>

      <section>{/* Blog post */}</section>

      <section>{/* Footer */}</section>
    </main>
  );
}

export default App;
