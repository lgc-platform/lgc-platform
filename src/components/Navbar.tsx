 import React from "react";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export function Navbar() {
  // We use Clerk's direct hook "useUser" for instant feedback
  const { isSignedIn, user } = useUser();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo/LGC-logo1.png" alt="LGC Logo" className="w-10 h-10 object-contain" />
          <span className="text-white font-bold text-xl tracking-wide">LGC</span>
        </div>

        {/* Auth Button */}
        <div className="flex gap-4 items-center">
          {isSignedIn ? (
            <div className="flex items-center gap-3">
               {/* Optional: Show their name */}
               <span className="text-zinc-400 text-sm hidden md:block">
                 Hello, {user?.firstName}
               </span>
               {/* The Avatar Circle */}
               <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-full font-medium border border-white/10 transition-all">
                Join / Login
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
}