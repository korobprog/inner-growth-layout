import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="lg"
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 p-0",
        "font-serif font-normal tracking-wide",
        "border-border/60 hover:border-border",
        "bg-background/80 backdrop-blur-sm",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300",
        "flex items-center justify-center",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Прокрутить наверх"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default ScrollToTop;

