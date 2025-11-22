import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Globe } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Семинар в Хабаровске",
      date: "12-16 апреля 2026",
      location: "Хабаровск",
      icon: MapPin,
    },
    {
      id: 2,
      title: "Онлайн",
      date: "Любая дата",
      location: "Онлайн",
      icon: Globe,
    },
  ];

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-5">
          <h2 className="font-serif text-4xl md:text-5xl font-thin text-foreground tracking-tight">
            События
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            На наших семинарах мы подробно обсуждаем эти и многие другие темы. Если вам откликаются эти идеи, мы будем рады пригласить вас принять участие. Независимо от того, кто вы — студент, ищущий путь к успеху, или опытный предприниматель со скепсисом и жизненной мудростью — наши материалы будут полезны каждому.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Card
                key={event.id}
                className="group border border-border/60 rounded-xl hover:shadow-lg transition-all duration-300 bg-card/50 p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-muted/40 rounded-lg border border-border/40">
                    <Icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-serif text-2xl font-light text-foreground tracking-tight">
                      {event.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <p className="text-sm font-light">{event.date}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <p className="text-sm font-light">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;


