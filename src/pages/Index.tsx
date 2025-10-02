import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { CompetitiveAdvantage } from "@/components/CompetitiveAdvantage";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <CompetitiveAdvantage />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
