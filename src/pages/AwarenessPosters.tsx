import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Share2, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import posterInclusivePolicies from "@/assets/poster-inclusive-policies.jpg";
import posterWordsToAction from "@/assets/poster-words-to-action.jpg";
import posterBridgeGap from "@/assets/poster-bridge-gap.jpg";
import posterEveryoneBelongs from "@/assets/poster-everyone-belongs.jpg";

const AwarenessPosters = () => {
  const posters = [
    {
      id: 1,
      title: "Inclusive Policies, Stronger Sports",
      image: posterInclusivePolicies,
      description: "Highlighting how comprehensive LGBTQ+ policies create safer, more welcoming environments for all athletes.",
      theme: "Policy Implementation"
    },
    {
      id: 2,
      title: "From Words to Action",
      image: posterWordsToAction,
      description: "Emphasizing the need to move beyond generic EDI statements to specific, actionable LGBTQ+ inclusion measures.",
      theme: "Action & Implementation"
    },
    {
      id: 3,
      title: "See the Gap, Bridge the Gap",
      image: posterBridgeGap,
      description: "Visualizing the policy gaps in current EDI frameworks and the need for specific LGBTQ+ provisions.",
      theme: "Awareness & Education"
    },
    {
      id: 4,
      title: "Everyone Belongs Here",
      image: posterEveryoneBelongs,
      description: "Creating a welcoming message for sports facilities that celebrates diversity and inclusion.",
      theme: "Community Building"
    }
  ];

  const handleDownload = (imageUrl: string, posterTitle: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${posterTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-campaign-start via-primary to-campaign-end py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/campaign-design">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Campaign Design
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Awareness Posters
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Professional awareness posters designed to promote LGBTQ+ inclusion in sports. Download, 
            print, and display these in sports facilities, locker rooms, and community spaces.
          </p>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Download</h3>
                <p className="text-sm text-muted-foreground">
                  Click the download button on any poster to save high-resolution versions for printing or digital use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Printer className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Print</h3>
                <p className="text-sm text-muted-foreground">
                  All posters are optimized for professional printing. Recommended sizes: A3, A2, or larger for maximum impact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-campaign-start/10 flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-campaign-start" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Share</h3>
                <p className="text-sm text-muted-foreground">
                  Use these posters on social media, newsletters, and digital displays to spread awareness about LGBTQ+ inclusion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Posters Gallery */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Campaign Posters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four powerful designs addressing different aspects of LGBTQ+ inclusion in sports
            </p>
          </div>

          <div className="grid gap-12">
            {posters.map((poster) => (
              <Card key={poster.id} className="overflow-hidden border-2 hover:shadow-2xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Poster Image */}
                  <div className="bg-muted/20 flex items-center justify-center p-8">
                    <img 
                      src={poster.image} 
                      alt={poster.title}
                      className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    />
                  </div>

                  {/* Poster Details */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        {poster.theme}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-foreground">
                        {poster.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {poster.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        onClick={() => handleDownload(poster.image, poster.title)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Poster
                      </Button>
                      <Button variant="outline">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Usage:</strong> Free to download and distribute. 
                        Ideal for sports facilities, community centers, schools, and online campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Need Custom Posters?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We can create custom awareness materials tailored to your organization's specific needs 
            and branding guidelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/campaign-design">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Campaign Materials
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwarenessPosters;
