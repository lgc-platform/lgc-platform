import { useState } from "react";
import ProfileDetail from "./ProfileDetail";

// 1. YOUR EXACT TEAM LIST
const CORE_TEAM = [
  { 
    id: "1", 
    name: "Harsha", 
    role: "Founder, Hardware Specialist", 
    avatar: "/members/harsha.png" 
  },
  { 
    id: "2", 
    name: "Hemanth Venkat", 
    role: "IOT Specialist", 
    avatar: "/members/venkat.jpeg" 
  },
  { 
    id: "3", 
    name: "Shalini", 
    role: "PCB Designer", 
    avatar: "/members/shalini.jpeg" 
  },
  { 
    id: "4", 
    name: "Yeshwanth Kumar", 
    role: "Web Developer", 
    avatar: "/members/yesh.jpeg" 
  },
  { 
    id: "5", 
    name: "Kanishk", 
    role: "Software Developer", 
    avatar: "/members/kanishk.png" 
  },
  { 
    id: "6", 
    name: "Shivani", 
    role: "Research Specialist", 
    avatar: "/members/shivani.png" 
  },
  { 
    id: "7", 
    name: "H. Yeshwanth", 
    role: "3D Designer", 
    avatar: "/members/yesh anna.jpeg" 
  },
];

export function CoreMembers() {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  // IF SELECTED -> SHOW THE PROFILE VIEW
  if (selectedMember) {
    return (
      <ProfileDetail 
        member={selectedMember} 
        onBack={() => setSelectedMember(null)} 
      />
    );
  }

  // TEAM GRID VIEW
  return (
    <section className="relative py-24 bg-[#09090b] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Meet the Core Team
          </h2>
          <p className="text-zinc-400 text-lg">
            The innovators and builders behind the LGC Platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {CORE_TEAM.map((user) => (
            <div 
              key={user.id}
              onClick={() => setSelectedMember(user)} 
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 w-full max-w-[280px]"
            >
              {/* Image Area */}
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  // LOGIC BREAKDOWN:
                  // 1. Everyone gets 'scale-110' (Zoom in 10% to fill gaps)
                  // 2. Everyone gets 'object-top' (Align hair to top line)
                  
                  // SPECIAL ADJUSTMENTS:
                  // ID 2 (Hemanth): Add '-translate-y-4'. This LIFTS the image up physically, pulling chin off text.
                  // ID 7 (H. Yeshwanth): Add 'scale-125'. Extra zoom for him.
                  
                  className={`w-full h-full object-cover object-top transition-transform duration-700
                    ${user.id === "2" ? "scale-110 -translate-y-4 group-hover:scale-125" : ""} 
                    ${user.id === "7" ? "scale-125 group-hover:scale-135" : ""}
                    ${!["2", "7"].includes(user.id) ? "scale-110 group-hover:scale-125" : ""}
                  `}
                />
              </div>
              
              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white mb-1">{user.name}</h3>
                <p className="text-blue-400 text-xs font-medium uppercase tracking-wider">{user.role}</p>
                <div className="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-500 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
