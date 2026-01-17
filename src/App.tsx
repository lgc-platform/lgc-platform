import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Collaborations } from "./components/Collaborations";
import { CoreMembers } from "./components/CoreMembers";
import { LatestInsights } from "./components/LatestInsights"; // <--- Restored
import { FooterSection } from "./components/FooterSection";   // <--- Restored

function App() {
  return (
    <div className="bg-[#09090b] min-h-screen text-white">
      <Navbar />
      <HeroSection />
      
      {/* Companies Section */}
      <Collaborations />
      
      {/* Team Section */}
      <CoreMembers />

      {/* Restored Sections */}
      <LatestInsights />
      <FooterSection />
    </div>
  );
}

export default App;