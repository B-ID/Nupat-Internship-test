import {
  About,
  ContactUs,
  ExpertTeam,
  Features,
  Header,
  HeroSection,
  Services,
  Testimonial,
  Transport,
} from "./components";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="mx-auto max-w-[1920px] subpixel-antialiased">
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

      {/* Blog post */}
      <section className="mb-[101px]">
        <Blog />
      </section>

      {/* Footer */}
      <section className="">
        <Footer />
      </section>
    </main>
  );
}

export default App;
