import { Search, Linkedin, Instagram, Mail } from "lucide-react";
import { useState } from "react";

export function FooterSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for member:", searchQuery);
  };

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      {/* Top Layer - Find a member block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-6">Find a member</h3>
          <form onSubmit={handleSearch} className="w-full max-w-md">
            <div className="relative flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <Search className="w-5 h-5 text-white/60 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, role, or skill..."
                className="flex-1 bg-transparent text-white placeholder:text-white/40 text-lg focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Layer - Copyright and Social Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Copyright */}
          <div className="text-zinc-400 text-sm">
            <span className="font-semibold text-white">LGC GROUP</span> © {new Date().getFullYear()} All rights reserved.
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/lgc-let-s-get-connected-4252243a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white/80" />
            </a>
            <a
              href="https://www.instagram.com/lgc_official2025?igsh=eHZud2xiYWdqenZ1&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white/80" />
            </a>
            <a
              href="mailto:lgc.founderiotdev@gmail.com"
              className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white/80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}






