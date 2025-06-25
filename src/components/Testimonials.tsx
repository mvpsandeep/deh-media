
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow SaaS",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100&h=100&fit=crop&crop=face",
    content: "DEH Media completely transformed our platform. The user engagement increased by 340% and our churn rate dropped by 75%. Their strategic approach and execution were flawless.",
    rating: 5,
    project: "SaaS Platform Redesign"
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, EcoMarket",
    company: "EcoMarket",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "The mobile-first redesign boosted our mobile sales by 420%. DEH Media's attention to detail and understanding of e-commerce best practices is exceptional.",
    rating: 5,
    project: "E-commerce Platform Development"
  },
  {
    name: "David Park",
    role: "CTO, FinanceFlow",
    company: "FinanceFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Our complex workflows became intuitive overnight. User satisfaction increased by 95% and feature adoption by 160%. Outstanding work from the entire team.",
    rating: 5,
    project: "Fintech Dashboard Design"
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director, GrowthLab",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "DEH Media's digital marketing strategy doubled our lead generation and improved our conversion rate by 180%. They truly understand growth marketing.",
    rating: 5,
    project: "Digital Marketing Campaign"
  },
  {
    name: "James Wilson",
    role: "Product Manager, InnovateTech",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    content: "The mobile app they developed for us has a 4.9-star rating on both App Store and Google Play. The user experience is phenomenal and performance is lightning-fast.",
    rating: 5,
    project: "Mobile App Development"
  },
  {
    name: "Amanda Garcia",
    role: "Brand Manager, StyleHub",
    company: "StyleHub",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "Our brand transformation was incredible. Website traffic increased by 300% and brand recognition improved dramatically. DEH Media exceeded all expectations.",
    rating: 5,
    project: "Brand Identity & Website"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            What Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with DEH Media.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700 text-center relative"
            style={{ 
              transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)` 
            }}
          >
            <div className="absolute top-8 left-8 text-6xl text-purple-400/20">"</div>
            <div className="absolute bottom-8 right-8 text-6xl text-purple-400/20 rotate-180">"</div>
            
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8 font-light">
                {testimonials[currentIndex].content}
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-purple-500"
              />
              <div className="text-left">
                <div className="text-xl font-bold">{testimonials[currentIndex].name}</div>
                <div className="text-purple-400">{testimonials[currentIndex].role}</div>
                <div className="text-gray-400 text-sm">{testimonials[currentIndex].company}</div>
                <div className="text-gray-500 text-sm">{testimonials[currentIndex].project}</div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-purple-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                index === currentIndex 
                  ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500 scale-105' 
                  : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50 hover:scale-102'
              }`}
              onClick={() => setCurrentIndex(index)}
              style={{ 
                transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 5}px)` 
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400 mb-2">250%</div>
            <div className="text-gray-300">Average ROI Increase</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
