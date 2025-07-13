import { cn } from "../lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Porjects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setscroll] = useState(false);
  //   const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setscroll(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ayush</span> Portfolio
          </span>
        </a>

        {/* desktop version */}
        <div>
          {navItems.map((item, key) => {
            <a key={key} href={item.href}>
              {item.name}
            </a>;
          })}
        </div>
      </div>
    </nav>
  );
};
