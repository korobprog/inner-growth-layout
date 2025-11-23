import { useState, useEffect } from "react";
import { Type, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FontSize = "normal" | "large" | "xlarge";

const FontSizeControl = () => {
  const [fontSize, setFontSize] = useState<FontSize>("normal");

  useEffect(() => {
    // Загружаем сохраненный размер шрифта из localStorage
    const saved = localStorage.getItem("fontSize") as FontSize | null;
    if (saved) {
      setFontSize(saved);
      applyFontSize(saved);
    }
  }, []);

  const applyFontSize = (size: FontSize) => {
    const root = document.documentElement;
    root.classList.remove("font-normal", "font-large", "font-xlarge");
    root.classList.add(`font-${size}`);
    
    // Применяем CSS переменные для размера шрифта
    const sizeMap = {
      normal: "1rem",      // 16px
      large: "1.125rem",   // 18px
      xlarge: "1.25rem",   // 20px
    };
    
    root.style.setProperty("--font-size-base", sizeMap[size]);
    
    // Также применяем к body для базового размера
    document.body.style.fontSize = sizeMap[size];
  };

  const handleFontSizeChange = (size: FontSize) => {
    setFontSize(size);
    applyFontSize(size);
    localStorage.setItem("fontSize", size);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-background/90 backdrop-blur-md border border-border/40 rounded-full px-3 py-2 shadow-lg">
      <Type className="w-4 h-4 text-muted-foreground" />
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 w-8 p-0",
            fontSize === "normal" && "bg-muted"
          )}
          onClick={() => handleFontSizeChange("normal")}
          aria-label="Обычный размер шрифта"
        >
          <Minus className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 w-8 p-0",
            fontSize === "large" && "bg-muted"
          )}
          onClick={() => handleFontSizeChange("large")}
          aria-label="Увеличенный размер шрифта"
        >
          <Type className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 w-8 p-0",
            fontSize === "xlarge" && "bg-muted"
          )}
          onClick={() => handleFontSizeChange("xlarge")}
          aria-label="Очень большой размер шрифта"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default FontSizeControl;

