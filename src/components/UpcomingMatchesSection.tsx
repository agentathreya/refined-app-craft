import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Match {
  id: string;
  team1: { name: string; logo: string };
  team2: { name: string; logo: string };
  date: string;
  time: string;
  venue: string;
  series: string;
  status: "upcoming" | "completed";
}

const upcomingMatches: Match[] = [
  {
    id: "1",
    team1: { name: "India", logo: "🇮🇳" },
    team2: { name: "Pakistan", logo: "🇵🇰" },
    date: "Dec 15, 2024",
    time: "2:30 PM",
    venue: "Dubai International Stadium",
    series: "Asia Cup 2024",
    status: "upcoming",
  },
  {
    id: "2",
    team1: { name: "Australia", logo: "🇦🇺" },
    team2: { name: "England", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    date: "Dec 18, 2024",
    time: "10:00 AM",
    venue: "Melbourne Cricket Ground",
    series: "The Ashes 2024",
    status: "upcoming",
  },
  {
    id: "3",
    team1: { name: "West Indies", logo: "🌴" },
    team2: { name: "South Africa", logo: "🇿🇦" },
    date: "Dec 20, 2024",
    time: "7:00 PM",
    venue: "Kensington Oval",
    series: "T20I Series",
    status: "upcoming",
  },
  {
    id: "4",
    team1: { name: "New Zealand", logo: "🇳🇿" },
    team2: { name: "Sri Lanka", logo: "🇱🇰" },
    date: "Dec 22, 2024",
    time: "4:30 PM",
    venue: "Eden Park, Auckland",
    series: "ODI Series",
    status: "upcoming",
  },
];

export function UpcomingMatchesSection() {
  return (
    <section id="matches" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">UPCOMING MATCHES</h2>
            <p className="text-muted-foreground">Don't miss these exciting cricket fixtures</p>
          </div>
          <Button variant="outline" className="hidden sm:flex gap-2">
            Full Schedule <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {upcomingMatches.map((match, index) => (
            <Card 
              key={match.id}
              variant="interactive"
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                {/* Series Badge */}
                <Badge variant="success" className="shrink-0">
                  {match.series}
                </Badge>

                {/* Teams */}
                <div className="flex-1 flex items-center gap-4">
                  <div className="flex items-center gap-3 min-w-[120px]">
                    <span className="text-3xl">{match.team1.logo}</span>
                    <span className="font-semibold text-foreground">{match.team1.name}</span>
                  </div>
                  <span className="font-display text-2xl text-muted-foreground">VS</span>
                  <div className="flex items-center gap-3 min-w-[120px]">
                    <span className="text-3xl">{match.team2.logo}</span>
                    <span className="font-semibold text-foreground">{match.team2.name}</span>
                  </div>
                </div>

                {/* Date & Venue */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{match.date} • {match.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="truncate max-w-[200px]">{match.venue}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="default" size="sm" className="shrink-0">
                  Set Reminder
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button (Mobile) */}
        <div className="flex sm:hidden justify-center mt-8">
          <Button variant="outline" className="gap-2">
            View Full Schedule <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
