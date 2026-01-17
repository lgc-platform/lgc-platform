import { useQuery } from "convex/react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { ArrowLeft } from "lucide-react";

export function ProjectDetailView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = useQuery(api.projects.getProjectById, { 
    projectId: id as Id<"projects">
  });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <p className="text-zinc-400">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-zinc-300 hover:text-white transition-colors border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          
          {/* Author Badges */}
          {project.owner && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
                <img
                  src={project.owner.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(project.owner.name)}`}
                  alt={project.owner.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-white font-semibold">{project.owner.name}</p>
                  <p className="text-blue-400 text-sm">{project.owner.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Project Description */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Project Description</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Right: Components Used */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Components Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.components.map((component) => (
                <span
                  key={component}
                  className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-xl font-medium border border-blue-400/20 text-sm"
                >
                  {component}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-8">
          {/* Source Code */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Source Code</h2>
            {project.sourceCode ? (
              <div className="bg-zinc-900 rounded-xl p-6 border border-white/5 overflow-x-auto">
                <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">
                  <code>{project.sourceCode}</code>
                </pre>
              </div>
            ) : (
              <div className="bg-zinc-900/50 rounded-xl p-8 border border-white/5 text-center">
                <p className="text-zinc-400 italic">No source code available</p>
              </div>
            )}
          </div>

          {/* Circuit Diagram */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Circuit Diagram</h2>
            {project.circuitDiagram ? (
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/5">
                <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {project.circuitDiagram}
                </p>
              </div>
            ) : (
              <div className="bg-zinc-900/50 rounded-xl p-16 border border-white/5 text-center">
                <div className="text-6xl text-zinc-600 mb-4">⚡</div>
                <p className="text-zinc-400 text-lg">Circuit Image</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}






