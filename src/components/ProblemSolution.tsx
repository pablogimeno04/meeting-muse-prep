import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ProblemSolution = () => {
  const problems = [
    "2-3 horas perdidas por reunión recopilando información",
    "Falta de consistencia en la preparación",
    "Riesgo de olvidar puntos críticos",
    "Información desactualizada o incompleta"
  ];

  const solutions = [
    "Briefing completo en 3 minutos automáticamente",
    "Calidad homogénea garantizada para todos",
    "IA que anticipa y recomienda preguntas clave",
    "Datos actualizados de múltiples fuentes al instante"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            El tiempo es el activo más valioso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En consultoría, cada hora cuenta. Dejemos que la IA haga el trabajo previo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problem card */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">El problema</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solution card */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra solución</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{solution}</span>
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
