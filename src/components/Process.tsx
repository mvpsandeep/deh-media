
import { Lightbulb, Palette, Code, Rocket, BarChart, Users } from "lucide-react";
import { useEffect, useState } from "react";

const processSteps = [
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Discovery & Strategy",
    description: "We dive deep into understanding your business, goals, and target audience to create a comprehensive strategy.",
    details: [
      "Stakeholder interviews and workshops",
      "Market research and competitor analysis",
      "User personas and journey mapping",
      "Technical requirements gathering",
      "Project timeline and milestone planning"
    ],
    duration: "1-2 weeks"
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Design & Prototyping",
    description: "Our design team creates stunning visuals and interactive prototypes that bring your vision to life.",
    details: [
      "Wireframing and information architecture",
      "Visual design and brand integration",
      "Interactive prototypes and animations",
      "User testing and feedback integration",
      "Design system development"
    ],
    duration: "2-4 weeks"
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Development & Integration",
    description: "We build your solution using cutting-edge technologies, ensuring scalability and performance.",
    details: [
      "Frontend and backend development",
      "API integrations and database setup",
      "Content management system setup",
      "Third-party service integrations",
      "Performance optimization"
    ],
    duration: "4-8 weeks"
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your solution works flawlessly across all devices and browsers.",
    details: [
      "Cross-browser and device testing",
      "Performance and load testing",
      "Security and accessibility audits",
      "User acceptance testing",
      "Bug fixes and optimizations"
    ],
    duration: "1-2 weeks"
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Launch & Deployment",
    description: "We handle the technical complexities of launching your solution and ensure a smooth go-live.",
    details: [
      "Production environment setup",
      "Domain and hosting configuration",
      "SSL certificates and security setup",
      "Content migration and final testing",
      "Go-live support and monitoring"
    ],
    duration: "1 week"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Support & Optimization",
    description: "Our partnership continues with ongoing support, maintenance, and continuous improvement.",
    details: [
      "24/7 monitoring and support",
      "Regular updates and maintenance",
      "Performance analytics and reporting",
      "Feature enhancements and additions",
      "Strategic consultation and planning"
    ],
    duration: "Ongoing"
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            We follow a proven methodology that ensures exceptional results every time. From initial concept to final launch and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`cursor-pointer transition-all duration-500 ${
                  activeStep === index ? 'scale-105' : ''
                }`}
                onClick={() => setActiveStep(index)}
                style={{ 
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)` 
                }}
              >
                <div className={`p-8 rounded-3xl border transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500' 
                    : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50'
                }`}>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm text-purple-400 font-medium">Step {index + 1}</div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <div className="text-gray-400 text-sm">{step.duration}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="sticky top-32">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white">
                  {processSteps[activeStep].icon}
                </div>
                <div>
                  <div className="text-purple-400 font-medium">Step {activeStep + 1}</div>
                  <h3 className="text-3xl font-bold">{processSteps[activeStep].title}</h3>
                  <div className="text-gray-400">{processSteps[activeStep].duration}</div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8">{processSteps[activeStep].description}</p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-300">What we deliver:</h4>
                <ul className="space-y-3">
                  {processSteps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
