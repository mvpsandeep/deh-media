
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    name: "David Chen",
    role: "Creative Director & Co-Founder",
    bio: "15+ years of experience in digital design and brand strategy. Previously led design teams at Adobe and Spotify.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    specialties: ["Brand Strategy", "UI/UX Design", "Creative Direction"],
    email: "david@dehmedia.com"
  },
  {
    name: "Elena Rodriguez",
    role: "Technical Director & Co-Founder",
    bio: "Full-stack developer with expertise in scalable web applications. Former senior engineer at Google and Meta.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face",
    specialties: ["Full-Stack Development", "System Architecture", "DevOps"],
    email: "elena@dehmedia.com"
  },
  {
    name: "Marcus Johnson",
    role: "Strategy Director & Co-Founder",
    bio: "Digital marketing strategist with a track record of driving 300%+ growth for B2B and B2C companies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    specialties: ["Digital Strategy", "Growth Marketing", "Analytics"],
    email: "marcus@dehmedia.com"
  },
  {
    name: "Sophie Williams",
    role: "Senior UX Designer",
    bio: "User experience specialist focused on creating intuitive and accessible digital experiences for all users.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    specialties: ["User Research", "Interaction Design", "Accessibility"],
    email: "sophie@dehmedia.com"
  },
  {
    name: "Alex Kim",
    role: "Lead Developer",
    bio: "Frontend specialist with expertise in React, Vue, and modern JavaScript frameworks. Passionate about performance optimization.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
    specialties: ["React/Vue.js", "Performance", "Mobile Development"],
    email: "alex@dehmedia.com"
  },
  {
    name: "Maya Patel",
    role: "Content Strategist",
    bio: "Content marketing expert who creates compelling narratives that drive engagement and conversions across all channels.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    specialties: ["Content Strategy", "SEO", "Brand Voice"],
    email: "maya@dehmedia.com"
  }
];

const Team = () => {
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
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            A diverse group of creatives, strategists, and technologists united by our passion for creating 
            exceptional digital experiences that drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)`
              }}
            >
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700 text-sm rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Company Culture */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-8">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Culture</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-purple-300">Innovation First</h4>
              <p className="text-gray-300">We embrace new technologies and creative approaches to solve complex challenges.</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-pink-300">Collaborative Spirit</h4>
              <p className="text-gray-300">We believe the best results come from diverse perspectives working together.</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-blue-300">Continuous Learning</h4>
              <p className="text-gray-300">We invest in our team's growth and stay ahead of industry trends.</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our team of passionate professionals who are dedicated to creating digital experiences 
            that make a real difference in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
