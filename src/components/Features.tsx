import { Brain, BarChart3, Users, Clock, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Agent",
      description: "Autonomous agent that researches, analyzes, and prepares information without human intervention"
    },
    {
      icon: BarChart3,
      title: "Visual KPIs",
      description: "Client metrics and key performance indicators presented in clear, executive-ready charts"
    },
    {
      icon: Users,
      title: "Attendee Analysis",
      description: "LinkedIn profiles and context for each meeting participant automatically compiled"
    },
    {
      icon: Clock,
      title: "Massive Time Savings",
      description: "From 3 hours of preparation to 3 minutes of briefing review"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Secure integration with corporate data and CRM systems under SOC2 standards"
    },
    {
      icon: Zap,
      title: "Proactive Delivery",
      description: "Briefings automatically sent 24-48 hours before meetings without requesting"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-grade capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to arrive prepared for strategic meetings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-2.5 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
