import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, FileText, CheckCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { downloadPDF, generateInclusionPolicyPDF, generateFacilityGuidelinesPDF, generateTransgenderFrameworkPDF, generateEDITrainingPDF, generateIncidentProtocolPDF } from "@/utils/policyPdfGenerator";
const PolicyRecommendations = () => {
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted">
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
              {["Explicit LGBTQ+ inclusion statements in organizational constitutions", "Gender-neutral language across all policy documents", "Comprehensive anti-discrimination clauses covering sexual orientation and gender identity", "Clear reporting mechanisms for discrimination incidents", "Mandatory EDI training for all staff and coaches", "Regular policy review and update procedures"].map((item, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>)}
            </CardContent>
          </Card>

          <div className="mb-8 relative">
            <h2 className="text-2xl font-bold mb-4">Detailed Recommendations</h2>
            <div className="relative min-h-[600px] rounded-xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm p-6">
              <InteractiveBackground />
              <Accordion type="single" collapsible className="space-y-4 relative z-10">
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
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Download Policy Templates</h2>
            <p className="text-muted-foreground mb-6">
              Ready-to-use, customizable templates based on best practices and research
            </p>
            
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">LGBTQ+ Inclusion Policy Template</CardTitle>
                      <CardDescription>Comprehensive policy framework</CardDescription>
                    </div>
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A complete, ready-to-implement policy document that covers all aspects of LGBTQ+ inclusion 
                    in sports organizations. Includes model language, implementation guidelines, and compliance checklists.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Sections Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                      <li>Non-discrimination statement with explicit LGBTQ+ protection</li>
                      <li>Gender-neutral language guidelines</li>
                      <li>Inclusive facility access policies</li>
                      <li>Reporting and complaint procedures</li>
                      <li>Staff training requirements</li>
                      <li>Policy review and update schedules</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">PDF • 3 pages</span>
                    <Button className="gap-2" onClick={() => downloadPDF(generateInclusionPolicyPDF, "LGBTQ-Inclusion-Policy-Template.pdf")}>
                      <Download className="h-4 w-4" />
                      Download Template
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">Facility Access Guidelines</CardTitle>
                      <CardDescription>Safe and inclusive spaces for all athletes</CardDescription>
                    </div>
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Detailed guidelines for creating inclusive changing rooms, bathrooms, and other facilities. 
                    Includes architectural recommendations, privacy solutions, and staff training protocols.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What's Included:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                      <li>Gender-neutral facility design standards</li>
                      <li>Privacy considerations and solutions</li>
                      <li>Transgender athlete facility access rights</li>
                      <li>Staff communication and support guidelines</li>
                      <li>Cost-effective implementation strategies</li>
                      <li>Case studies from leading sports organizations</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">PDF • 3 pages</span>
                    <Button className="gap-2" onClick={() => downloadPDF(generateFacilityGuidelinesPDF, "Facility-Access-Guidelines.pdf")}>
                      <Download className="h-4 w-4" />
                      Download Guidelines
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">Transgender Athlete Participation Framework</CardTitle>
                      <CardDescription>Evidence-based participation policies</CardDescription>
                    </div>
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A comprehensive framework for developing fair and inclusive transgender athlete participation 
                    policies at all levels of sport, aligned with international standards and best practices.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Framework Components:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                      <li>International federation policy alignment</li>
                      <li>Different approaches for recreational vs. competitive sport</li>
                      <li>Medical and scientific evidence summary</li>
                      <li>Legal compliance considerations</li>
                      <li>Stakeholder communication strategies</li>
                      <li>Implementation roadmap and timeline</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">PDF • 3 pages</span>
                    <Button className="gap-2" onClick={() => downloadPDF(generateTransgenderFrameworkPDF, "Transgender-Athlete-Participation-Framework.pdf")}>
                      <Download className="h-4 w-4" />
                      Download Framework
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">EDI Training Program Template</CardTitle>
                      <CardDescription>Comprehensive staff training curriculum</CardDescription>
                    </div>
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A complete training program template designed for coaches, administrators, and volunteers. 
                    Includes presentation slides, facilitator guides, and assessment materials.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Training Modules:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                      <li>LGBTQ+ terminology and concepts</li>
                      <li>Understanding unconscious bias</li>
                      <li>Creating inclusive environments</li>
                      <li>Responding to discrimination</li>
                      <li>Bystander intervention techniques</li>
                      <li>Legal responsibilities and compliance</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">PDF • 20 pages + Slides</span>
                    <Button className="gap-2" onClick={() => downloadPDF(generateEDITrainingPDF, "EDI-Training-Program-Template.pdf")}>
                      <Download className="h-4 w-4" />
                      Download Program
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">Incident Reporting & Response Protocol</CardTitle>
                      <CardDescription>Clear procedures for handling discrimination</CardDescription>
                    </div>
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Step-by-step protocols for receiving, investigating, and resolving discrimination complaints. 
                    Includes forms, flowcharts, and communication templates.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Protocol Includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                      <li>Multiple confidential reporting channels</li>
                      <li>Investigation procedures and timelines</li>
                      <li>Decision-making frameworks</li>
                      <li>Victim support services</li>
                      <li>Disciplinary action guidelines</li>
                      <li>Record-keeping and reporting requirements</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">PDF • 10 pages + Forms</span>
                    <Button className="gap-2" onClick={() => downloadPDF(generateIncidentProtocolPDF, "Incident-Reporting-Response-Protocol.pdf")}>
                      <Download className="h-4 w-4" />
                      Download Protocol
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default PolicyRecommendations;