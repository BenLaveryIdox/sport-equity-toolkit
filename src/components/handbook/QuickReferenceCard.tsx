import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const QuickReferenceCard = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Card className="mt-8 border-2 border-primary/20 print:border-black print:shadow-none" id="quick-reference">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Quick Reference Card</CardTitle>
        <Button variant="outline" size="sm" onClick={handlePrint} className="print:hidden">
          <Printer className="h-4 w-4 mr-2" />
          Print Card
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">LGBTQ+ Support</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Use preferred names/pronouns</li>
              <li>• Never out anyone</li>
              <li>• Address discrimination immediately</li>
              <li>• Create safe spaces</li>
            </ul>
          </div>
          
          <div className="p-3 bg-pink-50 dark:bg-pink-950/30 rounded-lg border border-pink-200 dark:border-pink-800">
            <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Transgender Athletes</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Respect gender identity</li>
              <li>• Provide facility access</li>
              <li>• Follow sport policies</li>
              <li>• Support transitions</li>
            </ul>
          </div>
          
          <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Disability Inclusion</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Ask about needs, don't assume</li>
              <li>• Adapt communication styles</li>
              <li>• Modify, don't lower expectations</li>
              <li>• Ensure accessibility</li>
            </ul>
          </div>
          
          <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Intersex Athletes</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Protect privacy absolutely</li>
              <li>• Support through policy challenges</li>
              <li>• Challenge binary assumptions</li>
              <li>• Know affirming resources</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <h4 className="font-bold mb-2">Emergency Contacts</h4>
          <div className="grid md:grid-cols-3 gap-2 text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Trevor Project:</span> 1-866-488-7386
            </div>
            <div>
              <span className="font-medium">Trans Lifeline:</span> 877-565-8860
            </div>
            <div>
              <span className="font-medium">Crisis Text Line:</span> Text HOME to 741741
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickReferenceCard;
