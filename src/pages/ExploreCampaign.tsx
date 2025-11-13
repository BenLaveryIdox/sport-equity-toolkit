import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, BookOpen, TrendingUp, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ExploreCampaign = () => {
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
            Explore the Campaign
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Dive deep into our mission to transform sports culture through inclusive policies and education. 
            Learn about our approach, goals, and how we're working to create lasting change.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating a sporting world where everyone feels safe, valued, and empowered to participate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the gaps in current EDI frameworks by raising awareness about LGBTQ+ inclusion 
                  among sporting authorities, coaches, and staff. We aim to transform outdated policies into 
                  comprehensive, actionable guidelines that protect and empower LGBTQ+ individuals in sports.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A sports sector where LGBTQ+ policies are not just present but actively implemented, 
                  where inclusivity is the norm, and where every individual—regardless of their identity—
                  can thrive in sporting environments without fear of discrimination or prejudice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campaign Pillars */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Campaign Pillars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four key areas driving our approach to systemic change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Education</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive training materials and workshops for sporting authorities and staff
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Visibility</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Raising awareness about existing gaps and the importance of LGBTQ+ inclusion
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-campaign-start/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-campaign-start" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Policy Reform</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Developing actionable recommendations to strengthen and update current policies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-campaign-end/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-campaign-end" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Impact Tracking</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Measuring adoption rates and effectiveness of implemented policy changes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">The Challenge We're Addressing</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our research across major sports organizations revealed a concerning pattern: while EDI 
                policies exist on paper, they often lack specific provisions for LGBTQ+ inclusion.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Generic Language</h4>
                    <p className="text-sm text-muted-foreground">Policies use broad terms without addressing specific LGBTQ+ challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Lack of Enforcement</h4>
                    <p className="text-sm text-muted-foreground">Many policies are voluntary rather than mandatory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-campaign-start mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Outdated Frameworks</h4>
                    <p className="text-sm text-muted-foreground">Policies haven't been updated to reflect current understanding</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <h3 className="text-2xl font-bold mb-6 text-foreground">By the Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-muted-foreground">Policies Reviewed</span>
                    <span className="text-3xl font-bold text-primary">15+</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-muted-foreground">Organizations Contacted</span>
                    <span className="text-3xl font-bold text-accent">8</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "53%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-muted-foreground">Specific LGBTQ+ Policies Found</span>
                    <span className="text-3xl font-bold text-campaign-end">2</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-campaign-end h-2 rounded-full" style={{ width: "13%" }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic methodology combining research, education, and practical implementation
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Research & Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive review of existing EDI policies from Sports Scotland, LEAP Sports, PRIDE Sports, 
                      and UWS, identifying gaps and best practices in LGBTQ+ inclusion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Stakeholder Engagement</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Direct outreach to sports organizations, building partnerships and gathering insights from 
                      those on the front lines of policy implementation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-campaign-start hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-campaign-start/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-campaign-start">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Campaign Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Creating educational materials, visibility campaigns, and practical resources that make 
                      LGBTQ+ inclusion accessible and actionable for sports organizations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-campaign-end hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-campaign-end/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-campaign-end">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Implementation & Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Providing ongoing guidance and support to organizations as they adopt and implement 
                      improved LGBTQ+ inclusion policies and practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Get Involved?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Whether you're a sports organization looking to improve your policies or an advocate wanting to 
            support the cause, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                View Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreCampaign;
