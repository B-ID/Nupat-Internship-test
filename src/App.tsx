import About from "./components/About";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Transport from "./components/Transport";

function App() {
  return (
    <main>
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
      <section id="services" className="border-2 border-red-400">
        <Services />
      </section>

      {/* Transport accross the world */}
      <section className="border-2 border-teal-500">
        <Transport />
      </section>

      {/* Testimonial */}
      <section>
        
      </section>

      <section>{/* Why choose TransitFlow */}</section>

      <section>{/* Meet expert team */}</section>

      <section>{/* Contact us */}</section>

      <section>{/* Blog post */}</section>

      <section>{/* Footer */}</section>
    </main>
  );
}

export default App;
