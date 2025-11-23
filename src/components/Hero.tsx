import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2, Play } from "lucide-react";
import portrait from "@/assets/portrait.png";
import videoUrl from "@/assets/video/video_2025-11-22_16-05-09.mp4";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
    setVideoReady(false);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoOpen(false);
    setVideoReady(false);
  };

  useEffect(() => {
    if (isVideoOpen && videoRef.current) {
      videoRef.current.load();
    }
  }, [isVideoOpen]);

  const handleCanPlayThrough = () => {
    setVideoReady(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Автозапуск видео заблокирован:', error);
        });
      }
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
              <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-serif font-normal tracking-wider leading-relaxed">
                Путь к знанию, а не игра с судьбой
              </p>
              <div className="pt-2 flex justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg md:text-xl px-10 py-7 rounded-md font-serif font-normal tracking-wider border-border/60 hover:border-border transition-colors animate-gentle-blink flex items-center gap-2"
                  onClick={handleOpenVideo}
                >
                  <Play className="w-5 h-5" />
                  Приглашение Хабаровчан
                </Button>
              </div>
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

      <Dialog open={isVideoOpen} onOpenChange={handleCloseVideo}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-sm">
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
              src={videoUrl}
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
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
