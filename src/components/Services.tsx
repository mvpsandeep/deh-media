
import { Code, Palette, Rocket, Users, BarChart, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that captivate users and drive conversions through strategic design thinking."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Digital Strategy",
    description: "Comprehensive digital strategies that align with your business goals and accelerate growth."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Brand Identity",
    description: "Memorable brand identities that resonate with your audience and set you apart from competitors."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Analytics & SEO",
    description: "Data-driven optimization and search engine strategies to maximize your digital presence."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your digital assets performing at their best."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
