
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced features and seamless user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Stripe"]
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Intuitive dashboard design for a growing SaaS platform with complex data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Figma", "React", "D3.js"]
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and user-friendly mobile banking application with biometric authentication.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tags: ["React Native", "Security", "UX"]
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete brand identity and digital presence for a tech startup.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
    tags: ["Branding", "Design System", "Web"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-purple-400 text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
            View All Projects
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
