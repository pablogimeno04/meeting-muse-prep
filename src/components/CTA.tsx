import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforma cómo preparas tus reuniones
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Únete a consultores que ya ahorran horas cada semana con IA agentic
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-white text-primary hover:bg-white/90 group"
            >
              Solicitar Demo Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contactar Ventas
            </Button>
          </div>

          <p className="text-sm opacity-75 pt-4">
            14 días de prueba gratuita • Sin tarjeta de crédito • Configuración en 5 minutos
          </p>
        </div>
      </div>
    </section>
  );
};
