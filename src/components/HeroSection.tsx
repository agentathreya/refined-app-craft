import { Play, Clock, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  backgroundImage?: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundColor: 'hsl(var(--background))'
        }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="live" className="gap-1.5">
              <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></span>
              LIVE NOW
            </Badge>
            <Badge variant="accent">Featured Match</Badge>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6">
            <span className="text-foreground">INDIA</span>
            <span className="text-muted-foreground mx-3">vs</span>
            <span className="text-foreground">AUSTRALIA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl">
            World Cup 2024 Final • Melbourne Cricket Ground
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">2.4M watching</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">45th Over</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">4.9 Rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" className="gap-3">
              <Play className="h-5 w-5 fill-current" />
              Watch Live
            </Button>
            <Button variant="glass" size="xl">
              View Highlights
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Score Card */}
      <div className="absolute bottom-8 right-8 hidden xl:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="glass-card rounded-2xl p-6 min-w-[280px]">
          <div className="text-sm text-muted-foreground mb-4 font-medium">Live Score</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">IND</div>
                <span className="font-semibold text-foreground">India</span>
              </div>
              <span className="font-display text-2xl text-foreground">287/4</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">AUS</div>
                <span className="font-semibold text-muted-foreground">Australia</span>
              </div>
              <span className="font-display text-2xl text-muted-foreground">-</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
