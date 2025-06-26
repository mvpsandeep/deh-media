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
      {/* Dramatically Enhanced Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Multiple animated gradient layers with intense movement */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-black to-blue-600/40"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`,
            animation: 'pulse 3s infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 via-purple-600/20 to-red-600/30"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05 + Math.sin(Date.now() * 0.002) * 10}deg)`,
            animation: 'pulse 4s infinite reverse'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-bl from-blue-600/25 via-transparent to-purple-600/35"
          style={{ 
            transform: `translateX(${Math.sin(Date.now() * 0.001) * 50}px) translateY(${scrollY * 0.4}px)`,
            animation: 'pulse 5s infinite'
          }}
        ></div>
        
        {/* Large moving geometric shapes with intense animation */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
            style={{ 
              transform: `translateY(${scrollY * 0.2 + Math.sin(Date.now() * 0.002) * 30}px) translateX(${Math.cos(Date.now() * 0.001) * 20}px)`,
              animation: 'float 6s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
            style={{ 
              transform: `translateY(${scrollY * 0.4 + Math.cos(Date.now() * 0.0015) * 40}px) translateX(${Math.sin(Date.now() * 0.001) * 30}px)`,
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/25 to-red-500/25 rounded-full blur-2xl"
            style={{ 
              transform: `translateY(${scrollY * 0.6 + Math.sin(Date.now() * 0.003) * 25}px) scale(${1 + Math.cos(Date.now() * 0.002) * 0.2})`,
              animation: 'pulse 7s infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
            style={{ 
              transform: `translateY(${Math.cos(Date.now() * 0.0025) * 35}px) translateX(${Math.sin(Date.now() * 0.002) * 25}px)`,
              animation: 'float 9s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        {/* Enhanced floating particles with more movement */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-purple-400/30 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `translateY(${Math.sin((Date.now() * 0.001) + i * 100) * 40}px) translateX(${Math.cos((Date.now() * 0.0008) + i * 50) * 30}px)`
              }}
            />
          ))}
        </div>

        {/* Additional animated overlay patterns */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
          style={{ 
            transform: `translateX(${Math.sin(Date.now() * 0.001) * 100}px)`,
            animation: 'pulse 6s infinite'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-50">
        <div className="text-center max-w-6xl mx-auto">
          <div className="animate-fade-in relative z-50">
            <h1 className="text-6xl md:text-8xl font-bold mb-12 leading-tight relative z-50">
              We Create
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent block animate-pulse mb-12 relative z-50">
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
