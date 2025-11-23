import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import VideoGallery from "@/components/VideoGallery";
import Solution from "@/components/Solution";
import Events from "@/components/Events";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/5 to-muted/10 relative overflow-hidden">
      {/* Subtle spiritual geometry pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full border border-foreground/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-foreground/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full border border-foreground/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Philosophy />
        <VideoGallery />
        <Solution />
        <Events />
        <CTA />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
