 import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState, type FormEvent } from "react";

export function Dashboard({ onProjectClick }: { onProjectClick: (id: string) => void }) {
  const user = useQuery(api.users.getCurrentUser);
  const userProjects = useQuery(api.projects.getUserProjects);
  const allProjects = useQuery(api.projects.get);
  
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // BEAST MODE FIX: Removed the .filter() that was hiding your projects.
  // Now it just shows whatever is in the database.
  const coreProjects = allProjects || [];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab("home")}
            className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
              activeTab === "home" ? "bg-blue-600/20 text-blue-400 border border-blue-400/20" : "text-zinc-300 hover:text-white hover:bg-white/5"
            }`}
          >
            🏠 Home
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
              activeTab === "projects" ? "bg-blue-600/20 text-blue-400 border border-blue-400/20" : "text-zinc-300 hover:text-white hover:bg-white/5"
            }`}
          >
            📁 Projects
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === "home" && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome, {user?.name || "User"}</h1>
              <p className="text-zinc-400">Your Command Center</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">Total Projects</h3>
                <p className="text-3xl font-bold text-blue-400">{coreProjects ? coreProjects.length : "..."}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <button
                  onClick={() => setShowCreateProject(true)}
                  className="w-full h-full flex items-center justify-center text-green-400 hover:text-green-300"
                >
                  <span className="text-xl font-bold">+ New Project</span>
                </button>
              </div>
            </div>

            {/* Team Feed */}
            <h2 className="text-2xl font-bold text-white mb-6">All Projects Feed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreProjects.map((project: any) => (
                <ProjectCard key={project._id} project={project} onClick={() => onProjectClick(project._id)} />
              ))}
            </div>
          </>
        )}

        {activeTab === "projects" && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white">My Projects</h1>
              <button
                onClick={() => setShowCreateProject(true)}
                className="px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold"
              >
                + Create New
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userProjects?.map((project: any) => (
                <ProjectCard key={project._id} project={project} onClick={() => onProjectClick(project._id)} />
              ))}
              
              {userProjects?.length === 0 && (
                 <p className="text-zinc-500 col-span-full">No personal projects found. Create one!</p>
              )}
            </div>
          </>
        )}

        {showCreateProject && <CreateProjectModal onClose={() => setShowCreateProject(false)} />}
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: any; onClick: () => void }) {
  // SAFETY CHECK: If data is missing, don't crash, just show placeholders
  return (
    <div onClick={onClick} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 cursor-pointer">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title || "Untitled Project"}</h3>
      <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{project.description || "No description"}</p>
      <div className="flex items-center space-x-2 mt-auto pt-4 border-t border-white/5">
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white">
           {project.owner?.name ? project.owner.name[0] : "?"}
        </div>
        <span className="text-xs text-zinc-400">{project.owner?.name || project.authorName || "Unknown"}</span>
      </div>
    </div>
  );
}

function CreateProjectModal({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [components, setComponents] = useState("");
  const createProject = useMutation(api.projects.createProject);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createProject({
      title,
      description,
      components: components.split(","),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#18181b] border border-white/10 rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-white mb-4">New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full bg-white/5 border border-white/10 rounded p-2 text-white" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
          <textarea className="w-full bg-white/5 border border-white/10 rounded p-2 text-white" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
          <input className="w-full bg-white/5 border border-white/10 rounded p-2 text-white" placeholder="Tech Stack (React, AI...)" value={components} onChange={e => setComponents(e.target.value)} />
          <div className="flex gap-2">
            <button type="button" onClick={onClose} className="flex-1 bg-white/10 text-white p-2 rounded">Cancel</button>
            <button type="submit" className="flex-1 bg-blue-600 text-white p-2 rounded">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}