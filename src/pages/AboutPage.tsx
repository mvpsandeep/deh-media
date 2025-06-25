
import { Award, Users, Coffee, Heart, Target, Lightbulb, Zap, Trophy, Globe, Clock, Star, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const stats = [
  { icon: <Award className="w-12 h-12" />, number: "500+", label: "Projects Completed", description: "Successfully delivered across 15+ industries" },
  { icon: <Users className="w-12 h-12" />, number: "200+", label: "Happy Clients", description: "From startups to Fortune 500 companies" },
  { icon: <Coffee className="w-12 h-12" />, number: "5000+", label: "Cups of Coffee", description: "Fueling our creative and development processes" },
  { icon: <Heart className="w-12 h-12" />, number: "10+", label: "Years of Passion", description: "A decade of digital innovation and excellence" }
];

const values = [
  {
    icon: <Target className="w-16 h-16" />,
    title: "Precision",
    description: "Every pixel, every line of code, every creative decision is crafted with meticulous attention to detail and strategic purpose."
  },
  {
    icon: <Lightbulb className="w-16 h-16" />,
    title: "Innovation",
    description: "We stay ahead of the curve, embracing new technologies and creative approaches to solve complex challenges with fresh perspectives."
  },
  {
    icon: <Zap className="w-16 h-16" />,
    title: "Impact",
    description: "Our work doesn't just look good—it drives real results, creates meaningful connections, and generates measurable business value."
  },
  {
    icon: <Trophy className="w-16 h-16" />,
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in everything we do, from initial concept to final implementation and beyond."
  }
];

const timeline = [
  {
    year: "2014",
    title: "The Beginning",
    description: "Founded by three passionate digital enthusiasts with a vision to bridge creativity and technology.",
    milestone: "First 10 clients served"
  },
  {
    year: "2016",
    title: "Growing Strong",
    description: "Expanded our team and services, establishing ourselves as a trusted partner for innovative businesses.",
    milestone: "50+ projects completed"
  },
  {
    year: "2018",
    title: "Industry Recognition",
    description: "Received our first industry awards and recognition for outstanding digital work and client results.",
    milestone: "100+ satisfied clients"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Helped businesses navigate the digital shift during challenging times, proving our adaptability and expertise.",
    milestone: "Remote-first operations"
  },
  {
    year: "2022",
    title: "Scaling Excellence",
    description: "Doubled our team size and expanded into new markets while maintaining our commitment to quality.",
    milestone: "300+ projects delivered"
  },
  {
    year: "2024",
    title: "Future Forward",
    description: "Leading the industry with AI-powered solutions and next-generation digital experiences.",
    milestone: "500+ projects & counting"
  }
];

const team = [
  {
    name: "David Chen",
    role: "Creative Director & Co-Founder",
    bio: "15+ years of experience in digital design and brand strategy. Previously led design teams at Adobe and Spotify. Passionate about creating experiences that matter.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    specialties: ["Brand Strategy", "UI/UX Design", "Creative Direction", "Team Leadership"],
    achievements: ["Adobe Design Award Winner", "Webby Award Recipient", "Speaker at 20+ conferences"]
  },
  {
    name: "Elena Rodriguez",
    role: "Technical Director & Co-Founder",
    bio: "Full-stack developer with expertise in scalable web applications. Former senior engineer at Google and Meta. Champions modern development practices.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face",
    specialties: ["Full-Stack Development", "System Architecture", "DevOps", "Technical Leadership"],
    achievements: ["Google Cloud Certified", "Open Source Contributor", "Tech Women Leader Award"]
  },
  {
    name: "Marcus Johnson",
    role: "Strategy Director & Co-Founder",
    bio: "Digital marketing strategist with a track record of driving 300%+ growth for B2B and B2C companies. Expert in data-driven marketing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    specialties: ["Digital Strategy", "Growth Marketing", "Analytics", "Business Development"],
    achievements: ["Marketing Excellence Award", "Growth Hacker of the Year", "Forbes 30 Under 30"]
  }
];

const awards = [
  {
    name: "Webby Awards",
    year: "2023",
    category: "Best User Experience",
    project: "TechFlow SaaS Platform"
  },
  {
    name: "CSS Design Awards",
    year: "2023",
    category: "Site of the Day",
    project: "EcoMarket E-commerce"
  },
  {
    name: "Awwwards",
    year: "2022",
    category: "Developer Award",
    project: "FinanceFlow Dashboard"
  },
  {
    name: "FWA",
    year: "2022",
    category: "Site of the Month",
    project: "StyleHub Brand Identity"
  }
];

const AboutPage = () => {
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
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DEH Media</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed animate-fade-in">
              We're not just a media company—we're digital storytellers, brand architects, and growth catalysts 
              dedicated to transforming businesses through exceptional digital experiences.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">25+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-300">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded in 2014 with a vision to bridge the gap between creativity and technology, DEH Media has been at the forefront of digital innovation for over a decade. We believe that great design isn't just about aesthetics—it's about creating experiences that resonate, engage, and inspire action.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From humble beginnings as a small creative studio, we've grown into a full-service digital agency that partners with brands of all sizes—from ambitious startups to Fortune 500 companies. Our team of designers, developers, strategists, and storytellers work collaboratively to bring your vision to life.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                What sets us apart is our commitment to understanding your unique challenges and opportunities. We don't just create beautiful designs—we craft strategic solutions that drive real business results and create lasting impact in your industry.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Today, we're proud to have delivered over 500 successful projects, maintained a 98% client retention rate, and received numerous industry awards for our innovative work. But what we're most proud of is the lasting relationships we've built and the success stories we've helped create.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  style={{ 
                    transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 15}px)` 
                  }}
                >
                  <div className="text-purple-400 mb-6 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-4">{stat.number}</div>
                  <div className="text-gray-300 font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                A decade of growth, innovation, and success milestones.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{item.year}</div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="text-sm text-purple-300 font-medium">{item.milestone}</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full border-4 border-gray-900 z-10">
                    <div className="text-white font-bold">{item.year.slice(-2)}</div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl border border-gray-600 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin((scrollY + index * 150) * 0.008) * 10}px)`
                }}
              >
                <div className="text-purple-400 mb-6 flex justify-center group-hover:text-pink-400 transition-colors group-hover:scale-110 transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-transparent p-12 rounded-3xl">
              <h3 className="text-4xl font-bold mb-6 text-purple-300">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To empower businesses with exceptional digital experiences that drive growth, engage audiences, and create lasting value. We're committed to being the trusted partner that transforms your digital vision into reality.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/20 to-transparent p-12 rounded-3xl">
              <h3 className="text-4xl font-bold mb-6 text-pink-300">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To be the world's most innovative digital agency, setting new standards for creativity, technology, and client success. We envision a future where every digital experience we create makes a meaningful difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Leadership <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Meet the visionaries behind DEH Media's success and innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)`
                }}
              >
                <div className="text-center mb-6">
                  <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
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
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-300 mb-3">Achievements</h4>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
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
                <p className="text-gray-300">We embrace new technologies and creative approaches to solve complex challenges and stay ahead of industry trends.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-pink-300">Collaborative Spirit</h4>
                <p className="text-gray-300">We believe the best results come from diverse perspectives working together towards a common goal.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-blue-300">Continuous Learning</h4>
                <p className="text-gray-300">We invest in our team's growth and encourage exploration of new skills and technologies.</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team of 25+ passionate professionals who are dedicated to creating digital experiences 
              that make a real difference in the world. We're always looking for talented individuals who share our values.
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Awards & <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Our work has been recognized by leading industry organizations and publications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)`
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{award.name}</h3>
                <div className="text-purple-400 font-medium mb-2">{award.year}</div>
                <div className="text-gray-300 mb-2">{award.category}</div>
                <div className="text-gray-400 text-sm">{award.project}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Start Your <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the DEH Media difference. Let's create something extraordinary together and transform your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              Start Your Project
            </button>
            <button className="border-2 border-gray-600 hover:border-gray-400 px-12 py-6 rounded-full font-semibold text-xl transition-all hover:bg-white/10 shadow-2xl">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
