
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
      {/* Lightning-Enhanced Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Lightning-like gradient flashes */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-black to-blue-600/40"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + Math.sin(Date.now() * 0.003) * 0.15})`,
            animation: 'lightning-flash 2s infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 via-purple-600/20 to-red-600/30"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05 + Math.sin(Date.now() * 0.004) * 15}deg)`,
            animation: 'lightning-flash 1.5s infinite reverse'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-bl from-blue-600/25 via-transparent to-purple-600/35"
          style={{ 
            transform: `translateX(${Math.sin(Date.now() * 0.002) * 60}px) translateY(${scrollY * 0.4}px)`,
            animation: 'lightning-flash 2.5s infinite'
          }}
        ></div>
        
        {/* Lightning bolt-like moving shapes */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl"
            style={{ 
              transform: `translateY(${scrollY * 0.2 + Math.sin(Date.now() * 0.004) * 40}px) translateX(${Math.cos(Date.now() * 0.003) * 30}px)`,
              animation: 'lightning-pulse 3s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/40 to-purple-500/40 rounded-full blur-3xl"
            style={{ 
              transform: `translateY(${scrollY * 0.4 + Math.cos(Date.now() * 0.003) * 50}px) translateX(${Math.sin(Date.now() * 0.002) * 40}px)`,
              animation: 'lightning-pulse 4s ease-in-out infinite reverse'
            }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/35 to-red-500/35 rounded-full blur-2xl"
            style={{ 
              transform: `translateY(${scrollY * 0.6 + Math.sin(Date.now() * 0.005) * 35}px) scale(${1 + Math.cos(Date.now() * 0.004) * 0.3})`,
              animation: 'lightning-flash 1.8s infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"
            style={{ 
              transform: `translateY(${Math.cos(Date.now() * 0.004) * 45}px) translateX(${Math.sin(Date.now() * 0.003) * 35}px)`,
              animation: 'lightning-pulse 5s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        {/* Lightning-like floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-white/60 rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `lightning-spark ${1.5 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 3}s`,
                transform: `translateY(${Math.sin((Date.now() * 0.002) + i * 150) * 60}px) translateX(${Math.cos((Date.now() * 0.0015) + i * 80) * 45}px)`
              }}
            />
          ))}
        </div>

        {/* Lightning strike overlay effects */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{ 
            transform: `translateX(${Math.sin(Date.now() * 0.003) * 150}px)`,
            animation: 'lightning-strike 4s infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"
          style={{ 
            transform: `translateY(${Math.cos(Date.now() * 0.002) * 100}px)`,
            animation: 'lightning-strike 3s infinite reverse'
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
