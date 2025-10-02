import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Time is your most valuable asset
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In consulting, every hour matters. Let AI handle the preparation work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problem card */}
          <Card className="border-destructive/30 bg-destructive/5 hover:shadow-lg transition-shadow">
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-full bg-destructive/10">
                  <AlertCircle className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Problem</h3>
              </div>
              <ul className="space-y-5">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                    <span className="text-base text-muted-foreground leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solution card */}
          <Card className="border-primary/30 bg-primary/5 hover:shadow-lg transition-shadow">
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Solution</h3>
              </div>
              <ul className="space-y-5">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-base text-foreground font-medium leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
