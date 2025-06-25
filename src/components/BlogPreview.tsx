import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const blogPosts = [
  {
    title: "The Future of Web Design: AI-Powered User Experiences",
    excerpt: "Explore how artificial intelligence is revolutionizing web design and creating more personalized, intuitive user experiences.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    author: "Elena Rodriguez",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Design",
    tags: ["AI", "UX Design", "Innovation"]
  },
  {
    title: "E-commerce Conversion Optimization: 10 Proven Strategies",
    excerpt: "Discover the most effective techniques to boost your e-commerce conversion rates and increase revenue.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    author: "Marcus Johnson",
    date: "December 12, 2024",
    readTime: "12 min read",
    category: "Marketing",
    tags: ["E-commerce", "Conversion", "Strategy"]
  },
  {
    title: "Building Scalable SaaS Applications with Modern Tech Stack",
    excerpt: "A comprehensive guide to building robust, scalable SaaS applications using React, Node.js, and cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    author: "David Chen",
    date: "December 10, 2024",
    readTime: "15 min read",
    category: "Development",
    tags: ["SaaS", "React", "Architecture"]
  },
  {
    title: "Mobile-First Design: Why It's Essential in 2024",
    excerpt: "Understanding the critical importance of mobile-first design and how to implement it effectively in your projects.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    author: "Sophie Williams",
    date: "December 8, 2024",
    readTime: "10 min read",
    category: "Design",
    tags: ["Mobile", "Responsive", "UX"]
  }
];

const BlogPreview = () => {
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
            Latest <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Stay ahead of the curve with our latest thoughts on design, development, and digital strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Featured Post */}
          <div 
            className="md:col-span-2 group cursor-pointer"
            style={{ 
              transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)` 
            }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:w-1/2 aspect-video md:aspect-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-400 text-sm">Featured</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-purple-300 transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-purple-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Posts */}
          {blogPosts.slice(1).map((post, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              style={{ 
                transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 10}px)` 
              }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-full font-semibold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
            View All Articles
            <ArrowRight className="inline-block ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
