import { Target, Zap, LineChart, Brain } from "lucide-react";

export const CompetitiveAdvantage = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Proactive Automation",
      description: "Unlike reactive assistants, our agent acts before you need to ask"
    },
    {
      icon: Target,
      title: "Native Integration",
      description: "Seamless connection with Calendar, CRM, and enterprise tools you already use"
    },
    {
      icon: LineChart,
      title: "Qualitative + Quantitative Context",
      description: "Executive narrative combined with KPIs and charts for informed decisions"
    },
    {
      icon: Brain,
      title: "360° Analysis",
      description: "Complete analysis of people, company, projects, KPIs, and questions in one briefing"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why we're different
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competitive advantages that make us unique in the market
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent p-3">
                  <advantage.icon className="w-full h-full text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Become the <span className="text-foreground font-semibold">leading meeting copilot</span> for 
            consulting and enterprise firms, with AI that not only prepares but also <span className="text-foreground font-semibold">anticipates 
            business opportunities</span> and learns from interaction history.
          </p>
        </div>
      </div>
    </section>
  );
};
