import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";
import portrait from "@/assets/portrait.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight">
                Действуй эффективно
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
                Путь к знанию, а не игра с судьбой
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-1">Автор и лектор</p>
              <p className="text-lg font-medium text-foreground">[Имя]</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="lg" className="text-base px-8 py-6 rounded-lg">
                Узнать подробнее
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6 rounded-lg">
                Записаться на семинар
              </Button>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
              <div className="p-3 bg-card border border-border rounded-lg">
                <QrCode className="w-16 h-16 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Сканируйте QR-код для<br />быстрой связи
              </p>
            </div>
          </div>

          {/* Right side - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-3xl blur-3xl opacity-30"></div>
              <img
                src={portrait}
                alt="Portrait"
                className="relative rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
