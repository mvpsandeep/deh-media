
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse"></div>
        
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px)`,
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-purple-200 text-sm font-medium">Transforming Digital Experiences</span>
          </div>

          {/* Main headline */}
          <div className="space-y-8 mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight animate-fade-in">
              <span className="block text-white">We Build</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Digital Magic
              </span>
            </h1>
            
            <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                We craft exceptional digital experiences that captivate audiences and drive extraordinary results through innovative design and cutting-edge technology.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full font-semibold text-lg text-white transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="group flex items-center gap-3 px-12 py-5 rounded-full border-2 border-slate-600 text-slate-300 font-semibold text-lg hover:border-slate-400 hover:text-white hover:bg-slate-800/50 transition-all">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-800 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">700+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">500+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Clients</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">15+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Years</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">24/7</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
