import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-thin text-foreground tracking-tight">
              Готовы начать путь?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Присоединяйтесь к нашим семинарам и откройте для себя путь к внутреннему развитию
            </p>
          </div>
          <Button 
            size="lg" 
            className="text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 rounded-md font-light tracking-wide shadow-sm hover:shadow-md transition-shadow"
          >
            Записаться на семинар
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

