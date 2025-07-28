import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Us" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Scroll tracking for active nav item only
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sectionOffsets = navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          return el ? { id: item.id, offset: el.offsetTop - 70 } : null;
        })
        .filter(Boolean) as { id: string; offset: number }[];

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollY >= sectionOffsets[i].offset) {
          setActiveSection(sectionOffsets[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold shadow-sm">
              HC
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Himel Computer
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-primary ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-[2px] rounded bg-primary transition-all duration-300 ${
                    activeSection === item.id
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-gray-700 hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-all hover:bg-primary/10 ${
                activeSection === item.id ? "text-primary" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}