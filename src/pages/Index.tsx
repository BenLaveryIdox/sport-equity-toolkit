import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionConcept from "@/components/SolutionConcept";
import Resources from "@/components/Resources";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemStatement />
      <SolutionConcept />
      <Resources />
      <CallToAction />
    </div>
  );
};

export default Index;
