import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const Pricing = () => {
  const plans = [
    {
      name: "Professional",
      price: "30",
      description: "For individual consultants",
      features: [
        "Unlimited briefings",
        "Google Calendar integration",
        "Public data source analysis",
        "Visual KPIs and charts",
        "Automatic agenda suggestions",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Professional",
        "Corporate CRM integration",
        "Internal data access",
        "Power BI and advanced analytics",
        "Custom briefing templates",
        "24/7 priority support",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Premium Services",
      price: "Custom",
      description: "Additional services",
      features: [
        "Briefing customization",
        "Confidential data integration",
        "Custom metrics development",
        "Team training programs",
        "Strategic consulting",
        "Guaranteed SLA"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible plans for every need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From individual consultants to large enterprise teams
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
                  Most Popular
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/user/month</span>
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
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};
