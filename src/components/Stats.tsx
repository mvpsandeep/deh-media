
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { 
    icon: <TrendingUp className="w-12 h-12" />, 
    number: "250%", 
    label: "Average ROI Increase",
    description: "Our clients see exceptional returns on their digital investments"
  },
  { 
    icon: <Users className="w-12 h-12" />, 
    number: "500+", 
    label: "Projects Delivered",
    description: "From startups to Fortune 500 companies across 15+ industries"
  },
  { 
    icon: <Award className="w-12 h-12" />, 
    number: "98%", 
    label: "Client Satisfaction",
    description: "Consistently rated 5-star by our clients and industry peers"
  },
  { 
    icon: <Clock className="w-12 h-12" />, 
    number: "72hrs", 
    label: "Average Response Time",
    description: "Quick turnaround times without compromising on quality"
  }
];

const Stats = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-r from-purple-900/10 to-pink-900/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Results That <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Speak</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            We don't just create beautiful designs—we deliver measurable business results that drive growth and exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ 
                transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 15}px)` 
              }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 group">
                <div className="text-purple-400 mb-8 flex justify-center group-hover:text-pink-400 transition-colors group-hover:scale-110 transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-4 text-purple-300">{stat.label}</div>
                <p className="text-gray-400 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
