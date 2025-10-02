import { Brain, BarChart3, Users, Clock, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Agentic Avanzada",
      description: "Agente autónomo que investiga, analiza y prepara información sin intervención humana"
    },
    {
      icon: BarChart3,
      title: "KPIs Visuales",
      description: "Gráficas y métricas clave del cliente presentadas de forma clara y ejecutiva"
    },
    {
      icon: Users,
      title: "Análisis de Asistentes",
      description: "Información de LinkedIn y contexto de cada participante en la reunión"
    },
    {
      icon: Clock,
      title: "Ahorro de Tiempo Masivo",
      description: "De 3 horas de preparación a solo 3 minutos de revisión del briefing"
    },
    {
      icon: Shield,
      title: "Seguridad Enterprise",
      description: "Integración segura con tus datos corporativos y CRM bajo estándares SOC2"
    },
    {
      icon: Zap,
      title: "Entrega Automática",
      description: "Briefings enviados proactivamente sin que tengas que solicitarlos"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Características que marcan la diferencia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para llegar preparado a cada reunión estratégica
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
