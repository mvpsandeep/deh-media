
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website typically takes 4-6 weeks, while complex web applications or e-commerce platforms can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
  },
  {
    question: "What is your design and development process?",
    answer: "Our process includes six key phases: Discovery & Strategy (1-2 weeks), Design & Prototyping (2-4 weeks), Development & Integration (4-8 weeks), Testing & QA (1-2 weeks), Launch & Deployment (1 week), and ongoing Support & Optimization. Each phase includes client collaboration and feedback cycles."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes! We work with everyone from startups and small businesses to Fortune 500 companies. Our flexible approach allows us to scale our services to match your needs and budget, whether you're launching your first website or need enterprise-level solutions."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Vue.js, Node.js, Python, and various cloud platforms. We also work with popular CMS platforms like WordPress, Shopify, and custom solutions. Our team stays current with the latest technologies to ensure your project uses the best tools available."
  },
  {
    question: "Can you help with digital marketing and SEO?",
    answer: "Absolutely! We offer comprehensive digital marketing services including SEO optimization, content marketing, social media strategy, PPC campaigns, and analytics setup. Our marketing team works closely with our design and development teams to ensure your website is optimized for conversions and search engines."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer various support and maintenance packages to keep your website secure, updated, and performing optimally. This includes regular updates, security monitoring, performance optimization, content updates, and technical support. We can also help with feature additions and improvements over time."
  },
  {
    question: "How much does a project typically cost?",
    answer: "Project costs vary significantly based on scope, complexity, and specific requirements. Simple websites start around $5,000, while complex e-commerce or SaaS platforms can range from $25,000 to $100,000+. We provide detailed proposals after understanding your specific needs and goals."
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Definitely! We can work within your existing brand guidelines and style guides. If you don't have established guidelines, we can help create a comprehensive brand identity system that includes logos, color palettes, typography, and usage guidelines for consistent brand representation across all touchpoints."
  },
  {
    question: "Do you offer mobile app development?",
    answer: "Yes, we develop native iOS and Android applications as well as cross-platform solutions using React Native. Our mobile development process includes UX/UI design, development, testing, App Store optimization, and post-launch support. We ensure your mobile app provides an exceptional user experience across all devices."
  },
  {
    question: "How do you ensure project success and client satisfaction?",
    answer: "We maintain transparent communication throughout the project with regular updates, milestone reviews, and feedback sessions. Our clients have direct access to project managers and can track progress through our project management tools. We also provide detailed documentation and training to ensure you're comfortable managing your new digital assets."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Everything you need to know about working with DEH Media. Can't find what you're looking for? 
            <a href="#contact" className="text-purple-400 hover:text-pink-400 transition-colors ml-2">Get in touch</a>.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-xl font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-purple-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Still Have Questions?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you understand how we can best serve your needs. 
              Schedule a free consultation to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105">
                Schedule a Call
              </button>
              <button className="border-2 border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10">
                Send us a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
