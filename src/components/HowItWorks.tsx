import { ArrowRight, ArrowDown } from "lucide-react";
import step1 from "@/assets/step-1-calendar.png";
import step2 from "@/assets/step-2-research.png";
import step3 from "@/assets/step-3-pdf.jpg";
import step4 from "@/assets/step-4-delivery.jpg";

export const HowItWorks = () => {
  const steps = [
    {
      image: step1,
      title: "Connect to Google Calendar",
      description: "Automatically detects your upcoming client meetings and extracts key information"
    },
    {
      image: step2,
      title: "360° Information Gathering",
      description: "AI searches internal documents, CRM, news, LinkedIn, and company websites"
    },
    {
      image: step3,
      title: "Generate Executive Briefing",
      description: "Creates a comprehensive PDF with context, KPIs, agenda, and strategic questions"
    },
    {
      image: step4,
      title: "Automatic Delivery",
      description: "Sends the complete briefing 24-48 hours before your meeting via email or Slack"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four automated steps from calendar to inbox
          </p>
        </div>

        {/* Desktop: 2x2 Grid with Arrows */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center w-full">
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  
                  {/* Screenshot */}
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-border mb-4 hover:shadow-xl transition-shadow">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrows */}
                {index === 0 && (
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute left-1/2 -bottom-6 -translate-x-1/2">
                    <ArrowDown className="w-8 h-8 text-primary" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Flow */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                  {index + 1}
                </div>
                
                {/* Screenshot */}
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-border mb-4 hover:shadow-xl transition-shadow">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-md">
                  {step.description}
                </p>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="my-6">
                    <ArrowDown className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
