import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, ChevronRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Highlight {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
  match: string;
  isHot?: boolean;
}

const highlights: Highlight[] = [
  {
    id: "1",
    title: "Kohli's Century Celebration",
    thumbnail: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=340&fit=crop",
    duration: "4:32",
    views: "5.2M",
    category: "Batting",
    match: "IND vs AUS",
    isHot: true,
  },
  {
    id: "2",
    title: "Bumrah's 5-Wicket Haul",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=340&fit=crop",
    duration: "6:15",
    views: "3.8M",
    category: "Bowling",
    match: "IND vs ENG",
  },
  {
    id: "3",
    title: "Stunning Catch by Jadeja",
    thumbnail: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&h=340&fit=crop",
    duration: "2:45",
    views: "2.1M",
    category: "Fielding",
    match: "IND vs NZ",
    isHot: true,
  },
  {
    id: "4",
    title: "Last Over Thriller Finish",
    thumbnail: "https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?w=600&h=340&fit=crop",
    duration: "8:20",
    views: "4.5M",
    category: "Match Highlights",
    match: "PAK vs SA",
  },
  {
    id: "5",
    title: "Record Breaking Partnership",
    thumbnail: "https://images.unsplash.com/photo-1580748142165-38b06d7b66d0?w=600&h=340&fit=crop",
    duration: "5:40",
    views: "1.8M",
    category: "Batting",
    match: "AUS vs WI",
  },
  {
    id: "6",
    title: "Hat-trick in Finals",
    thumbnail: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600&h=340&fit=crop",
    duration: "3:55",
    views: "6.3M",
    category: "Bowling",
    match: "ENG vs NZ",
    isHot: true,
  },
];

const categories = ["All", "Batting", "Bowling", "Fielding", "Match Highlights", "Super Overs"];

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-24">
      <div className="container px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">TRENDING HIGHLIGHTS</h2>
            <p className="text-muted-foreground">Most watched cricket moments this week</p>
          </div>
          <Button variant="outline" className="gap-2">
            Browse All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <Button 
              key={category}
              variant={index === 0 ? "default" : "ghost"}
              size="sm"
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.id} 
              variant="interactive" 
              className="group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={highlight.thumbnail} 
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-primary/30">
                    <Play className="h-7 w-7 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground">
                  {highlight.duration}
                </div>

                {/* Hot Badge */}
                {highlight.isHot && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="accent" className="gap-1">
                      <Flame className="h-3 w-3" />
                      HOT
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                {/* Category & Match */}
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="muted" className="text-xs">{highlight.category}</Badge>
                  <span className="text-xs text-muted-foreground">{highlight.match}</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    {highlight.views} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    2 days ago
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            Load More Highlights
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
