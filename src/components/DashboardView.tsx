import { Dashboard } from "./Dashboard";

export function DashboardView() {
  // This connects the view to your main Dashboard logic
  return (
    <div className="pt-16 w-full"> 
      {/* pt-16 ensures it doesn't hide behind the top Navbar */}
      <Dashboard onProjectClick={(id) => console.log("Clicked:", id)} />
    </div>
  );
}