
import Hero from "../components/Hero";
import Services from "../components/Services"; 
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Process from "../components/Process";
import Technologies from "../components/Technologies";
import CaseStudies from "../components/CaseStudies";
import Team from "../components/Team";
import BlogPreview from "../components/BlogPreview";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "DEH Media - Digital Transformation & Marketing Agency";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <CaseStudies />
      <Process />
      <Technologies />
      <About />
      <Team />
      <Testimonials />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
