
import Hero from "../components/Hero";
import Services from "../components/Services"; 
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
