import Hero from "@/components/Hero";
import VideoGallery from "@/components/VideoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background">
      <Hero />
      <VideoGallery />
    </div>
  );
};

export default Index;
