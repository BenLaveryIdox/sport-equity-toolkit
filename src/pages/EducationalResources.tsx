import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, Video, FileText, GraduationCap, Download } from "lucide-react";
import { Link } from "react-router-dom";

const EducationalResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-campaign-end bg-clip-text text-transparent">
              Educational Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive materials to build knowledge and skills for creating inclusive sports environments
            </p>
          </div>

          <Tabs defaultValue="guides" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Implementation Guides
                  </CardTitle>
                  <CardDescription>
                    Step-by-step guides for organizations at every stage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Getting Started: LGBTQ+ Inclusion 101", level: "Beginner", pages: "24 pages" },
                    { title: "Policy Development Handbook", level: "Intermediate", pages: "45 pages" },
                    { title: "Creating Safe Spaces in Sports", level: "All Levels", pages: "32 pages" },
                    { title: "Transgender Athlete Inclusion Guide", level: "Advanced", pages: "56 pages" },
                    { title: "Language Matters: Inclusive Communication", level: "All Levels", pages: "18 pages" }
                  ].map((guide, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <h4 className="font-semibold mb-1">{guide.title}</h4>
                        <div className="flex gap-3 text-sm text-muted-foreground">
                          <span>{guide.level}</span>
                          <span>•</span>
                          <span>{guide.pages}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Training Modules
                  </CardTitle>
                  <CardDescription>
                    Interactive video courses and workshops
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Foundations of LGBTQ+ Inclusion", duration: "2 hours", type: "Video Course" },
                    { title: "Coaching with Inclusion", duration: "90 mins", type: "Workshop" },
                    { title: "Addressing Discrimination", duration: "1 hour", type: "Interactive Module" },
                    { title: "Creating Inclusive Facilities", duration: "45 mins", type: "Video Guide" },
                    { title: "Allyship in Action", duration: "1 hour", type: "Workshop" }
                  ].map((module, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <h4 className="font-semibold mb-1">{module.title}</h4>
                        <div className="flex gap-3 text-sm text-muted-foreground">
                          <span>{module.type}</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Start Course
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Certification Programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 border rounded-lg bg-accent/50">
                    <h4 className="font-semibold mb-2">Inclusive Coach Certification</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Complete training program with assessment and official certification
                    </p>
                    <Button>Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Research & Reports
                  </CardTitle>
                  <CardDescription>
                    Evidence-based insights on LGBTQ+ inclusion in sports
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "State of LGBTQ+ Inclusion in Sports 2024", type: "Annual Report", date: "2024" },
                    { title: "Impact of Inclusive Policies on Athlete Wellbeing", type: "Research Study", date: "2023" },
                    { title: "Transgender Athletes: Participation and Performance", type: "Meta-Analysis", date: "2023" },
                    { title: "Best Practices from Leading Organizations", type: "Case Studies", date: "2024" },
                    { title: "Economic Benefits of Inclusive Sports Programs", type: "White Paper", date: "2023" }
                  ].map((paper, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div>
                        <h4 className="font-semibold mb-1">{paper.title}</h4>
                        <div className="flex gap-3 text-sm text-muted-foreground">
                          <span>{paper.type}</span>
                          <span>•</span>
                          <span>{paper.date}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Policy Assessment Tool</CardTitle>
                    <CardDescription>
                      Evaluate your current policies against best practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Interactive checklist to identify gaps and opportunities for improvement in your organization's EDI policies.
                    </p>
                    <Button className="w-full">Start Assessment</Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Incident Response Template</CardTitle>
                    <CardDescription>
                      Ready-to-use forms and procedures
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive templates for documenting, investigating, and responding to discrimination incidents.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Templates
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Communication Templates</CardTitle>
                    <CardDescription>
                      Pre-written announcements and messages
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Email templates, social media posts, and official statements to communicate your inclusion commitment.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Get Templates
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Progress Tracker</CardTitle>
                    <CardDescription>
                      Monitor your inclusion journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Track implementation milestones, training completion, and policy adoption across your organization.
                    </p>
                    <Button className="w-full">Access Tracker</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <Card className="border-2 border-primary mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Test Your Knowledge
              </CardTitle>
              <CardDescription>
                Take our comprehensive LGBTQ+ inclusivity assessment to evaluate your understanding and earn a certificate of completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">✓ 10 comprehensive questions</p>
                  <p className="text-sm font-medium">✓ Instant feedback and explanations</p>
                  <p className="text-sm font-medium">✓ Certificate upon successful completion</p>
                </div>
                <Link to="/quiz">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Quiz
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-campaign-end/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Need Help Finding the Right Resources?</h3>
                <p className="text-muted-foreground mb-4">
                  Our team can recommend personalized resources based on your organization's needs
                </p>
                <Button size="lg">
                  Contact Resource Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
