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
    <section id="events" className="py-32 px-6 bg-gradient-to-b from-muted/5 via-background to-muted/10 border-t border-border/20 scroll-mt-20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-5">
          <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            События
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.75' }}>
            На наших семинарах мы подробно обсуждаем эти и многие другие темы. Если вам откликаются эти идеи, мы будем рады пригласить вас принять участие. Независимо от того, кто вы — студент, ищущий путь к успеху, или опытный предприниматель со скепсисом и жизненной мудростью — наши материалы будут полезны каждому.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Card
                key={event.id}
                className="group border border-border/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 ease-out bg-card/50 p-8"
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


