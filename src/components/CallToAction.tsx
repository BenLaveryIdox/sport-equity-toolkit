import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";
const CallToAction = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-16 border-2 bg-gradient-to-br from-card via-background to-secondary text-center py-[6px]">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a sports organization, coach, administrator, or advocate, 
              your voice matters in creating inclusive sporting environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-secondary transition-all">
                <MessageSquare className="mr-2 h-5 w-5" />
                Share Your Story
              </Button>
            </div>

            
          </Card>
        </div>
      </div>
    </section>;
};
export default CallToAction;