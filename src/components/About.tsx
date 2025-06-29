
import { Users, Coffee, Heart, Target } from "lucide-react";

const stats = [
  { icon: <Target className="w-8 h-8" />, number: "700+", label: "Projects Completed" },
  { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients" },
  { icon: <Coffee className="w-8 h-8" />, number: "2000+", label: "Cups of Coffee" },
  { icon: <Heart className="w-8 h-8" />, number: "15", label: "Years of Passion" }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DEH Media</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We're a team of passionate designers, developers, and digital strategists who believe in the power of 
              exceptional media experiences. Our mission is to help businesses transform their digital presence 
              and achieve remarkable growth through innovative solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Founded with the vision of bridging creativity and technology, we've worked with 
              startups to Fortune 500 companies, delivering solutions that not only look stunning but perform exceptionally 
              and drive real business results.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
