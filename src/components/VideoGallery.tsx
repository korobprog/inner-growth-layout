import { useState, useRef, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useInView } from "react-intersection-observer";

interface Video {
  id: number;
  title: string;
  url?: string;
  getUrl?: () => Promise<{ default: string }>;
}

// Импортируем видео файлы динамически для lazy loading на уровне бандлера
const videoImports = {
  video1: () => import("@/assets/video/video_2025-11-22_16-04-22.mp4"),
  video2: () => import("@/assets/video/video_2025-11-22_16-04-42.mp4"),
  video3: () => import("@/assets/video/video_2025-11-22_16-04-46.mp4"),
  video4: () => import("@/assets/video/video_2025-11-22_16-04-49.mp4"),
  video5: () => import("@/assets/video/video_2025-11-22_16-04-53.mp4"),
  video6: () => import("@/assets/video/video_2025-11-22_16-04-56.mp4"),
  video7: () => import("@/assets/video/video_2025-11-22_16-04-59.mp4"),
  video8: () => import("@/assets/video/video_2025-11-22_16-05-03.mp4"),
  video9: () => import("@/assets/video/video_2025-11-22_16-05-06.mp4"),
  video10: () => import("@/assets/video/video_2025-11-22_16-05-09.mp4"),
  video11: () => import("@/assets/video/video_2025-11-22_16-05-13.mp4"),
};

// Создаем массив видео с функциями для получения URL
const videoData = [
  { id: 1, title: "Основная проблема мужчин", getUrl: videoImports.video1 },
  { id: 2, title: "Кто такой разумный человек?", getUrl: videoImports.video2 },
  { id: 3, title: "Знания и мудрость", getUrl: videoImports.video3 },
  { id: 4, title: "Что такое хорошо, что такое плохо?", getUrl: videoImports.video4 },
  { id: 5, title: "Кризис среднего возраста", getUrl: videoImports.video5 },
  { id: 6, title: "Осознанность и практика", getUrl: videoImports.video6 },
  { id: 7, title: "Философия жизни", getUrl: videoImports.video7 },
  { id: 8, title: "Что такое настоящее счастье?", getUrl: videoImports.video8 },
  { id: 9, title: "Приглашение Хабаровчан", getUrl: videoImports.video10 },
  { id: 10, title: "Внутренняя гармония", getUrl: videoImports.video11 },
];

// Компонент карточки видео с lazy loading
interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px 0px",
    triggerOnce: false,
  });

  // Загружаем URL видео через динамический импорт когда карточка становится видимой
  useEffect(() => {
    if (inView && video.getUrl && !videoUrl) {
      video.getUrl().then((module) => {
        setVideoUrl(module.default);
      });
    }
  }, [inView, video, videoUrl]);

  useEffect(() => {
    if (inView && videoRef.current && videoUrl && !metadataLoaded) {
      videoRef.current.load();
    }
  }, [inView, videoUrl, metadataLoaded]);

  const handleLoadedMetadata = () => {
    setMetadataLoaded(true);
  };

  const handleCanPlay = () => {
    setCanPlay(true);
  };

  return (
    <Card
      ref={ref}
      className="group overflow-hidden border border-border/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 ease-out cursor-pointer bg-card/50"
      onClick={() => onClick(video)}
    >
      <div className="relative aspect-video bg-gradient-to-br from-muted/40 to-accent/30 flex items-center justify-center rounded-t-xl overflow-hidden">
        {inView && videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              canPlay ? "opacity-0 group-hover:opacity-20" : "opacity-0"
            }`}
            preload="metadata"
            muted
            playsInline
            onLoadedMetadata={handleLoadedMetadata}
            onCanPlay={handleCanPlay}
          />
        )}
        <div className="absolute inset-0 bg-muted/20"></div>
        <div className="absolute inset-0 bg-foreground/3 group-hover:bg-foreground/5 transition-colors rounded-t-xl"></div>
        
        {(!canPlay || !videoUrl) && inView && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full absolute inset-0" />
            <div className="relative z-20 w-14 h-14 rounded-full bg-card/95 backdrop-blur-sm border border-border/40 flex items-center justify-center">
              <Loader2 className="w-5 h-5 text-foreground animate-spin" />
            </div>
          </div>
        )}
        
        {canPlay && videoUrl && (
          <div className="relative z-10 w-14 h-14 rounded-full bg-card/95 backdrop-blur-sm border border-border/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
            <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg font-light text-foreground leading-relaxed">
          {video.title}
        </h3>
      </div>
    </Card>
  );
};

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = async (video: Video) => {
    // Загружаем URL видео если его еще нет
    let url = video.url;
    if (!url && video.getUrl) {
      const module = await video.getUrl();
      url = module.default;
    }
    
    setSelectedVideo({ ...video, url: url || "" });
    setVideoReady(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsOpen(false);
    setSelectedVideo(null);
    setVideoReady(false);
  };

  useEffect(() => {
    if (isOpen && videoRef.current && selectedVideo) {
      videoRef.current.load();
    }
  }, [isOpen, selectedVideo]);

  const handleCanPlayThrough = () => {
    setVideoReady(true);
    // Автозапуск видео после загрузки
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Автозапуск может быть заблокирован браузером
          console.log('Автозапуск видео заблокирован:', error);
        });
      }
    }
  };

  return (
    <>
      <section id="video" className="py-32 px-6 border-t border-border/20 scroll-mt-20">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-5">
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Видео и лекции
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.75' }}>
              Смотрите подборку материалов и вдохновляйтесь
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={handleVideoClick}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-sm">
          {selectedVideo && selectedVideo.url && (
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              {!videoReady && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/80">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 text-foreground animate-spin" />
                    <p className="text-sm text-muted-foreground">Загрузка видео...</p>
                  </div>
                </div>
              )}
              <video
                ref={videoRef}
                src={selectedVideo.url}
                controls
                autoPlay
                className="w-full h-full"
                playsInline
                controlsList="nodownload"
                preload="auto"
                onCanPlayThrough={handleCanPlayThrough}
              >
                Ваш браузер не поддерживает воспроизведение видео.
              </video>
            </div>
          )}
          {selectedVideo && !selectedVideo.url && (
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 text-foreground animate-spin" />
                <p className="text-sm text-muted-foreground">Загрузка видео...</p>
              </div>
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
