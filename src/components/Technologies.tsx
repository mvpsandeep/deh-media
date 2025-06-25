
import { useEffect, useState } from "react";

const technologies = [
  {
    category: "Frontend",
    description: "Modern JavaScript frameworks and libraries for exceptional user experiences",
    techs: [
      { name: "React", logo: "⚛️", description: "Component-based UI development" },
      { name: "Next.js", logo: "▲", description: "Full-stack React framework" },
      { name: "Vue.js", logo: "💚", description: "Progressive JavaScript framework" },
      { name: "TypeScript", logo: "🔷", description: "Type-safe JavaScript development" },
      { name: "Tailwind CSS", logo: "🎨", description: "Utility-first CSS framework" },
      { name: "Framer Motion", logo: "🎭", description: "Animation library for React" }
    ]
  },
  {
    category: "Backend",
    description: "Scalable server-side solutions and robust database management",
    techs: [
      { name: "Node.js", logo: "🟢", description: "JavaScript runtime environment" },
      { name: "Python", logo: "🐍", description: "Versatile programming language" },
      { name: "PostgreSQL", logo: "🐘", description: "Advanced relational database" },
      { name: "MongoDB", logo: "🍃", description: "Flexible document database" },
      { name: "Redis", logo: "🔴", description: "In-memory data structure store" },
      { name: "GraphQL", logo: "🔺", description: "Query language for APIs" }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Modern infrastructure and deployment solutions for scalability",
    techs: [
      { name: "AWS", logo: "☁️", description: "Amazon Web Services cloud platform" },
      { name: "Vercel", logo: "▲", description: "Frontend deployment platform" },
      { name: "Docker", logo: "🐳", description: "Containerization platform" },
      { name: "Kubernetes", logo: "⚙️", description: "Container orchestration" },
      { name: "GitHub Actions", logo: "🔄", description: "CI/CD automation" },
      { name: "Terraform", logo: "🏗️", description: "Infrastructure as code" }
    ]
  },
  {
    category: "Design & Tools",
    description: "Industry-leading design and development tools for superior results",
    techs: [
      { name: "Figma", logo: "🎨", description: "Collaborative design platform" },
      { name: "Adobe CC", logo: "🅰️", description: "Creative Cloud suite" },
      { name: "Sketch", logo: "💎", description: "Digital design toolkit" },
      { name: "Webflow", logo: "🌊", description: "Visual web development" },
      { name: "Notion", logo: "📝", description: "Project management" },
      { name: "Slack", logo: "💬", description: "Team communication" }
    ]
  }
];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState(0);
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
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            We leverage cutting-edge technologies and proven methodologies to build scalable, performant, and future-ready solutions.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {technologies.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">{technologies[activeCategory].category}</h3>
            <p className="text-xl text-gray-300">{technologies[activeCategory].description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies[activeCategory].techs.map((tech, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)`
                }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </h4>
                <p className="text-gray-300 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Always Evolving</h3>
            <p className="text-xl text-gray-300 mb-8">
              Technology moves fast, and so do we. We continuously evaluate and adopt new tools and technologies 
              to ensure our clients always get the most advanced and effective solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300">Up-to-Date Stack</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Learning & Adapting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
