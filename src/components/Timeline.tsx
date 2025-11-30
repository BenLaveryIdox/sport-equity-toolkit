import { CheckCircle2, Circle, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Timeline = () => {
  const milestones = [
    {
      date: "Week 1-2",
      title: "Research & Analysis",
      description: "Analyzed existing EDI policies from UWS, Sports Scotland, LEAP Sports, and PRIDE Sports",
      status: "completed",
      type: "research"
    },
    {
      date: "Week 3",
      title: "Policy Gap Identification",
      description: "Identified outdated policies and lack of specific LGBTQ+ focus in current frameworks",
      status: "completed",
      type: "analysis"
    },
    {
      date: "Week 4",
      title: "Stakeholder Outreach",
      description: "Reached out to sports organizations for partnership opportunities and policy insights",
      status: "completed",
      type: "outreach"
    },
    {
      date: "Week 5-6",
      title: "Campaign Development",
      description: "Design visibility campaign materials and educational resources for sporting authorities",
      status: "completed",
      type: "development"
    },
    {
      date: "Week 7-8",
      title: "Pilot Launch",
      description: "Launch pilot campaign with partner organizations and gather initial feedback",
      status: "current",
      type: "launch"
    },
    {
      date: "Week 9-10",
      title: "Scale & Iterate",
      description: "Expand campaign reach and refine based on stakeholder feedback and engagement metrics",
      status: "upcoming",
      type: "scale"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-primary bg-primary/10 border-primary";
      case "current":
        return "text-accent bg-accent/10 border-accent";
      case "upcoming":
        return "text-muted-foreground bg-muted border-border";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5" />;
      case "current":
        return <Calendar className="w-5 h-5" />;
      case "upcoming":
        return <Circle className="w-5 h-5" />;
      default:
        return <Circle className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-campaign-start to-campaign-end bg-clip-text text-transparent">
            Campaign Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track our journey from research to implementation. Each milestone brings us closer to inclusive sports policies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted-foreground/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 transition-all duration-300 ${
                    milestone.status === "completed"
                      ? "bg-primary"
                      : milestone.status === "current"
                      ? "bg-accent animate-pulse"
                      : "bg-muted-foreground/40"
                  }`}
                />

                {/* Content card */}
                <Card
                  className={`flex-1 ml-20 md:ml-0 md:w-[calc(50%-3rem)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-2 rounded-full border transition-colors ${getStatusColor(
                          milestone.status
                        )}`}
                      >
                        {getStatusIcon(milestone.status)}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                    <div className="mt-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${
                          milestone.status === "completed"
                            ? "bg-primary/10 text-primary"
                            : milestone.status === "current"
                            ? "bg-accent/10 text-accent"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {milestone.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-16 p-6 rounded-lg bg-card border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Overall Progress</h3>
            <span className="text-2xl font-bold text-primary">67%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
              style={{ width: "67%" }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            4 of 6 milestones completed • Currently in pilot launch phase
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
