import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Импорт видео файлов
import video1 from "@/assets/video/video_2025-11-22_16-04-22.mp4";
import video2 from "@/assets/video/video_2025-11-22_16-04-42.mp4";
import video3 from "@/assets/video/video_2025-11-22_16-04-46.mp4";
import video4 from "@/assets/video/video_2025-11-22_16-04-49.mp4";
import video5 from "@/assets/video/video_2025-11-22_16-04-53.mp4";
import video6 from "@/assets/video/video_2025-11-22_16-04-56.mp4";
import video7 from "@/assets/video/video_2025-11-22_16-04-59.mp4";
import video8 from "@/assets/video/video_2025-11-22_16-05-03.mp4";
import video9 from "@/assets/video/video_2025-11-22_16-05-06.mp4";
import video10 from "@/assets/video/video_2025-11-22_16-05-09.mp4";
import video11 from "@/assets/video/video_2025-11-22_16-05-13.mp4";

interface Video {
  id: number;
  title: string;
  url: string;
}

const videos: Video[] = [
  { 
    id: 1, 
    title: "Лекция о внутреннем развитии", 
    url: video1
  },
  { 
    id: 2, 
    title: "Путь к осознанной жизни", 
    url: video2
  },
  { 
    id: 3, 
    title: "Знания и мудрость", 
    url: video3
  },
  { 
    id: 4, 
    title: "Духовное развитие", 
    url: video4
  },
  { 
    id: 5, 
    title: "Внутренний рост", 
    url: video5
  },
  { 
    id: 6, 
    title: "Осознанность и практика", 
    url: video6
  },
  { 
    id: 7, 
    title: "Философия жизни", 
    url: video7
  },
  { 
    id: 8, 
    title: "Мудрость и опыт", 
    url: video8
  },
  { 
    id: 9, 
    title: "Развитие сознания", 
    url: video9
  },
  { 
    id: 10, 
    title: "Путь к себе", 
    url: video10
  },
  { 
    id: 11, 
    title: "Внутренняя гармония", 
    url: video11
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsOpen(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsOpen(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (isOpen && videoRef.current && selectedVideo) {
      videoRef.current.load();
      // Автозапуск видео после загрузки
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Автозапуск может быть заблокирован браузером
          console.log('Автозапуск видео заблокирован:', error);
        });
      }
    }
  }, [isOpen, selectedVideo]);

  return (
    <>
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-5">
            <h2 className="font-serif text-4xl md:text-5xl font-thin text-foreground tracking-tight">
              Видео и лекции
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Смотрите подборку материалов и вдохновляйтесь
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="group overflow-hidden border border-border/60 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer bg-card/50"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative aspect-video bg-gradient-to-br from-muted/40 to-accent/30 flex items-center justify-center rounded-t-xl overflow-hidden">
                  <video
                    src={video.url}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    preload="none"
                    loading="lazy"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-muted/20"></div>
                  <div className="absolute inset-0 bg-foreground/3 group-hover:bg-foreground/5 transition-colors rounded-t-xl"></div>
                  <div className="relative z-10 w-14 h-14 rounded-full bg-card/95 backdrop-blur-sm border border-border/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-light text-foreground leading-relaxed">
                    {video.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-sm">
          {selectedVideo && (
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                src={selectedVideo.url}
                controls
                autoPlay
                className="w-full h-full"
                playsInline
                controlsList="nodownload"
              >
                Ваш браузер не поддерживает воспроизведение видео.
              </video>
            </div>
          )}
          {selectedVideo && (
            <div className="px-6 pb-6">
              <h3 className="font-serif text-xl font-light text-foreground">
                {selectedVideo.title}
              </h3>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoGallery;
