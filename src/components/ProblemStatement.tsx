import { Card } from "@/components/ui/card";
import { AlertCircle, FileText, Users } from "lucide-react";

const ProblemStatement = () => {
  const issues = [
    {
      icon: FileText,
      title: "Outdated Policies",
      description: "Many sports organizations have policies that haven't been updated, missing crucial LGBTQ+ considerations.",
    },
    {
      icon: Users,
      title: "Generic Approach",
      description: "Policies follow an 'open to all staff' format rather than being mandatory requirements with specific guidelines.",
    },
    {
      icon: AlertCircle,
      title: "Limited LGBTQ+ Focus",
      description: "While addressing racism and discrimination, there's insufficient focus on LGBTQ+ specific issues and protections.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Challenge We Face
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our research reveals significant gaps in current EDI policies across sports organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {issues.map((issue, index) => (
              <Card 
                key={index} 
                className="p-8 border-2 hover:shadow-[var(--shadow-medium)] transition-all hover:scale-105 bg-card"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <issue.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {issue.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {issue.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary border-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">Research Findings</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Through comprehensive analysis of EDI policies from organizations including Sports Scotland, 
              LEAP Sports, PRIDE Sports, and various educational institutions' ATHENA SWAN submissions, 
              we've identified systemic gaps in LGBTQ+ inclusion frameworks within the sports sector.
            </p>
            <div className="bg-background/50 rounded-lg p-6 border border-border">
              <p className="text-foreground italic">
                "Existing policies often address general discrimination but lack specific, actionable 
                guidelines for creating truly inclusive environments for LGBTQ+ athletes, coaches, and staff."
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
