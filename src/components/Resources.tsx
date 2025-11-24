import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Building2, Trophy, GraduationCap, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const organizations = [
    { name: "Sports Scotland", icon: Building2, status: "Researched" },
    { name: "LEAP Sports", icon: Trophy, status: "Researched" },
    { name: "PRIDE Sports", icon: Trophy, status: "Researched" },
    { name: "UWS ATHENA SWAN", icon: GraduationCap, status: "Analyzed" },
  ];

  const quizzes = [
    {
      title: "General LGBTQ+ Inclusivity",
      description: "Comprehensive assessment covering all aspects of LGBTQ+ inclusion in sports",
      path: "/quiz",
      topics: ["Policy", "Language", "Allyship", "Safe Spaces"]
    },
    {
      title: "Transgender Inclusion",
      description: "Focused on understanding and supporting transgender athletes",
      path: "/quiz/transgender-inclusion",
      topics: ["Rights", "Facilities", "Terminology", "Policy"]
    },
    {
      title: "Disability Inclusion",
      description: "Creating accessible and inclusive sports environments for all abilities",
      path: "/quiz/disability-inclusion",
      topics: ["Accessibility", "Accommodation", "Communication", "Etiquette"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Research & Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building on insights from leading sports organizations and EDI frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 bg-card">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-card-foreground">Organizations Studied</h3>
              </div>
              <div className="space-y-3">
                {organizations.map((org, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center">
                      <org.icon className="h-5 w-5 text-muted-foreground mr-3" />
                      <span className="font-medium text-foreground">{org.name}</span>
                    </div>
                    <Badge variant="secondary">{org.status}</Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Key Focus Areas</h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold text-foreground mb-2">Policy Analysis</h4>
                  <p className="text-muted-foreground text-sm">
                    Examining existing EDI frameworks and identifying gaps in LGBTQ+ inclusion
                  </p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold text-foreground mb-2">Administrative Alignment</h4>
                  <p className="text-muted-foreground text-sm">
                    Studying tools and processes for implementing inclusive policies
                  </p>
                </div>
                <div className="p-4 bg-highlight/10 rounded-lg border-l-4 border-highlight">
                  <h4 className="font-bold text-foreground mb-2">Stakeholder Engagement</h4>
                  <p className="text-muted-foreground text-sm">
                    Connecting with organizations to understand implementation challenges
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-card to-secondary">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground text-center">
                Test Your Knowledge - Earn Certificates
              </h3>
            </div>
            <p className="text-center text-muted-foreground mb-8">
              Complete our interactive quizzes to demonstrate your understanding of EDI in sports. 
              Perfect scores earn you certificates you can save to your profile!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {quizzes.map((quiz, index) => (
                <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-foreground mb-2">{quiz.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{quiz.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {quiz.topics.map((topic, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Link to={quiz.path}>
                    <Button className="w-full" variant="outline">
                      Take Quiz
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </Card>

          <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-card to-secondary mt-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Current Research Phase
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Policy Review</h4>
                <p className="text-muted-foreground text-sm">
                  Comprehensive analysis of existing EDI frameworks
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Stakeholder Outreach</h4>
                <p className="text-muted-foreground text-sm">
                  Engaging with sports organizations for partnership
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-highlight/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">3</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Campaign Development</h4>
                <p className="text-muted-foreground text-sm">
                  Creating educational materials and resources
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;
