
import { Code, Palette, Rocket, Users, BarChart, Shield, Camera, Megaphone, Smartphone, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "API Integration"]
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that captivate users and drive conversions through strategic design thinking.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: "Video Production",
    description: "Professional video content that tells your story and engages your audience across all platforms.",
    features: ["Corporate Videos", "Product Demos", "Social Media Content", "Animation"]
  },
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that amplify your brand and drive measurable results.",
    features: ["Social Media Marketing", "Content Strategy", "Influencer Partnerships", "Campaign Management"]
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"]
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Brand Strategy",
    description: "Comprehensive brand development that resonates with your audience and sets you apart.",
    features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Market Positioning"]
  }
];

const ServicesPage = () => {
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
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Comprehensive digital solutions designed to elevate your brand and drive extraordinary growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)`
                }}
              >
                <div className="text-purple-400 mb-6 group-hover:text-pink-400 transition-colors duration-300 group-hover:scale-110 transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how our services can help you achieve your digital goals and take your business to the next level.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
