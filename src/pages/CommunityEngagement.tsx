import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageCircle, Calendar, Users, Trophy, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityEngagement = () => {
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
              Community Engagement
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building connections, sharing stories, and creating change together
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-2xl">Join Our Community</CardTitle>
              <CardDescription>
                Connect with coaches, athletes, administrators, and advocates working toward inclusion
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              <Button className="h-auto py-4 flex-col gap-2">
                <MessageCircle className="h-6 w-6" />
                <span>Discussion Forum</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Users className="h-6 w-6" />
                <span>Community Hub</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Calendar className="h-6 w-6" />
                <span>Events Calendar</span>
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardHeader>
                <Trophy className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Success Stories</CardTitle>
                <CardDescription>
                  Real impact from organizations implementing inclusive policies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-accent/50">
                  <div className="flex items-start gap-3 mb-2">
                    <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">City Football League</h4>
                      <p className="text-sm text-muted-foreground">
                        "After implementing the campaign's recommendations, we saw a 40% increase in LGBTQ+ athlete registration and improved team cohesion across all levels."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg bg-accent/50">
                  <div className="flex items-start gap-3 mb-2">
                    <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Regional Swimming Association</h4>
                      <p className="text-sm text-muted-foreground">
                        "The training workshops transformed how our coaches approach inclusion. We now have gender-neutral facilities and clear support systems."
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Share Your Story</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Ally Network</CardTitle>
                <CardDescription>
                  Connect with allies across the sports community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our Ally Network brings together individuals and organizations committed to advancing LGBTQ+ inclusion in sports through:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Monthly virtual meetups and networking sessions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Peer mentorship and support programs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Collaborative problem-solving workshops</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Resource sharing and best practice exchanges</span>
                  </li>
                </ul>
                <Button className="w-full">Join the Network</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Join us at workshops, webinars, and community gatherings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Inclusive Coaching Workshop",
                  date: "January 15, 2025",
                  time: "2:00 PM - 5:00 PM",
                  format: "In-Person",
                  location: "Community Sports Center"
                },
                {
                  title: "Policy Implementation Webinar",
                  date: "January 22, 2025",
                  time: "12:00 PM - 1:30 PM",
                  format: "Virtual",
                  location: "Online"
                },
                {
                  title: "Pride in Sports Celebration",
                  date: "February 5, 2025",
                  time: "6:00 PM - 9:00 PM",
                  format: "Hybrid",
                  location: "City Hall & Online"
                },
                {
                  title: "Administrator Training Series",
                  date: "February 12-14, 2025",
                  time: "9:00 AM - 4:00 PM",
                  format: "In-Person",
                  location: "Conference Center"
                }
              ].map((event, index) => (
                <div key={index} className="flex items-start justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>📅 {event.date}</p>
                      <p>🕐 {event.time}</p>
                      <p>📍 {event.format} - {event.location}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    Register
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Discussion Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Share experiences, ask questions, and learn from others in our moderated community forum.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Discussions</span>
                    <span className="font-medium">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Community Members</span>
                    <span className="font-medium">1,450+</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Join Forum</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with monthly insights, resources, event announcements, and success stories.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow us for daily inspiration, tips, and community highlights.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Follow on Twitter
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Follow on Instagram
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Follow on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-campaign-start/10 to-campaign-end/10">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Want to Host an Event?</h3>
                <p className="text-muted-foreground mb-4">
                  We support community-led initiatives and can provide resources, speakers, and promotional support
                </p>
                <Button size="lg">
                  Submit Event Proposal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagement;
