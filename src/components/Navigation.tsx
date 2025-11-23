import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "about", label: "О проекте" },
  { id: "philosophy", label: "Философия" },
  { id: "video", label: "Видео" },
  { id: "solution", label: "Решение" },
  { id: "events", label: "События" },
  { id: "cta", label: "Запись" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Определение активной секции через Intersection Observer
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

    // Наблюдаем за всеми секциями
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Также наблюдаем за hero
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Отслеживание скролла для изменения фона
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Учитываем высоту навигации
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/20 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Title */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("hero")}
              className="font-serif text-xl font-light text-foreground tracking-wide hover:opacity-70 transition-colors duration-300"
            >
              Путь к Знанию
            </button>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "text-sm font-light tracking-wide transition-all duration-300 relative",
                    activeSection === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground/30 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 text-foreground hover:opacity-70 transition-colors"
                  aria-label="Открыть меню"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="font-serif text-2xl font-light text-foreground tracking-wide border-b border-border/20 pb-4">
                    Навигация
                  </div>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "text-left text-base font-light tracking-wide transition-all duration-300 py-2",
                        activeSection === item.id
                          ? "text-foreground border-l-2 border-foreground/30 pl-4"
                          : "text-muted-foreground hover:text-foreground pl-4"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

