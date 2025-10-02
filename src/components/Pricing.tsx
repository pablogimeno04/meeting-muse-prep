import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const Pricing = () => {
  const plans = [
    {
      name: "Professional",
      price: "30",
      description: "Para consultores individuales",
      features: [
        "Briefings ilimitados",
        "Integración con Google Calendar",
        "Análisis de fuentes públicas",
        "KPIs y gráficas visuales",
        "Agenda sugerida automática",
        "Soporte por email"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      description: "Para equipos y organizaciones",
      features: [
        "Todo lo de Professional",
        "Integración con CRM corporativo",
        "Acceso a datos internos",
        "Power BI y analítica avanzada",
        "Briefings personalizados",
        "Soporte prioritario 24/7",
        "Gestor de cuenta dedicado"
      ],
      popular: true
    },
    {
      name: "Premium Services",
      price: "A medida",
      description: "Servicios adicionales",
      features: [
        "Personalización de briefings",
        "Integración de datos confidenciales",
        "Desarrollo de métricas custom",
        "Capacitación del equipo",
        "Consultoría estratégica",
        "SLA garantizado"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planes flexibles para cada necesidad
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desde consultores individuales hasta grandes equipos enterprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full">
                  Más Popular
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">
                    {plan.price === "Personalizado" || plan.price === "A medida" ? plan.price : `€${plan.price}`}
                  </span>
                  {plan.price !== "Personalizado" && plan.price !== "A medida" && (
                    <span className="text-muted-foreground">/usuario/mes</span>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Personalizado" || plan.price === "A medida" ? "Contactar" : "Comenzar ahora"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Todos los planes incluyen 14 días de prueba gratuita. Sin tarjeta de crédito requerida.
        </p>
      </div>
    </section>
  );
};
