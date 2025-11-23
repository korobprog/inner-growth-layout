import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="cta" className="py-32 px-6 border-t border-border/20 scroll-mt-20">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Готовы начать путь?
            </h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.75' }}>
              Присоединяйтесь к нашим семинарам и откройте для себя путь к внутреннему развитию
            </p>
          </div>
          <Button 
            size="lg" 
            className="text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 rounded-xl font-light tracking-wide shadow-sm hover:shadow-md transition-all duration-500 ease-out"
          >
            Записаться на семинар
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

