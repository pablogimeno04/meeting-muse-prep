import { AlertCircle, CheckCircle2, X, Check } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    "2-3 hours wasted per meeting gathering information",
    "Inconsistent preparation quality across teams",
    "Risk of missing critical discussion points",
    "Outdated or incomplete information"
  ];

  const solutions = [
    "Complete briefing in 3 minutes automatically",
    "Consistent quality guaranteed for all consultants",
    "AI that anticipates and recommends key questions",
    "Real-time data from multiple sources instantly"
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Time is your most valuable asset
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In consulting, every hour matters. Let AI handle the preparation work.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-1 bg-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Problem side */}
            <div className="bg-background p-12 lg:p-16">
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">The Problem</h3>
                </div>
                <div className="h-1 w-20 bg-destructive/20 rounded-full" />
              </div>
              
              <ul className="space-y-6">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-destructive/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-destructive/50" />
                      </div>
                    </div>
                    <span className="text-lg text-muted-foreground leading-relaxed flex-1">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution side */}
            <div className="bg-gradient-to-br from-primary/5 via-primary/5 to-accent/5 p-12 lg:p-16 relative">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="mb-10 relative">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Solution</h3>
                </div>
                <div className="h-1 w-20 bg-primary/30 rounded-full" />
              </div>
              
              <ul className="space-y-6 relative">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-lg text-foreground font-medium leading-relaxed flex-1">
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
