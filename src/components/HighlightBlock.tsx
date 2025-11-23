import { cn } from "@/lib/utils";

interface HighlightBlockProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

const HighlightBlock = ({ children, variant = "default", className }: HighlightBlockProps) => {
  const variants = {
    default: "bg-muted/10 border-border/30",
    accent: "bg-accent/5 border-accent-foreground/20",
    muted: "bg-muted/5 border-border/20",
  };

  return (
    <div
      className={cn(
        "my-8 p-6 md:p-8 rounded-xl border shadow-sm",
        variants[variant],
        className
      )}
    >
      <div className="text-foreground font-light leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.75' }}>
        {children}
      </div>
    </div>
  );
};

export default HighlightBlock;

