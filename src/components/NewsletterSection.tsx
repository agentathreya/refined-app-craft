import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]"></div>

      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 animate-pulse-glow">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            NEVER MISS A MOMENT
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get instant notifications for live matches, breaking news, and exclusive highlights delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
            />
            <Button variant="hero" size="lg" type="submit">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
