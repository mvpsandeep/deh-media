
import { ArrowRight, TrendingUp, Users, ShoppingCart, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const caseStudies = [
  {
    client: "TechFlow SaaS",
    industry: "Software",
    challenge: "Low user engagement and high churn rate",
    solution: "Complete UX redesign and onboarding optimization",
    results: {
      engagement: "+340%",
      churn: "-75%",
      revenue: "+185%"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["UI/UX Design", "SaaS", "Analytics"],
    testimonial: "DEH Media transformed our platform. User engagement skyrocketed and our churn rate dropped dramatically.",
    clientName: "Sarah Chen, CEO"
  },
  {
    client: "EcoMarket",
    industry: "E-commerce",
    challenge: "Poor mobile experience and low conversion rates",
    solution: "Mobile-first redesign with advanced e-commerce features",
    results: {
      mobile: "+280%",
      conversion: "+150%",
      sales: "+420%"
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tags: ["E-commerce", "Mobile", "Conversion"],
    testimonial: "Our mobile sales increased by 420% after the redesign. The ROI was incredible.",
    clientName: "Michael Rodriguez, Founder"
  },
  {
    client: "FinanceFlow",
    industry: "Fintech",
    challenge: "Complex workflows and user confusion",
    solution: "Streamlined dashboard and intuitive user flows",
    results: {
      efficiency: "+200%",
      satisfaction: "+95%",
      adoption: "+160%"
    },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["Fintech", "Dashboard", "UX"],
    testimonial: "The new dashboard is incredibly intuitive. Our users love the simplified workflows.",
    clientName: "David Park, CTO"
  }
];

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Success <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Real results from real clients. See how we've helped businesses transform their digital presence and achieve extraordinary growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`cursor-pointer transition-all duration-500 ${
                activeStudy === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStudy(index)}
              style={{ 
                transform: `translateY(${Math.sin((scrollY + index * 150) * 0.008) * 10}px)` 
              }}
            >
              <div className={`p-8 rounded-3xl border transition-all duration-300 ${
                activeStudy === index 
                  ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500' 
                  : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50'
              }`}>
                <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={study.image} 
                    alt={study.client}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-purple-400 text-sm font-medium mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold mb-4">{study.client}</h3>
                <p className="text-gray-300 mb-6">{study.challenge}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">{caseStudies[activeStudy].client}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">Challenge</h4>
                  <p className="text-gray-300">{caseStudies[activeStudy].challenge}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">Solution</h4>
                  <p className="text-gray-300">{caseStudies[activeStudy].solution}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-2xl">
                  <p className="text-lg italic text-gray-200 mb-4">"{caseStudies[activeStudy].testimonial}"</p>
                  <p className="text-purple-300 font-medium">— {caseStudies[activeStudy].clientName}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {Object.entries(caseStudies[activeStudy].results).map(([key, value], index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{value}</div>
                  <div className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
