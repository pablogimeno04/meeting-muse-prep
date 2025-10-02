import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Elegant background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Meeting Intelligence</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-2">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Arrive at every meeting
              </span>
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground">
              fully prepared in 3 minutes
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-center text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our AI agent automatically analyzes context, KPIs, and documents to deliver 
            a complete executive briefing before each meeting.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center group">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                3 min
              </div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">preparation time saved</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">Automated</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24-48h
              </div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">before meeting</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="text-base lg:text-lg px-8 lg:px-10 h-12 lg:h-14 group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base lg:text-lg px-8 lg:px-10 h-12 lg:h-14 border-2 hover:bg-muted/50 transition-all duration-300"
            >
              <Calendar className="mr-2 w-5 h-5" />
              See How It Works
            </Button>
          </div>

          {/* Trust badge */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm lg:text-base text-muted-foreground">
              Trusted by consultants at <span className="font-semibold text-foreground">IBM, Accenture, and Deloitte</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
