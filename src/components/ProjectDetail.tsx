import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

export function ProjectDetail({ projectId, onBack }: { 
  projectId: string; 
  onBack: () => void; 
}) {
  const project = useQuery(api.projects.getProjectById, { 
    projectId: projectId as Id<"projects"> 
  });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <p className="text-zinc-400">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="mb-4 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-zinc-300 hover:text-white transition-colors border border-white/10"
          >
            ← Back to Dashboard
          </button>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
            
            {project.owner && (
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={project.owner.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(project.owner.name)}&background=3b82f6&color=fff`}
                  alt={project.owner.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-white font-semibold">{project.owner.name}</p>
                  <p className="text-blue-400">{project.owner.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Description (Left) */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
            <p className="text-zinc-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Components Tags (Right) */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Components</h2>
            <div className="flex flex-wrap gap-3">
              {project.components.map((component) => (
                <span
                  key={component}
                  className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-xl font-medium border border-blue-400/20"
                >
                  {component}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Source Code Block */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Source Code</h2>
            {project.sourceCode ? (
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-white/5">
                <pre className="text-sm text-zinc-300 font-mono overflow-x-auto whitespace-pre-wrap">
                  {project.sourceCode}
                </pre>
              </div>
            ) : (
              <p className="text-zinc-400 italic">No source code available</p>
            )}
          </div>

          {/* Circuit Diagram Box */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Circuit Diagram</h2>
            {project.circuitDiagram ? (
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-white/5">
                <p className="text-zinc-300 leading-relaxed">{project.circuitDiagram}</p>
              </div>
            ) : (
              <div className="bg-zinc-900/50 rounded-xl p-8 border border-white/5 text-center">
                <div className="text-6xl text-zinc-600 mb-4">⚡</div>
                <p className="text-zinc-400 italic">No circuit diagram available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
