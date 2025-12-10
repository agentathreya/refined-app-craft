import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LiveMatch {
  id: string;
  team1: { name: string; flag: string; score: string };
  team2: { name: string; flag: string; score: string };
  status: string;
  venue: string;
  viewers: string;
}

const liveMatches: LiveMatch[] = [
  {
    id: "1",
    team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "245/6" },
    team2: { name: "Pakistan", flag: "🇵🇰", score: "189/4" },
    status: "Pakistan need 57 runs",
    venue: "Lords Cricket Ground",
    viewers: "1.2M",
  },
  {
    id: "2",
    team1: { name: "South Africa", flag: "🇿🇦", score: "312/8" },
    team2: { name: "New Zealand", flag: "🇳🇿", score: "156/2" },
    status: "NZ need 157 runs",
    venue: "Cape Town Stadium",
    viewers: "890K",
  },
  {
    id: "3",
    team1: { name: "Sri Lanka", flag: "🇱🇰", score: "198/10" },
    team2: { name: "Bangladesh", flag: "🇧🇩", score: "89/3" },
    status: "BAN need 110 runs",
    venue: "Colombo Stadium",
    viewers: "654K",
  },
];

export function LiveMatchesSection() {
  return (
    <section id="live" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">LIVE MATCHES</h2>
            </div>
            <p className="text-muted-foreground">Watch live cricket action from around the world</p>
          </div>
          <Button variant="outline" className="hidden sm:flex gap-2">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Live Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveMatches.map((match, index) => (
            <Card 
              key={match.id} 
              variant="interactive"
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5">
                {/* Match Header */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="live" className="gap-1.5">
                    <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full"></span>
                    LIVE
                  </Badge>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Eye className="h-3.5 w-3.5" />
                    {match.viewers}
                  </div>
                </div>

                {/* Teams */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{match.team1.flag}</span>
                      <span className="font-semibold text-foreground">{match.team1.name}</span>
                    </div>
                    <span className="font-display text-xl text-foreground">{match.team1.score}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{match.team2.flag}</span>
                      <span className="font-semibold text-foreground">{match.team2.name}</span>
                    </div>
                    <span className="font-display text-xl text-foreground">{match.team2.score}</span>
                  </div>
                </div>

                {/* Status */}
                <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-primary font-medium">{match.status}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground truncate max-w-[150px]">{match.venue}</div>
                  <Button size="sm" variant="ghost" className="gap-1.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
