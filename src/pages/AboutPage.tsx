
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Team from "../components/Team";
import FAQ from "../components/FAQ";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - DEH Media | Digital Marketing Experts";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DEH Media</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering digital transformation through innovative media solutions and strategic excellence.
          </p>
        </div>
      </section>

      <About />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AboutPage;
