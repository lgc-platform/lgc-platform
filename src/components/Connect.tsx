import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

export function Connect() {
  return (
    <footer className="bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">LGC</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Connecting ideas to real-world innovation.
            </p>
          </div>  

          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="flex md:flex-col justify-center md:justify-start gap-4">
              <Link to="/" className="text-zinc-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/#team" className="text-zinc-300 hover:text-white transition-colors">
                Team
              </Link>
              <Link to="/dashboard" className="text-zinc-300 hover:text-white transition-colors">
                Projects
              </Link>
            </div>
          </div>

          <div className="space-y-3 md:text-right text-center">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex md:justify-end justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/lgc-let-s-get-connected-4252243a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-xl transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/80 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/lgc_official2025?igsh=eHZud2xiYWdqenZ1&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-xl transition-all hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/80 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="mailto:lgc.founderiotdev@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-xl transition-all hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white/80 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-zinc-500 text-sm">© 2026 LGC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

