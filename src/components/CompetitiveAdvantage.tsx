import { Target, Zap, LineChart, Brain } from "lucide-react";

export const CompetitiveAdvantage = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Automático y Proactivo",
      description: "A diferencia de asistentes reactivos, nuestro agente actúa antes de que lo solicites"
    },
    {
      icon: Target,
      title: "Integración Real",
      description: "Conexión nativa con Calendar, CRM y herramientas enterprise que ya utilizas"
    },
    {
      icon: LineChart,
      title: "Contexto Cualitativo + Cuantitativo",
      description: "Narrativa ejecutiva combinada con KPIs y gráficas para decisiones informadas"
    },
    {
      icon: Brain,
      title: "Enfoque 360°",
      description: "Análisis completo de personas, empresa, proyectos, KPIs y preguntas en un solo briefing"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué somos diferentes?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ventajas competitivas que nos hacen únicos en el mercado
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
          <h3 className="text-2xl font-bold mb-4">Nuestra visión</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Convertirnos en el <span className="text-foreground font-semibold">copiloto de reuniones líder</span> en 
            consultoría y grandes empresas, con IA que no solo prepara, sino que también <span className="text-foreground font-semibold">anticipa 
            oportunidades de negocio</span> y aprende del historial de interacciones.
          </p>
        </div>
      </div>
    </section>
  );
};
