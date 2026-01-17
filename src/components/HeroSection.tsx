import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react"; // Kept just in case, though search is gone

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<'group' | 'events'>('group');
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Blue glowing orb background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-blue-500/20 blur-[100px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Tabs - Higher z-index to stay above overlay */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-50"
          >
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveTab('group')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'group'
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/90 border border-white/10 hover:bg-white/10'
                }`}
              >
                LGC GROUP
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'events'
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/90 border border-white/10 hover:bg-white/10'
                }`}
              >
                EVENTS
              </button>
            </div>
          </motion.div>

          {/* GROUP VIEW - SEARCH BAR REMOVED */}
          {activeTab === 'group' && (
            <div className="flex flex-col items-center">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  LET'S GET CONNECTED!
                </span>
              </motion.h1>

              {/* SPACE WHERE SEARCH BAR WAS - NOW CLEAN */}
            </div>
          )}

          {/* EVENTS VIEW */}
          {activeTab === 'events' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-4xl text-left"
            >
               {/* BACK BUTTON */}
               <button 
                onClick={() => setActiveTab("group")} 
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Back to Main
              </button>

              <h2 className="text-4xl font-bold text-white mb-6">Upcoming Events</h2>
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                <p className="text-zinc-400">No upcoming events scheduled at the moment. Stay tuned!</p>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}