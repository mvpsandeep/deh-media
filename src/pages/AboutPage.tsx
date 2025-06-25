
import { Award, Users, Coffee, Heart, Target, Lightbulb, Zap, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const stats = [
  { icon: <Award className="w-12 h-12" />, number: "200+", label: "Projects Completed" },
  { icon: <Users className="w-12 h-12" />, number: "50+", label: "Happy Clients" },
  { icon: <Coffee className="w-12 h-12" />, number: "2000+", label: "Cups of Coffee" },
  { icon: <Heart className="w-12 h-12" />, number: "10", label: "Years of Passion" }
];

const values = [
  {
    icon: <Target className="w-16 h-16" />,
    title: "Precision",
    description: "Every pixel, every line of code, every creative decision is crafted with meticulous attention to detail."
  },
  {
    icon: <Lightbulb className="w-16 h-16" />,
    title: "Innovation",
    description: "We stay ahead of the curve, embracing new technologies and creative approaches to solve complex challenges."
  },
  {
    icon: <Zap className="w-16 h-16" />,
    title: "Impact",
    description: "Our work doesn't just look good—it drives real results and creates meaningful connections with your audience."
  },
  {
    icon: <Trophy className="w-16 h-16" />,
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in everything we do, from concept to completion."
  }
];

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DEH Media</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              We're not just a media company—we're digital storytellers, brand architects, and growth catalysts.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded with a vision to bridge the gap between creativity and technology, DEH Media has been at the forefront of digital innovation for over a decade. We believe that great design isn't just about aesthetics—it's about creating experiences that resonate, engage, and inspire action.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From humble beginnings as a small creative studio, we've grown into a full-service digital agency that partners with brands of all sizes—from ambitious startups to Fortune 500 companies. Our team of designers, developers, strategists, and storytellers work collaboratively to bring your vision to life.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                What sets us apart is our commitment to understanding your unique challenges and opportunities. We don't just create beautiful designs—we craft strategic solutions that drive real business results and create lasting impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  style={{ 
                    transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 15}px)` 
                  }}
                >
                  <div className="text-purple-400 mb-6 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-4">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl border border-gray-600 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin((scrollY + index * 150) * 0.008) * 10}px)`
                }}
              >
                <div className="text-purple-400 mb-6 flex justify-center group-hover:text-pink-400 transition-colors group-hover:scale-110 transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Meet the <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Our diverse team of creatives, strategists, and technologists brings together decades of experience 
            and a shared passion for creating exceptional digital experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="group">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-6xl font-bold group-hover:scale-105 transition-transform">
                D
              </div>
              <h3 className="text-2xl font-bold mb-2">Creative Director</h3>
              <p className="text-gray-400">Leading our creative vision with 15+ years of experience in digital design and brand strategy.</p>
            </div>
            
            <div className="group">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold group-hover:scale-105 transition-transform">
                E
              </div>
              <h3 className="text-2xl font-bold mb-2">Technical Director</h3>
              <p className="text-gray-400">Driving innovation with cutting-edge technology solutions and development expertise.</p>
            </div>
            
            <div className="group">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center text-6xl font-bold group-hover:scale-105 transition-transform">
                H
              </div>
              <h3 className="text-2xl font-bold mb-2">Strategy Director</h3>
              <p className="text-gray-400">Crafting data-driven strategies that align creative vision with business objectives.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
