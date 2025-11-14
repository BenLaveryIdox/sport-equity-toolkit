import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Palette, MessageSquare, Share2, FileText, Instagram, Twitter, Mail, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const CampaignDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-campaign-start via-primary to-campaign-end py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Campaign Design & Messaging
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Explore the visual identity, key messages, and content strategy that will drive our 
            LGBTQ+ inclusivity campaign in sports.
          </p>
        </div>
      </section>

      {/* Visual Identity */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Visual Identity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our campaign uses inclusive, vibrant design elements that represent diversity and unity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Color Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Professional yet vibrant colors representing inclusivity and progress
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg bg-primary"></div>
                    <p className="text-xs text-center text-muted-foreground">Primary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg bg-accent"></div>
                    <p className="text-xs text-center text-muted-foreground">Accent</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg bg-highlight"></div>
                    <p className="text-xs text-center text-muted-foreground">Highlight</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Typography & Tone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Clear, accessible communication with an empowering and professional tone
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded">
                    <p className="font-bold text-foreground">Bold & Clear Headlines</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded">
                    <p className="text-muted-foreground">Accessible body text for all readers</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded">
                    <p className="text-sm text-muted-foreground italic">Supporting details in context</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Campaign Messages */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Key Campaign Messages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core themes and talking points that drive our campaign narrative
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Primary Message</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  "Inclusive Policies, Stronger Sports"
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sports organizations with comprehensive LGBTQ+ policies create safer, more welcoming 
                  environments that benefit everyone. Inclusion isn't just the right thing to do—it makes 
                  sports better for all participants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Badge className="bg-accent text-accent-foreground">Education Focus</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  "From Words to Action"
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generic EDI statements aren't enough. We provide sports authorities, coaches, and staff 
                  with specific, actionable guidance to implement meaningful LGBTQ+ inclusion policies that 
                  create real change.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-campaign-start">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Badge className="bg-campaign-start text-white">Visibility Message</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  "See the Gap, Bridge the Gap"
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our research shows that while many sports organizations have EDI policies, specific LGBTQ+ 
                  provisions are often missing. We're raising awareness about these gaps and providing 
                  solutions to close them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campaign Materials */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Campaign Materials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-channel content designed to reach and engage sports organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Social Media Campaign</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                  Shareable graphics, infographics, and key statistics highlighting policy gaps and solutions
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Instagram</Badge>
                  <Badge variant="outline" className="text-xs">Twitter/X</Badge>
                  <Badge variant="outline" className="text-xs">LinkedIn</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Educational Resources</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                  Comprehensive guides, policy templates, and best practice documents for organizations
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">PDF Guides</Badge>
                  <Badge variant="outline" className="text-xs">Templates</Badge>
                  <Badge variant="outline" className="text-xs">Checklists</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-campaign-start/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-campaign-start" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Workshops & Webinars</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                  Interactive training sessions for sports authorities, coaches, and staff on LGBTQ+ inclusion
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Live Sessions</Badge>
                  <Badge variant="outline" className="text-xs">Q&A</Badge>
                  <Badge variant="outline" className="text-xs">Recordings</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-campaign-end/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-campaign-end" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Email Campaigns</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                  Direct outreach to sports organizations with personalized policy recommendations
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Newsletters</Badge>
                  <Badge variant="outline" className="text-xs">Updates</Badge>
                  <Badge variant="outline" className="text-xs">Resources</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Awareness Posters</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                  Print and digital posters for sports facilities highlighting the importance of inclusion
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Print-Ready</Badge>
                  <Badge variant="outline" className="text-xs">Digital</Badge>
                  <Badge variant="outline" className="text-xs">Multilingual</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-highlight" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Case Studies</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                  Success stories and examples from organizations implementing inclusive policies
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">Real Stories</Badge>
                  <Badge variant="outline" className="text-xs">Impact Data</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discussion Topics */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What We'll Discuss</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key conversation starters and educational topics for the campaign
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">For Sports Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Why generic EDI policies fall short for LGBTQ+ inclusion</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">How to update policies with specific LGBTQ+ provisions</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Creating safe reporting mechanisms for discrimination</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Making policies mandatory rather than voluntary</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Measuring and tracking policy implementation success</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">For Coaches & Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Understanding LGBTQ+ terminology and appropriate language</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Creating inclusive locker room and facility environments</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Responding to discrimination and supporting LGBTQ+ athletes</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Pronoun usage and respecting athlete identities</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Building ally networks within sports organizations</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Policy Gaps We've Identified</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-start mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Lack of specific protections for transgender athletes</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-start mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Absence of clear reporting procedures for LGBTQ+ discrimination</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-start mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">No mandatory training requirements for staff on LGBTQ+ issues</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-start mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Outdated language that doesn't reflect current understanding</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-start mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Voluntary rather than mandatory policy adoption</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Best Practices to Promote</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-end mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Gender-neutral language in all official communications</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-end mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Regular policy reviews and updates (every 2-3 years)</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-end mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Consultation with LGBTQ+ organizations and communities</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-end mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Visible commitment from leadership and management</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-campaign-end mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Tracking metrics on inclusion and policy effectiveness</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Join the Campaign</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Whether you want to use our materials, partner with us, or learn more about implementing 
            inclusive policies in your organization, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Campaign Materials
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline">
                Learn More About Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampaignDesign;
