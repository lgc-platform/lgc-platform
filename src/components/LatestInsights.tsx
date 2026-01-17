import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
  gallery?: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "Road to Microsoft Imagine Cup 2026",
    date: "Jan 5, 2026",
    category: "Hackathon",
    excerpt: "7 minds, 1 mission. How we are combining ESP32 and React to revolutionize elderly care with SeniorSync.",
    image: "/members/blog/imagine.png",
    content: `Our journey to the Microsoft Imagine Cup 2026 is driven by a singular vision: to revolutionize elderly care through technology. SeniorSync is not just a project; it's a commitment to improving the lives of our seniors.

By combining the power of ESP32 microcontrollers for robust IoT connectivity and React for a seamless user interface, we are building a comprehensive ecosystem that monitors health vitals, detects falls, and ensures timely medication adherence.

The team, comprising 7 dedicated members, has been working tirelessly to integrate hardware sensors with a cloud-based platform. We are leveraging real-time data analytics to provide caregivers with actionable insights, ensuring peace of mind for families.

Stay tuned as we document our progress, challenges, and breakthroughs on this exciting road to the Imagine Cup!`,
    gallery: [
      "/members/blog/gallery/1.jpg"
    ]
  },
];

export function LatestInsights() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-zinc-400">
            Stay updated with our latest stories and updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={index}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden bg-zinc-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225'%3E%3Crect fill='%23374151' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='16'%3E16:9 Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-400/20">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <button
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-[#1A1A1A] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl pointer-events-auto relative">
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white/80 hover:text-white rounded-full backdrop-blur-md transition-all z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Image */}
                <div className="aspect-video w-full bg-zinc-800 relative">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225'%3E%3Crect fill='%23374151' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='16'%3E16:9 Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A] to-transparent h-32" />
                </div>

                {/* Modal Body */}
                <div className="p-8 -mt-12 relative">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                        {selectedPost.category}
                      </span>
                      <span className="text-zinc-400 text-sm">
                        {selectedPost.date}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      {selectedPost.title}
                    </h2>
                    
                    <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                      {selectedPost.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Gallery Section */}
                    {selectedPost.gallery && selectedPost.gallery.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedPost.gallery.map((img, idx) => (
                            <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-zinc-800 border border-white/10">
                              <img 
                                src={img} 
                                alt={`Gallery image ${idx + 1}`} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}


