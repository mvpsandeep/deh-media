
import { Code, Palette, Rocket, Users, BarChart, Shield, Camera, Megaphone, Smartphone, Globe, Zap, Target, TrendingUp, Search, ShoppingCart, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "React & Next.js Development",
      "Full-Stack Applications", 
      "Progressive Web Apps (PWAs)",
      "API Development & Integration",
      "Database Design & Optimization",
      "Performance Optimization",
      "Security Implementation",
      "Third-Party Integrations"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    pricing: "Starting at $8,000",
    timeline: "4-12 weeks",
    caseStudy: {
      client: "TechFlow SaaS",
      result: "340% increase in user engagement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    }
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that captivate users and drive conversions through strategic design thinking.",
    features: [
      "User Research & Analysis",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Accessibility Design",
      "Mobile-First Design",
      "Usability Testing",
      "Design System Creation"
    ],
    technologies: ["Figma", "Sketch", "Adobe Creative Suite", "Principle", "InVision"],
    pricing: "Starting at $5,000",
    timeline: "2-8 weeks",
    caseStudy: {
      client: "FinanceFlow",
      result: "95% increase in user satisfaction",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    }
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: "Video Production",
    description: "Professional video content that tells your story and engages your audience across all platforms.",
    features: [
      "Corporate Video Production",
      "Product Demo Videos",
      "Animated Explainer Videos",
      "Social Media Content",
      "Live Streaming Setup",
      "Video SEO Optimization",
      "Multi-Platform Distribution",
      "Analytics & Performance Tracking"
    ],
    technologies: ["Final Cut Pro", "After Effects", "Premiere Pro", "Cinema 4D", "DaVinci Resolve"],
    pricing: "Starting at $3,000",
    timeline: "2-6 weeks",
    caseStudy: {
      client: "EcoMarket",
      result: "280% increase in engagement",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    }
  },
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that amplify your brand and drive measurable results.",
    features: [
      "SEO & Content Marketing",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Email Marketing Automation",
      "Influencer Partnerships",
      "Conversion Rate Optimization",
      "Marketing Analytics",
      "Brand Reputation Management"
    ],
    technologies: ["Google Ads", "Facebook Ads", "HubSpot", "Mailchimp", "SEMrush", "Google Analytics"],
    pricing: "Starting at $2,500/month",
    timeline: "Ongoing campaigns",
    caseStudy: {
      client: "GrowthLab",
      result: "250% increase in qualified leads",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    }
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS & Android Development",
      "React Native Solutions",
      "Flutter Development",
      "App Store Optimization",
      "Push Notification Systems",
      "In-App Purchase Integration",
      "Offline Functionality",
      "App Performance Monitoring"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Mobile"],
    pricing: "Starting at $15,000",
    timeline: "8-16 weeks",
    caseStudy: {
      client: "InnovateTech",
      result: "4.9-star app store rating",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    }
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Brand Strategy",
    description: "Comprehensive brand development that resonates with your audience and sets you apart.",
    features: [
      "Brand Identity Development",
      "Logo Design & Guidelines",
      "Brand Voice & Messaging",
      "Market Positioning Strategy",
      "Competitive Analysis",
      "Brand Guidelines Creation",
      "Marketing Collateral Design",
      "Brand Evolution Planning"
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva", "Brandbook"],
    pricing: "Starting at $6,000",
    timeline: "3-8 weeks",
    caseStudy: {
      client: "StyleHub",
      result: "300% increase in brand recognition",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop"
    }
  },
  {
    icon: <ShoppingCart className="w-12 h-12" />,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms that drive sales and provide seamless shopping experiences.",
    features: [
      "Shopify & WooCommerce Development",
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Order Processing Automation",
      "Customer Account Portals",
      "Mobile Commerce Optimization",
      "E-commerce Analytics"
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "BigCommerce"],
    pricing: "Starting at $10,000",
    timeline: "6-12 weeks",
    caseStudy: {
      client: "EcoMarket",
      result: "420% increase in mobile sales",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    }
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: "SaaS Development",
    description: "Scalable software-as-a-service platforms with advanced features and integrations.",
    features: [
      "Multi-Tenant Architecture",
      "Subscription Management",
      "Advanced Analytics Dashboards",
      "API Development",
      "Third-Party Integrations",
      "User Management Systems",
      "Automated Billing",
      "Scalable Infrastructure"
    ],
    technologies: ["React", "Node.js", "AWS", "Stripe", "PostgreSQL", "Redis"],
    pricing: "Starting at $25,000",
    timeline: "12-24 weeks",
    caseStudy: {
      client: "TechFlow SaaS",
      result: "75% reduction in churn rate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    }
  }
];

const industries = [
  {
    name: "Healthcare & Medical",
    icon: "🏥",
    description: "HIPAA-compliant solutions for medical practices, hospitals, and healthcare startups.",
    projects: ["Patient portals", "Telemedicine platforms", "Medical device interfaces"]
  },
  {
    name: "Financial Services",
    icon: "💰",
    description: "Secure fintech solutions with advanced encryption and regulatory compliance.",
    projects: ["Trading platforms", "Banking apps", "Investment dashboards"]
  },
  {
    name: "E-commerce & Retail",
    icon: "🛍️",
    description: "Comprehensive online retail solutions that drive sales and customer loyalty.",
    projects: ["Online stores", "Marketplace platforms", "Inventory systems"]
  },
  {
    name: "SaaS & Technology",
    icon: "💻",
    description: "Scalable software platforms with advanced features and integrations.",
    projects: ["Business tools", "Analytics platforms", "API services"]
  },
  {
    name: "Education & E-learning",
    icon: "🎓",
    description: "Interactive learning platforms and educational management systems.",
    projects: ["LMS platforms", "Online courses", "Student portals"]
  },
  {
    name: "Real Estate",
    icon: "🏠",
    description: "Property management and real estate marketing solutions.",
    projects: ["Property portals", "CRM systems", "Virtual tours"]
  }
];

const ServicesPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

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
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed animate-fade-in">
              Comprehensive digital solutions designed to elevate your brand, engage your audience, 
              and drive extraordinary business growth across every touchpoint.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">15+</div>
                <div className="text-gray-300">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              What We <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              From strategy to execution, we provide end-to-end digital solutions that transform your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`cursor-pointer transition-all duration-500 ${
                  activeService === index ? 'scale-105' : ''
                }`}
                onClick={() => setActiveService(index)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)`
                }}
              >
                <div className={`p-8 rounded-3xl border transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500' 
                    : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50'
                }`}>
                  <div className="text-purple-400 mb-6 group-hover:text-pink-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <div className="mt-4 text-purple-400 font-semibold">{service.pricing}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{services[activeService].title}</h3>
                    <div className="text-purple-400 font-semibold">{services[activeService].pricing}</div>
                    <div className="text-gray-400 text-sm">{services[activeService].timeline}</div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8">{services[activeService].description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-4">What's Included:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {services[activeService].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 mb-8">
                  <h4 className="text-2xl font-bold mb-6">Success Story</h4>
                  <div className="aspect-video overflow-hidden rounded-xl mb-6">
                    <img 
                      src={services[activeService].caseStudy.image} 
                      alt={services[activeService].caseStudy.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-xl font-semibold mb-2">{services[activeService].caseStudy.client}</h5>
                  <p className="text-purple-400 font-medium">{services[activeService].caseStudy.result}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105">
                  Get Started with {services[activeService].title}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Industries We <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              We bring deep industry expertise to every project, understanding the unique challenges and opportunities in your sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)`
                }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {project}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-32 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              A proven methodology that ensures exceptional results, on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Discovery & Strategy</h3>
              <p className="text-gray-300">We understand your business, goals, and challenges to create a comprehensive strategy.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Design & Development</h3>
              <p className="text-gray-300">Our team creates stunning designs and builds robust solutions using cutting-edge technology.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Launch & Optimize</h3>
              <p className="text-gray-300">We launch your solution and provide ongoing support to ensure continued success.</p>
            </div>
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
            Let's discuss how our comprehensive digital services can help you achieve your goals and take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              Get Started Today
            </button>
            <button className="border-2 border-gray-600 hover:border-gray-400 px-12 py-6 rounded-full font-semibold text-xl transition-all hover:bg-white/10 shadow-2xl">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
