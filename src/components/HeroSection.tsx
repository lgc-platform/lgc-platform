import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<'group' | 'events'>('group');

  // Lock body scroll when events tab is active
  useEffect(() => {
    if (activeTab === 'events') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeTab]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

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

          {activeTab === 'group' && (
            <>
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

              {/* Glass-morphism Search Bar */}
              <motion.form
                onSubmit={handleSearch}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-full max-w-2xl"
              >
                <div className="relative flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <Search className="w-5 h-5 text-white/60 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search core members, projects, or skills..."
                    className="flex-1 bg-transparent text-white placeholder:text-white/40 text-lg focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 flex-shrink-0"
                  >
                    Search
                  </button>
                </div>
              </motion.form>
            </>
          )}
        </div>
      </div>

      {/* Full Screen Events Overlay */}
      <AnimatePresence>
        {activeTab === 'events' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl overflow-y-auto h-screen"
          >
            {/* Back Button */}
            <button
              onClick={() => setActiveTab('group')}
              className="fixed top-6 left-6 z-[100] p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
              <span className="font-medium">Back</span>
            </button>

            <div className="min-h-screen flex items-center justify-center p-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center max-w-3xl text-center my-20"
              >
                <button
                  onClick={() => setActiveTab('group')}
                  className="text-zinc-400 hover:text-white flex items-center gap-2 mb-4"
                >
                  ← Back
                </button>
                <span className="text-blue-400 font-semibold mb-4 tracking-wider">22.02.2026</span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                  Hardware Workshop
                </h1>
                <div className="relative">
                  <p className="text-xl text-zinc-300 leading-relaxed max-w-[600px] mb-8">
                    This workshop is going to be held on 22.02.2026 which majorly help the students to understand about how the hardware components can be used in day-to-day activities, creating the projects on Hardware equipment's and making real time projects on IOT.
                  </p>
                  <div className="absolute -bottom-2 right-0">
                    <span className="text-lg font-medium text-white/80">- LGC team</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}






