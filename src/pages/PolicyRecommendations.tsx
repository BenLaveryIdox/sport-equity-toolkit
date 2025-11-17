import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, FileText, CheckCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";

const PolicyRecommendations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-campaign-end bg-clip-text text-transparent">
              Policy Recommendations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Evidence-based guidelines to strengthen LGBTQ+ inclusion in sports policies
            </p>
          </div>

          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Core Policy Framework</CardTitle>
              <CardDescription>
                Essential components every sports organization should implement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Explicit LGBTQ+ inclusion statements in organizational constitutions",
                "Gender-neutral language across all policy documents",
                "Comprehensive anti-discrimination clauses covering sexual orientation and gender identity",
                "Clear reporting mechanisms for discrimination incidents",
                "Mandatory EDI training for all staff and coaches",
                "Regular policy review and update procedures"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Detailed Recommendations</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Language and Terminology</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>Replace outdated terms with inclusive language:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use "athletes" or "participants" instead of "men and women"</li>
                    <li>Include "sexual orientation and gender identity" explicitly in non-discrimination clauses</li>
                    <li>Adopt gender-neutral pronouns in communications</li>
                    <li>Define LGBTQ+ terminology clearly in policy documents</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Facility and Changing Room Policies</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>Create safe and inclusive spaces for all athletes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide gender-neutral changing facilities and bathrooms</li>
                    <li>Allow athletes to use facilities matching their gender identity</li>
                    <li>Ensure privacy options are available for all athletes</li>
                    <li>Train staff on respecting athletes' privacy and dignity</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Participation and Competition</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>Enable inclusive participation at all levels:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Develop clear transgender athlete participation guidelines</li>
                    <li>Align with international sports federation standards where applicable</li>
                    <li>Provide multiple competition categories when appropriate</li>
                    <li>Focus on fairness and inclusion equally</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Training and Education</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>Make EDI training mandatory and ongoing:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Annual LGBTQ+ awareness training for all staff and volunteers</li>
                    <li>Specialized training for coaches and administrators</li>
                    <li>Youth-focused education programs for athletes</li>
                    <li>Bystander intervention training</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Reporting and Accountability</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>Establish clear procedures for addressing discrimination:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Confidential reporting mechanisms with multiple channels</li>
                    <li>Clear investigation procedures with defined timelines</li>
                    <li>Transparent consequences for policy violations</li>
                    <li>Support services for affected individuals</li>
                    <li>Regular reporting on incidents and policy effectiveness</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Download Policy Templates</CardTitle>
              <CardDescription>
                Ready-to-use templates based on these recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                LGBTQ+ Inclusion Policy Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Facility Access Guidelines
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Transgender Athlete Participation Framework
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PolicyRecommendations;
