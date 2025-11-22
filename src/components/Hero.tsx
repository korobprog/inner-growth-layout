import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.png";

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground leading-[1.1]">
                Действуй эффективно
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide leading-relaxed">
                Путь к знанию, а не игра с судьбой
              </p>
            </div>

            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3 tracking-wide font-light">Автор и лектор</p>
              <p className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-wide leading-relaxed">Павел Пугач</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
              <Button 
                size="lg" 
                className="text-base px-10 py-7 rounded-md font-light tracking-wide shadow-sm hover:shadow-md transition-shadow"
                onClick={handleScrollToAbout}
              >
                Узнать подробнее
              </Button>
              <Button variant="outline" size="lg" className="text-base px-10 py-7 rounded-md font-light tracking-wide border-border/60 hover:border-border transition-colors">
                Записаться на семинар
              </Button>
            </div>
          </div>

          {/* Right side - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-muted/20 rounded-2xl blur-2xl opacity-40 -z-10"></div>
              <img
                src={portrait}
                alt="Portrait"
                className="relative rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
