import { Calendar, Search, FileText, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Detección automática",
      description: "Se conecta a Google Calendar y detecta tus próximas reuniones con clientes",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Search,
      title: "Investigación 360°",
      description: "Analiza documentos internos, CRM, noticias, LinkedIn y web de la empresa",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "Briefing ejecutivo",
      description: "Genera contexto, KPIs visuales, agenda sugerida y preguntas inteligentes",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Send,
      title: "Entrega proactiva",
      description: "Envía el briefing automáticamente 24-48h antes por email o Slack",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuatro pasos automáticos para que llegues preparado a cada reunión
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Step number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10">
                  {index + 1}
                </div>

                {/* Icon with gradient */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} p-3 mb-4 relative z-10`}>
                  <step.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
