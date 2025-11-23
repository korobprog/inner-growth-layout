import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Главная" },
  { id: "about", label: "О проекте" },
  { id: "philosophy", label: "Философия" },
  { id: "video", label: "Видео" },
  { id: "solution", label: "Решение" },
  { id: "events", label: "События" },
  { id: "cta", label: "Запись" },
];

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Определение активной секции и прогресса скролла
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Инициализация

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center gap-4">
        {/* Progress line */}
        <div className="relative w-0.5 h-64 bg-border/30 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-foreground/20 transition-all duration-300 ease-out rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Navigation dots */}
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="group relative flex items-center justify-center"
              aria-label={item.label}
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300 ease-out",
                  activeSection === item.id
                    ? "bg-foreground scale-125"
                    : "bg-border/40 group-hover:bg-foreground/60 group-hover:scale-110"
                )}
              />
              {/* Tooltip on hover */}
              <span className="absolute right-6 px-3 py-1.5 text-xs font-light text-foreground bg-background/90 backdrop-blur-sm border border-border/40 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-sm">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideNavigation;

