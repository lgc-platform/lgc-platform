import React from "react";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Kiwistron",
    description: "Collaboration with the hackathons and events.",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Ashok Leyland",
    description: "Collaborated with hardware and industrial projects.",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    name: "Intrino",
    description: "Collaborated for hands-on experience in system integration.",
    gradient: "from-emerald-500/20 to-teal-500/20"
  }
];

export function Collaborations() {
  return (
    <section className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
          COMPANIES COLLABORATED
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            // 1. Initial State: Invisible and pushed to the side
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} 
            
            // 2. When in View: Visible and centered
            whileInView={{ opacity: 1, x: 0 }}
            
            // 3. THIS IS THE FIX: 'once: false' makes it animate EVERY time you scroll
            viewport={{ once: false, amount: 0.4 }}
            
            transition={{ duration: 0.8, ease: "easeOut" }}
            
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* The Company Card */}
            <div className="relative group w-full max-w-2xl">
              <div className={`absolute -inset-1 bg-gradient-to-r ${company.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`} />
              
              <div className="relative px-8 py-10 bg-zinc-900 ring-1 ring-white/10 rounded-xl flex flex-col gap-4">
                <div className="flex items-center gap-4">
                   {/* Logo Circle */}
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                     <span className="text-xl font-bold text-white">{company.name[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {company.name}
                  </h3>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed pl-16">
                  {company.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}