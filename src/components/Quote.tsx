import { cn } from "@/lib/utils";

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

const Quote = ({ children, author, className }: QuoteProps) => {
  return (
    <blockquote
      className={cn(
        "relative my-12 pl-8 pr-4 py-6 border-l-2 border-foreground/20 bg-muted/10 rounded-r-xl",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/10 rounded-l-full" />
      <p className="font-serif text-lg md:text-xl font-light text-foreground leading-relaxed italic">
        {children}
      </p>
      {author && (
        <footer className="mt-4 text-sm text-muted-foreground font-light">
          — {author}
        </footer>
      )}
    </blockquote>
  );
};

export default Quote;

