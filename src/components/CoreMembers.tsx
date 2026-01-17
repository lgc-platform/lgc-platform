import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, X, ChevronRight, FolderOpen, Users, FileCode } from "lucide-react";

// 👇 DATA SECTION
const members = [
  {
    name: "Harsha Sai",
    role: "Founder, Hardware specialist",
    linkedin: "https://www.linkedin.com/in/harsha-sai-99669836a/",
    image: "/members/harsha.png",
    connections: "500+",
    projects: [] // 0 Projects
  },
  {
    name: "Hemanth Venkat",
    role: "IOT specialist",
    linkedin: "https://www.linkedin.com/in/hemanth-venkat-711882313",
    image: "/members/venkat.jpeg",
    connections: "500+",
    projects: [] // 0 Projects
  },
  {
    name: "Shalini",
    role: "PCB Designer",
    linkedin: "https://www.linkedin.com/in/shalini-hubli-310371345",
    image: "/members/shalini.jpeg",
    connections: "500+",
    projects: [] // 0 Projects
  },
  {
    name: "Yeshwanth Kumar",
    role: "Web Developer",
    linkedin: "https://www.linkedin.com/in/modala-yeshwanth-kumar-016098378",
    image: "/members/yesh.jpeg",
    connections: "500+",
    // 👇 ONLY YESHWANTH HAS THE PROJECT
    projects: ["Building of LGC Website"] 
  },
  {
    name: "Kanishk",
    role: "Software developer",
    linkedin: "https://www.linkedin.com/in/kanishk-kopparapu-239a54349",
    image: "/members/kanishk.png",
    connections: "500+",
    projects: [] // 0 Projects
  },
  {
    name: "Shivani",
    role: "Research specialist",
    linkedin: "https://www.linkedin.com/in/vaikuntam-shivani-586911382",
    image: "/members/shivani.png",
    connections: "500+",
    projects: [] // 0 Projects
  },
  {
    name: "H. Yeshwanth",
    role: "3D designer",
    linkedin: "https://www.linkedin.com/in/yeswanth-hanumanthu-1030b9304",
    image: "/members/yesh anna.jpeg",
    connections: "500+",
    projects: [] // 0 Projects
  }
];

export function CoreMembers() {
  const [selectedMember, setSelectedMember] = useState<typeof members[0] | null>(null);

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 mb-4">
            CORE MEMBERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                
                {/* Photo */}
                <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center mb-4 overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-6">{member.role}</p>

                {/* View Profile Button */}
                <div className="mt-auto w-full">
                  <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white/5 group-hover:bg-white/10 text-zinc-400 group-hover:text-white border border-white/10 rounded-lg transition-all">
                    <span>View Profile</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 👇 PROFILE POPUP MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-900 border border-white/10 rounded-2xl p-0 max-w-md w-full shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header Image Background */}
              <div className="h-24 bg-gradient-to-r from-blue-900/40 to-purple-900/40 w-full absolute top-0 left-0 z-0" />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 text-zinc-400 hover:text-white bg-black/20 hover:bg-black/50 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 px-8 pt-12 pb-8 flex flex-col items-center">
                 {/* Large Avatar */}
                 <div className="w-28 h-28 rounded-full border-4 border-zinc-900 shadow-xl overflow-hidden mb-4">
                   <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                 </div>
                 
                 <h3 className="text-2xl font-bold text-white text-center">{selectedMember.name}</h3>
                 <p className="text-blue-400 font-medium text-center mb-2">{selectedMember.role}</p>

                 {/* 🌟 Connections Badge */}
                 <div className="flex items-center gap-2 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-6">
                    <Users className="w-3 h-3 text-blue-400" />
                    <span className="text-blue-200 text-xs font-semibold">{selectedMember.connections} Connections</span>
                 </div>

                 {/* 📂 PROJECTS FOLDER SECTION */}
                 <div className="w-full bg-zinc-800/50 rounded-xl border border-white/5 overflow-hidden mb-8">
                    {/* Folder Header */}
                    <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                        <FolderOpen className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold text-zinc-300">Projects Folder</span>
                        {/* Dynamic Count: 0 for everyone, 1 for Yeshwanth */}
                        <span className="ml-auto text-xs text-zinc-500 bg-black/20 px-2 py-0.5 rounded-md">
                          {selectedMember.projects.length} files
                        </span>
                    </div>
                    
                    {/* Project List */}
                    <div className="p-4 space-y-3 min-h-[60px] flex flex-col justify-center">
                        {selectedMember.projects.length > 0 ? (
                          selectedMember.projects.map((project, i) => (
                             <div key={i} className="flex items-center gap-3 group">
                                <FileCode className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                                  {project}
                                </span>
                             </div>
                          ))
                        ) : (
                          <div className="text-center text-zinc-600 text-xs italic">
                            No active projects listed
                          </div>
                        )}
                    </div>
                 </div>

                 {/* 🔗 Connect+ Button */}
                 <a 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                 >
                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                      <Linkedin className="w-5 h-5" />
                      Connect+
                    </button>
                 </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}