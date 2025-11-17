import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Eye, Share2, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const VisibilityCampaign = () => {
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
              Visibility Campaign
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Making LGBTQ+ inclusion visible in sports through education, awareness, and action
            </p>
          </div>

          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Campaign Strategy</CardTitle>
              <CardDescription>
                Multi-channel approach to maximize reach and impact
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Visual Identity
                </h3>
                <p className="text-muted-foreground mb-3">
                  Our campaign uses bold, inclusive imagery and messaging that resonates across diverse sporting communities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["#InclusiveSports", "#BridgeTheGap", "#EveryoneWelcome", "#PolicyToAction"].map((tag) => (
                    <div key={tag} className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm text-center font-medium">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-primary" />
                  Social Media Campaign
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weekly spotlight on organizations leading inclusive practices</li>
                  <li>• Athlete and coach testimonials highlighting positive experiences</li>
                  <li>• Educational infographics on LGBTQ+ terminology and inclusion</li>
                  <li>• Behind-the-scenes content from awareness workshops</li>
                  <li>• Interactive Q&A sessions with EDI experts</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Events & Workshops</CardTitle>
                <CardDescription>In-person engagement opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Monthly Awareness Workshops</p>
                  <p className="text-sm text-muted-foreground">
                    Interactive sessions for coaches and administrators on implementing inclusive policies
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Pride in Sports Events</p>
                  <p className="text-sm text-muted-foreground">
                    Celebration events during Pride month featuring LGBTQ+ athletes and allies
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Town Hall Discussions</p>
                  <p className="text-sm text-muted-foreground">
                    Open forums for community feedback and dialogue on policy improvements
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Event Calendar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Ambassador Program</CardTitle>
                <CardDescription>Champions leading the change</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Athlete Ambassadors</p>
                  <p className="text-sm text-muted-foreground">
                    LGBTQ+ athletes and allies sharing their stories and advocating for change
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Coach Champions</p>
                  <p className="text-sm text-muted-foreground">
                    Experienced coaches demonstrating best practices in inclusive coaching
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Organization Leaders</p>
                  <p className="text-sm text-muted-foreground">
                    Sports administrators pioneering policy reforms and implementation
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Become an Ambassador
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Campaign Milestones</CardTitle>
              <CardDescription>
                Track our progress toward full LGBTQ+ inclusion in sports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { phase: "Phase 1: Awareness", status: "Complete", description: "Launch campaign materials and establish partnerships" },
                  { phase: "Phase 2: Education", status: "In Progress", description: "Deliver workshops and training to 50+ organizations" },
                  { phase: "Phase 3: Implementation", status: "Upcoming", description: "Support organizations in adopting new policies" },
                  { phase: "Phase 4: Evaluation", status: "Upcoming", description: "Measure impact and share best practices" }
                ].map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        milestone.status === "Complete" ? "bg-primary text-primary-foreground" :
                        milestone.status === "In Progress" ? "bg-primary/50 text-primary-foreground" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{milestone.phase}</h4>
                        <span className={`text-xs px-2 py-1 rounded ${
                          milestone.status === "Complete" ? "bg-primary/20 text-primary" :
                          milestone.status === "In Progress" ? "bg-campaign-middle/20 text-campaign-middle" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {milestone.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link to="/awareness-posters">
              <Button size="lg" className="mr-4">
                View Campaign Posters
              </Button>
            </Link>
            <Link to="/join-movement">
              <Button size="lg" variant="outline">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisibilityCampaign;
