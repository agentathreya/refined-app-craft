import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LiveMatchesSection } from "@/components/LiveMatchesSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { UpcomingMatchesSection } from "@/components/UpcomingMatchesSection";
import { TeamsSection } from "@/components/TeamsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-cricket-stadium.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection backgroundImage={heroImage} />
        <LiveMatchesSection />
        <HighlightsSection />
        <UpcomingMatchesSection />
        <TeamsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
