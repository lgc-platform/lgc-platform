import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { DashboardView } from "./components/DashboardView";
import { ProjectDetailView } from "./components/ProjectDetailView";
import { ProfileDetailView } from "./components/ProfileDetailView";
import { ProjectDetail } from "./components/ProjectDetail";
import { ProfileDetail } from "./components/ProfileDetail";
import { LoginModal } from "./components/LoginModal";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { CoreMembers } from "./components/CoreMembers";
import { LatestInsights } from "./components/LatestInsights";
import { FooterSection } from "./components/FooterSection";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";

// Public Page Component
function PublicPage() {
  return (
    <>
      <HeroSection />
      <CoreMembers />
      <LatestInsights />
      <FooterSection />
    </>
  );
}

// Main App Router Component
function AppRouter() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      
      <main className="pt-16 min-h-screen bg-zinc-950">
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/project/:id" element={<ProjectDetailView />} />
          <Route path="/profile/:id" element={<ProfileDetailView />} />
        </Routes>
      </main>

      {isLoginOpen && (
        <LoginModal 
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
      )}
      
      <Toaster theme="dark" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
