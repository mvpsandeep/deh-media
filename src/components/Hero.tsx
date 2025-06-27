
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
      {/* Galaxy-Inspired Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Deep space gradient base */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-blue-900/30"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
        
        {/* Swirling galaxy arms */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20"
          style={{ 
            transform: `rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`,
            transformOrigin: 'center'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-transparent to-purple-600/25"
          style={{ 
            transform: `rotate(${-scrollY * 0.08}deg) scale(${1 + Math.cos(Date.now() * 0.0008) * 0.12})`,
            transformOrigin: 'center'
          }}
        ></div>
        
        {/* Nebula clouds */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-float"
            style={{ 
              transform: `translateY(${scrollY * 0.2 + Math.sin(Date.now() * 0.002) * 30}px) translateX(${Math.cos(Date.now() * 0.0015) * 20}px)`,
              animationDuration: '8s'
            }}
          ></div>
          <div 
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500/25 to-purple-500/30 rounded-full blur-3xl animate-float"
            style={{ 
              transform: `translateY(${scrollY * 0.4 + Math.cos(Date.now() * 0.0018) * 40}px) translateX(${Math.sin(Date.now() * 0.0012) * 30}px)`,
              animationDuration: '10s',
              animationDelay: '2s'
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-red-500/15 rounded-full blur-2xl animate-float"
            style={{ 
              transform: `translateY(${scrollY * 0.6 + Math.sin(Date.now() * 0.0025) * 25}px) scale(${1 + Math.cos(Date.now() * 0.002) * 0.2})`,
              animationDuration: '12s',
              animationDelay: '4s'
            }}
          ></div>
        </div>
        
        {/* Starfield */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${0.5 + Math.random() * 1.5})`
              }}
            />
          ))}
        </div>

        {/* Larger stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${3 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 4}s`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
              }}
            />
          ))}
        </div>

        {/* Cosmic dust particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin((Date.now() * 0.001) + i * 100) * 50}px) translateX(${Math.cos((Date.now() * 0.0008) + i * 80) * 30}px)`,
                animation: `fade-in-out ${4 + Math.random() * 3}s infinite`,
                animationDelay: `${Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        {/* Spiral galaxy effect */}
        <div 
          className="absolute inset-0 bg-gradient-conic from-transparent via-purple-500/5 to-transparent"
          style={{ 
            transform: `rotate(${Date.now() * 0.01}deg)`,
            transformOrigin: 'center'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-50">
        <div className="text-center max-w-6xl mx-auto">
          <div className="animate-fade-in relative z-50">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight relative z-50">
              We Create
            </h1>
            <div className="relative z-50 mb-8 sm:mb-12 md:mb-16">
              <span 
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold animate-pulse block leading-tight sm:leading-none"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'block',
                  paddingBottom: '0.5em',
                  lineHeight: '1.1',
                  position: 'relative',
                  zIndex: 100
                }}
              >
                Digital Magic
              </span>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 sm:mb-14 md:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
              Transform your digital presence with cutting-edge media solutions. We craft exceptional 
              experiences that captivate audiences and drive extraordinary results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center animate-fade-in mb-16 sm:mb-20 md:mb-24 px-4" style={{ animationDelay: '0.4s' }}>
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-semibold text-base sm:text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 w-full sm:w-auto">
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform sm:w-6 sm:h-6" />
            </button>
            
            <button className="group border-2 border-gray-600 hover:border-gray-400 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-semibold text-base sm:text-lg flex items-center gap-3 transition-all hover:bg-white/10 shadow-2xl w-full sm:w-auto">
              <Play size={20} className="group-hover:scale-110 transition-transform sm:w-6 sm:h-6" />
              Watch Our Story
            </button>
          </div>

          {/* Updated Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">700+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Instant Support</div>
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
