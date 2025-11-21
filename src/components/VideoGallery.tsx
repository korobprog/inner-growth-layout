import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const videos = [
  { id: 1, title: "Введение в осознанную жизнь", thumbnail: "" },
  { id: 2, title: "Путь к внутреннему развитию", thumbnail: "" },
  { id: 3, title: "Знания и мудрость", thumbnail: "" },
];

const VideoGallery = () => {
  return (
    <section className="py-20 px-6 bg-accent/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Видео и лекции
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Смотрите подборку материалов и вдохновляйтесь
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors"></div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {video.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
