import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, BookOpen, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionConcept = () => {
  const components = [
    {
      icon: Megaphone,
      title: "Visibility Campaign",
      description: "Raise awareness about existing policy gaps and the need for comprehensive LGBTQ+ inclusion frameworks.",
      link: "/visibility-campaign",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Provide accessible materials for sporting authorities, coaches, and staff to understand and implement inclusive practices.",
      link: "/educational-resources",
    },
    {
      icon: Target,
      title: "Policy Recommendations",
      description: "Deliver actionable guidelines and best practices for updating and strengthening EDI policies.",
      link: "/policy-recommendations",
    },
    {
      icon: Heart,
      title: "Community Engagement",
      description: "Foster dialogue between organizations, stakeholders, and the LGBTQ+ community to create meaningful change.",
      link: "/community-engagement",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold text-sm">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              A Multi-Faceted Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're creating a comprehensive visibility campaign to bridge the gap between current policies and true inclusion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {components.map((component, index) => (
              <Link key={index} to={component.link}>
                <Card 
                  className="p-8 border-2 hover:border-primary transition-all group bg-card cursor-pointer h-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-campaign-start to-campaign-end flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <component.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-2">
                        {component.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-campaign-end text-white border-0 shadow-[var(--shadow-medium)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Join the Movement</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  We're partnering with sports organizations to implement meaningful change. 
                  Together, we can create truly inclusive sporting environments where everyone feels welcome and valued.
                </p>
                <Link to="/join-movement">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 transition-all shadow-lg"
                  >
                    Get Involved
                  </Button>
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h4 className="text-xl font-bold mb-4">Campaign Goals</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span>Educate 50+ sporting organizations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span>Develop comprehensive policy templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span>Create measurable inclusion standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span>Foster ongoing dialogue and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionConcept;
