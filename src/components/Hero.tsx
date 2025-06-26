
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Animated gradient layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            animationDuration: '4s'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-purple-900/20"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.02}deg)`,
            animation: 'pulse 6s infinite'
          }}
        ></div>
        
        {/* Moving geometric shapes */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-bounce"
            style={{ 
              transform: `translateY(${scrollY * 0.2}px)`,
              animationDuration: '8s'
            }}
          ></div>
          <div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * 0.4}px)`,
              animationDuration: '10s'
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-red-500/5 rounded-full blur-2xl"
            style={{ 
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.6}px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
              animation: 'pulse 12s infinite'
            }}
          ></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                transform: `translateY(${Math.sin((scrollY + i * 100) * 0.01) * 20}px)`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">
              We Create
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent block animate-pulse mb-8">
                Digital Magic
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Transform your digital presence with cutting-edge media solutions. We craft exceptional 
              experiences that captivate audiences and drive extraordinary results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in mb-24" style={{ animationDelay: '0.4s' }}>
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-full font-semibold text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              Start Your Journey
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-gray-600 hover:border-gray-400 px-12 py-6 rounded-full font-semibold text-lg flex items-center gap-3 transition-all hover:bg-white/10 shadow-2xl">
              <Play size={24} className="group-hover:scale-110 transition-transform" />
              Watch Our Story
            </button>
          </div>

          {/* Updated Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">700+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Instant Support</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
