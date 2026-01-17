import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export function ProfileDetail({ member, onBack }: { member: any; onBack: () => void; }) {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  
  // Fetch projects dynamically based on the member's name
  const memberProjects = useQuery(api.projects.getProjectsByAuthor, { 
    authorName: member.name 
  });

  return (
    <div className="min-h-screen p-8 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack} 
          className="mb-8 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-zinc-300 border border-white/10 transition-colors flex items-center gap-2"
        >
          ← Back to Team
        </button>
        
        {/* --- PROFILE HEADER (Matches Screenshot Style) --- */}
        <div className="flex flex-col items-center justify-center text-center mb-12 py-10 bg-gradient-to-b from-white/5 to-transparent rounded-3xl border border-white/10">
           {/* Avatar */}
           <img 
             src={member.avatar} 
             className="w-40 h-40 rounded-full border-4 border-[#09090b] shadow-2xl object-cover mb-6" 
           />
           
           {/* Name & Designation */}
           <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">{member.name}</h1>
           <p className="text-zinc-400 text-xl font-medium mb-8">{member.role}</p>

           {/* Badges */}
           <div className="flex gap-4 mb-8">
             <span className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-zinc-300 font-medium hover:bg-white/10 transition-colors">
               {memberProjects ? memberProjects.length : "0"}+ Projects
             </span>
             <span className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-zinc-300 font-medium hover:bg-white/10 transition-colors">
               100+ Connections
             </span>
           </div>

           {/* Connect Button */}
           <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20">
             + Connect
           </button>
        </div>

        {/* --- WORK & PROJECTS FOLDER --- */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Work & Projects</h2>
          <div 
            onClick={() => setIsProjectsOpen(true)} 
            className="bg-[#0c0c0e] border border-white/10 rounded-2xl p-16 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 hover:border-blue-500/30 transition-all group"
          >
            <div className="text-8xl mb-6 group-hover:scale-110 transition-transform text-yellow-500/80 drop-shadow-2xl">📁</div>
            <h3 className="text-2xl font-bold text-white mb-2">View Projects</h3>
            <p className="text-zinc-500">
               {memberProjects?.length ? `${memberProjects.length} Projects Inside` : "Projects coming soon"}
            </p>
            <p className="text-xs text-zinc-600 mt-8 uppercase tracking-widest border border-zinc-800 px-4 py-2 rounded-full group-hover:border-zinc-600 transition-colors">
              Click to Open
            </p>
          </div>
        </div>

        {/* --- MODAL POPUP --- */}
        {isProjectsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsProjectsOpen(false)} />
            <div className="relative bg-[#09090b] border border-white/10 w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
                <h2 className="text-2xl font-bold text-white">Project Gallery</h2>
                <button onClick={() => setIsProjectsOpen(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-400 text-white flex items-center justify-center transition-colors">✕</button>
              </div>
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {memberProjects?.map((project: any) => (
                     <div key={project._id} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all group">
                       <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                       <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                       <div className="flex flex-wrap gap-2">{project.techStack?.map((t: string, i: number) => <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20">{t}</span>)}</div>
                     </div>
                   ))}
                   {(!memberProjects || memberProjects.length === 0) && (
                      <div className="col-span-full text-center py-20 text-zinc-500">
                        <p>No projects uploaded by {member.name} yet.</p>
                      </div>
                   )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Keep this export at the bottom
export default ProfileDetail;