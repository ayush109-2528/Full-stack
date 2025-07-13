import { Navbar } from "../components/Navbar";
import { Starbackground } from "../components/StartBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <Starbackground />
      {/* NavBar */}
      <Navbar />
      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};
