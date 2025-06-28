
import { ArrowRight, Play, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Contact info bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1 904 531 0621</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>633 Vermont St, San Francisco, CA 94107</span>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                We Create
              </h1>
              <div className="mb-8">
                <h2 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Digital Magic
                </h2>
              </div>
            </div>
            
            <div className="animate-fade-in max-w-4xl mx-auto mb-12" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                Transform your digital presence with cutting-edge media solutions. We craft exceptional 
                experiences that captivate audiences and drive extraordinary results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-16" style={{ animationDelay: '0.4s' }}>
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
                Start Your Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-gray-600 hover:border-gray-400 px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 transition-all hover:bg-white/10 shadow-2xl">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Watch Our Story
              </button>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">700+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Instant Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
