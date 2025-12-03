import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Download, Search, BookOpen, Users, Heart, Shield, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { jsPDF } from "jspdf";

interface HandbookSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: "lgbtq" | "transgender" | "general";
  content: {
    heading: string;
    text: string;
    tips?: string[];
  }[];
}

const handbookSections: HandbookSection[] = [
  {
    id: "understanding-lgbtq",
    title: "Understanding LGBTQ+ Athletes",
    icon: <Users className="h-5 w-5" />,
    category: "lgbtq",
    content: [
      {
        heading: "Key Terminology",
        text: "Understanding the correct terminology is essential for creating an inclusive environment. LGBTQ+ stands for Lesbian, Gay, Bisexual, Transgender, Queer/Questioning, and others. Each identity is unique and should be respected.",
        tips: [
          "Use the terms athletes prefer for themselves",
          "If unsure, ask respectfully and privately",
          "Avoid making assumptions about anyone's identity",
          "Stay updated on evolving terminology"
        ]
      },
      {
        heading: "Creating Safe Spaces",
        text: "A safe space is an environment where LGBTQ+ athletes feel comfortable being themselves without fear of judgment, discrimination, or harassment. This includes physical spaces like locker rooms and social spaces like team gatherings.",
        tips: [
          "Display inclusive signage and materials",
          "Address homophobic or transphobic comments immediately",
          "Ensure changing facilities accommodate all athletes",
          "Foster team culture that celebrates diversity"
        ]
      },
      {
        heading: "Addressing Bias and Discrimination",
        text: "Bias can be conscious or unconscious. As a coach, you must actively work to identify and address discriminatory behavior, whether from yourself, other coaches, athletes, or spectators.",
        tips: [
          "Reflect on your own assumptions and biases",
          "Establish clear anti-discrimination policies",
          "Train staff on recognizing microaggressions",
          "Create reporting mechanisms for incidents"
        ]
      }
    ]
  },
  {
    id: "supporting-lgb-athletes",
    title: "Supporting LGB Athletes",
    icon: <Heart className="h-5 w-5" />,
    category: "lgbtq",
    content: [
      {
        heading: "Coming Out in Sports",
        text: "An athlete may choose to come out to you as their coach. This is a significant moment of trust. Your response can greatly impact their wellbeing and continued participation in sport.",
        tips: [
          "Thank them for trusting you",
          "Maintain confidentiality unless given permission",
          "Ask how you can best support them",
          "Continue treating them the same as other athletes"
        ]
      },
      {
        heading: "Team Dynamics",
        text: "Managing team dynamics when an athlete is openly LGB requires sensitivity. Focus on fostering respect and unity while being prepared to address any issues that arise.",
        tips: [
          "Lead by example with inclusive language",
          "Address negative behavior promptly",
          "Create opportunities for team bonding",
          "Celebrate diverse backgrounds within the team"
        ]
      },
      {
        heading: "Communication with Parents/Guardians",
        text: "Some LGB athletes may not be out to their families. Navigating communication requires discretion and prioritizing the athlete's safety and wishes.",
        tips: [
          "Never out an athlete without consent",
          "Use neutral language in communications",
          "Be prepared for varying family attitudes",
          "Know local resources for family support"
        ]
      }
    ]
  },
  {
    id: "transgender-athletes-basics",
    title: "Transgender Athletes: The Basics",
    icon: <BookOpen className="h-5 w-5" />,
    category: "transgender",
    content: [
      {
        heading: "Understanding Gender Identity",
        text: "Gender identity is a person's internal sense of their own gender, which may or may not correspond with their sex assigned at birth. Transgender individuals have a gender identity different from their assigned sex.",
        tips: [
          "Gender identity is separate from sexual orientation",
          "Respect each person's self-identified gender",
          "Understand that transitioning is different for everyone",
          "Never ask invasive questions about medical status"
        ]
      },
      {
        heading: "Names and Pronouns",
        text: "Using correct names and pronouns is fundamental to respecting transgender athletes. Misgendering (using wrong pronouns) can be deeply hurtful and create an unwelcoming environment.",
        tips: [
          "Ask all athletes their preferred pronouns",
          "Practice using correct pronouns consistently",
          "Correct yourself quickly if you make mistakes",
          "Gently correct others who misgender teammates"
        ]
      },
      {
        heading: "Legal and Policy Considerations",
        text: "Policies regarding transgender athletes vary by sport, governing body, and region. Stay informed about current policies while advocating for inclusive practices.",
        tips: [
          "Know your sport's governing body policies",
          "Understand local anti-discrimination laws",
          "Advocate for fair and inclusive policies",
          "Connect with LGBTQ+ sports organizations for guidance"
        ]
      }
    ]
  },
  {
    id: "transgender-practical",
    title: "Practical Support for Transgender Athletes",
    icon: <Shield className="h-5 w-5" />,
    category: "transgender",
    content: [
      {
        heading: "Facility Access",
        text: "Transgender athletes should have access to facilities that match their gender identity. This may require creative solutions and clear policies to ensure everyone feels safe and comfortable.",
        tips: [
          "Provide private changing options for those who want them",
          "Ensure policies allow access matching gender identity",
          "Address concerns from other athletes sensitively",
          "Consider installing privacy curtains or partitions"
        ]
      },
      {
        heading: "Competition and Team Placement",
        text: "Questions about which team or category a transgender athlete should compete in can be complex. Prioritize the athlete's wellbeing while working within governing body guidelines.",
        tips: [
          "Follow sport-specific transgender policies",
          "Advocate for policies prioritizing inclusion",
          "Focus on participation over competitive advantage debates",
          "Support the athlete regardless of competition decisions"
        ]
      },
      {
        heading: "Supporting Athletes in Transition",
        text: "Athletes who are transitioning may face unique challenges including changes in physical ability, mental health struggles, and social adjustment. Provide consistent support throughout their journey.",
        tips: [
          "Check in regularly about their needs",
          "Be flexible with expectations during transition",
          "Connect them with appropriate resources",
          "Maintain their place on the team"
        ]
      }
    ]
  },
  {
    id: "communication-strategies",
    title: "Effective Communication Strategies",
    icon: <MessageCircle className="h-5 w-5" />,
    category: "general",
    content: [
      {
        heading: "Inclusive Language",
        text: "The language you use sets the tone for your entire team. Adopting inclusive language demonstrates respect and creates a welcoming environment for all athletes.",
        tips: [
          "Say 'athletes' or 'team' instead of 'guys'",
          "Avoid gendered assumptions in examples",
          "Use 'partner' instead of 'boyfriend/girlfriend'",
          "Include diverse examples when discussing relationships"
        ]
      },
      {
        heading: "Having Difficult Conversations",
        text: "As a coach, you may need to address sensitive topics including discrimination, coming out, or conflicts related to LGBTQ+ issues. Approach these conversations with empathy and openness.",
        tips: [
          "Choose private, comfortable settings",
          "Listen more than you speak",
          "Validate feelings before problem-solving",
          "Follow up after initial conversations"
        ]
      },
      {
        heading: "Educating Your Team",
        text: "Proactive education helps prevent issues and builds a more inclusive team culture. Incorporate diversity and inclusion into regular team activities and discussions.",
        tips: [
          "Include LGBTQ+ topics in team meetings",
          "Invite speakers from LGBTQ+ organizations",
          "Share resources and educational materials",
          "Lead discussions on respect and inclusion"
        ]
      }
    ]
  },
  {
    id: "crisis-response",
    title: "Crisis Response and Support",
    icon: <Shield className="h-5 w-5" />,
    category: "general",
    content: [
      {
        heading: "Responding to Discrimination Incidents",
        text: "When discrimination occurs, swift and appropriate action is essential. Your response demonstrates your commitment to inclusion and affects the safety of LGBTQ+ athletes.",
        tips: [
          "Intervene immediately to stop harmful behavior",
          "Support the affected athlete privately",
          "Document incidents thoroughly",
          "Follow established reporting procedures"
        ]
      },
      {
        heading: "Mental Health Awareness",
        text: "LGBTQ+ individuals face higher rates of mental health challenges due to discrimination and social stigma. Be aware of warning signs and know how to connect athletes with support.",
        tips: [
          "Learn warning signs of mental health struggles",
          "Know local LGBTQ+-affirming mental health resources",
          "Create an open-door policy for athletes",
          "Take all concerns seriously"
        ]
      },
      {
        heading: "Emergency Resources",
        text: "Have emergency resources readily available for athletes in crisis. This includes mental health hotlines, local LGBTQ+ organizations, and support services.",
        tips: [
          "Keep a list of LGBTQ+ support hotlines",
          "Know local LGBTQ+ youth organizations",
          "Connect with school counselors or HR",
          "Have protocols for urgent situations"
        ]
      }
    ]
  }
];

const CoachesHandbook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "lgbtq" | "transgender" | "general">("all");

  const filteredSections = useMemo(() => {
    return handbookSections.filter((section) => {
      const matchesCategory = selectedCategory === "all" || section.category === selectedCategory;
      
      if (!searchQuery.trim()) return matchesCategory;
      
      const query = searchQuery.toLowerCase();
      const matchesTitle = section.title.toLowerCase().includes(query);
      const matchesContent = section.content.some(
        (item) =>
          item.heading.toLowerCase().includes(query) ||
          item.text.toLowerCase().includes(query) ||
          item.tips?.some((tip) => tip.toLowerCase().includes(query))
      );
      
      return matchesCategory && (matchesTitle || matchesContent);
    });
  }, [searchQuery, selectedCategory]);

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-primary/30 text-foreground rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;
    let y = 20;

    // Title
    doc.setFontSize(24);
    doc.setTextColor(79, 70, 229);
    doc.text("Coaches Handbook", pageWidth / 2, y, { align: "center" });
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Supporting LGBTQ+ and Transgender Athletes", pageWidth / 2, y, { align: "center" });
    y += 20;

    // Content
    handbookSections.forEach((section) => {
      // Check for page break
      if (y > 250) {
        doc.addPage();
        y = 20;
      }

      // Section title
      doc.setFontSize(16);
      doc.setTextColor(79, 70, 229);
      doc.text(section.title, margin, y);
      y += 10;

      section.content.forEach((item) => {
        if (y > 250) {
          doc.addPage();
          y = 20;
        }

        // Heading
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        doc.setFont("helvetica", "bold");
        doc.text(item.heading, margin, y);
        y += 7;

        // Text
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        const textLines = doc.splitTextToSize(item.text, maxWidth);
        doc.text(textLines, margin, y);
        y += textLines.length * 5 + 5;

        // Tips
        if (item.tips && item.tips.length > 0) {
          doc.setFontSize(10);
          doc.setTextColor(60, 60, 60);
          item.tips.forEach((tip) => {
            if (y > 270) {
              doc.addPage();
              y = 20;
            }
            const tipLines = doc.splitTextToSize(`• ${tip}`, maxWidth - 5);
            doc.text(tipLines, margin + 5, y);
            y += tipLines.length * 5;
          });
          y += 5;
        }

        y += 5;
      });

      y += 10;
    });

    // Footer on each page
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`EDI Sports - Coaches Handbook | Page ${i} of ${pageCount}`, pageWidth / 2, 290, { align: "center" });
    }

    doc.save("coaches-handbook-lgbtq-transgender.pdf");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-campaign-end bg-clip-text text-transparent">
              Coaches Handbook
            </h1>
            <p className="text-muted-foreground mt-2">
              A comprehensive guide for coaches supporting LGBTQ+ and transgender athletes
            </p>
          </div>
          <Button onClick={generatePDF} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search handbook for keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory("all")}
                >
                  All Topics
                </Badge>
                <Badge
                  variant={selectedCategory === "lgbtq" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory("lgbtq")}
                >
                  LGBTQ+
                </Badge>
                <Badge
                  variant={selectedCategory === "transgender" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory("transgender")}
                >
                  Transgender
                </Badge>
                <Badge
                  variant={selectedCategory === "general" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory("general")}
                >
                  General
                </Badge>
              </div>
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-4">
                Found {filteredSections.length} section{filteredSections.length !== 1 ? "s" : ""} matching "{searchQuery}"
              </p>
            )}
          </CardContent>
        </Card>

        {/* Handbook Content */}
        {filteredSections.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No sections found matching your search. Try different keywords.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredSections.map((section) => (
              <Card key={section.id}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {section.icon}
                    </div>
                    <div>
                      <CardTitle>{highlightText(section.title, searchQuery)}</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary" className="mt-1">
                          {section.category === "lgbtq" ? "LGBTQ+" : section.category === "transgender" ? "Transgender" : "General"}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    {section.content.map((item, index) => (
                      <AccordionItem key={index} value={`${section.id}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {highlightText(item.heading, searchQuery)}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-4">
                            {highlightText(item.text, searchQuery)}
                          </p>
                          {item.tips && item.tips.length > 0 && (
                            <div className="bg-muted/50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2 text-sm">Quick Tips:</h4>
                              <ul className="space-y-2">
                                {item.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex} className="flex items-start gap-2 text-sm">
                                    <span className="text-primary mt-1">•</span>
                                    <span>{highlightText(tip, searchQuery)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Quick Reference Card */}
        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-campaign-end/5">
          <CardHeader>
            <CardTitle>Quick Reference: Key Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Respect</h4>
                <p className="text-sm text-muted-foreground">Use correct names and pronouns. Never out an athlete without consent.</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Inclusion</h4>
                <p className="text-sm text-muted-foreground">Create environments where all athletes feel welcome and valued.</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Action</h4>
                <p className="text-sm text-muted-foreground">Address discrimination immediately. Be an active ally, not a bystander.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoachesHandbook;
