import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Team {
  id: string;
  name: string;
  logo: string;
  rank: number;
  color: string;
}

const teams: Team[] = [
  { id: "1", name: "India", logo: "🇮🇳", rank: 1, color: "from-orange-500/20 to-green-500/20" },
  { id: "2", name: "Australia", logo: "🇦🇺", rank: 2, color: "from-yellow-500/20 to-green-500/20" },
  { id: "3", name: "England", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", rank: 3, color: "from-red-500/20 to-blue-500/20" },
  { id: "4", name: "New Zealand", logo: "🇳🇿", rank: 4, color: "from-blue-500/20 to-gray-500/20" },
  { id: "5", name: "South Africa", logo: "🇿🇦", rank: 5, color: "from-green-500/20 to-yellow-500/20" },
  { id: "6", name: "Pakistan", logo: "🇵🇰", rank: 6, color: "from-green-600/20 to-gray-500/20" },
  { id: "7", name: "West Indies", logo: "🌴", rank: 7, color: "from-yellow-500/20 to-red-500/20" },
  { id: "8", name: "Sri Lanka", logo: "🇱🇰", rank: 8, color: "from-blue-500/20 to-yellow-500/20" },
];

export function TeamsSection() {
  return (
    <section id="teams" className="py-16 md:py-24">
      <div className="container px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">FEATURED TEAMS</h2>
            <p className="text-muted-foreground">Follow your favorite cricket teams</p>
          </div>
          <Button variant="outline" className="hidden sm:flex gap-2">
            All Teams <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {teams.map((team, index) => (
            <div
              key={team.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${team.color} border border-border/50 transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10`}>
                <div className="text-center">
                  <span className="text-5xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                    {team.logo}
                  </span>
                  <h3 className="font-semibold text-foreground text-sm">{team.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">Rank #{team.rank}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
