import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Users, Heart, Target, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const JoinMovement = () => {
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
              Join the Movement
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of the change. Together, we can create truly inclusive sports communities for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Partner Organization</CardTitle>
                <CardDescription>
                  Join as a sports organization committed to implementing inclusive policies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Individual Supporter</CardTitle>
                <CardDescription>
                  Support the campaign as a coach, athlete, or advocate for change
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Campaign Volunteer</CardTitle>
                <CardDescription>
                  Help spread the message through workshops, events, and community outreach
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Get Involved</CardTitle>
              <CardDescription>
                Fill out this form and we'll be in touch with next steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input id="organization" placeholder="Your organization or team" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Input id="role" placeholder="e.g., Coach, Athlete, Administrator" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">How would you like to contribute?</Label>
                  <Textarea 
                    id="interest" 
                    placeholder="Tell us about your interest in the campaign and how you'd like to help..."
                    rows={4}
                  />
                </div>

                <Button className="w-full" size="lg">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Have questions? <a href="mailto:contact@campaign.org" className="text-primary hover:underline">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMovement;
