
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
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
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Ready to transform your digital presence? We're here to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  Whether you're looking to launch a new project, enhance your existing digital presence, 
                  or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-300 text-lg">hello@dehmedia.com</p>
                    <p className="text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-300 text-lg">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Our Studio</h3>
                    <p className="text-gray-300 text-lg">123 Creative Avenue<br />Digital District, NY 10001</p>
                    <p className="text-gray-400">Open by appointment</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                    <p className="text-gray-300 text-lg">Available on our website</p>
                    <p className="text-gray-400">Real-time support during business hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-8">Start a Conversation</h3>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium mb-3">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium mb-3">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-lg font-medium mb-3">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium mb-3">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium mb-3">Project Type</label>
                  <select className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-lg">
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Mobile App</option>
                    <option>Branding & Identity</option>
                    <option>Digital Marketing</option>
                    <option>Video Production</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-medium mb-3">Budget Range</label>
                  <select className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-lg">
                    <option>$5K - $10K</option>
                    <option>$10K - $25K</option>
                    <option>$25K - $50K</option>
                    <option>$50K - $100K</option>
                    <option>$100K+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-lg font-medium mb-3">Tell us about your project</label>
                  <textarea 
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none text-lg"
                    placeholder="Describe your vision, goals, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 rounded-xl font-semibold text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
                >
                  Send Message
                  <Send size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Start Your <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Digital Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Every great project starts with a conversation. Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              Schedule a Call
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

export default ContactPage;
