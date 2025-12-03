import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Download, Search, BookmarkCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import QuickReferenceCard from "@/components/handbook/QuickReferenceCard";
import BookmarkButton from "@/components/handbook/BookmarkButton";
import { handbookSections, categoryLabels } from "@/data/handbookSections";
import { jsPDF } from "jspdf";

const BOOKMARKS_STORAGE_KEY = "coaches-handbook-bookmarks";

const CoachesHandbook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "lgbtq" | "transgender" | "disability" | "intersex" | "general" | "bookmarked">("all");
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (sectionId: string) => {
    setBookmarks((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = useMemo(() => {
    return handbookSections.filter((section) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "bookmarked" ? bookmarks.includes(section.id) : section.category === selectedCategory);

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
  }, [searchQuery, selectedCategory, bookmarks]);

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
    doc.text("Supporting LGBTQ+, Transgender, Disabled & Intersex Athletes", pageWidth / 2, y, { align: "center" });
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

    doc.save("coaches-handbook-inclusive-sports.pdf");
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
              A comprehensive guide for coaches supporting diverse athletes
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
                  variant={selectedCategory === "bookmarked" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory("bookmarked")}
                >
                  <BookmarkCheck className="h-3 w-3 mr-1" />
                  Bookmarked ({bookmarks.length})
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
                  variant={selectedCategory === "disability" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory("disability")}
                >
                  Disability
                </Badge>
                <Badge
                  variant={selectedCategory === "intersex" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory("intersex")}
                >
                  Intersex
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
              <p className="text-muted-foreground">
                {selectedCategory === "bookmarked"
                  ? "No bookmarked sections yet. Click the bookmark icon on any section to save it."
                  : "No sections found matching your search. Try different keywords."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredSections.map((section) => (
              <Card key={section.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {section.icon}
                      </div>
                      <div>
                        <CardTitle>{highlightText(section.title, searchQuery)}</CardTitle>
                        <CardDescription>
                          <Badge variant="secondary" className="mt-1">
                            {categoryLabels[section.category]}
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                    <BookmarkButton
                      sectionId={section.id}
                      isBookmarked={bookmarks.includes(section.id)}
                      onToggle={toggleBookmark}
                    />
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
        <QuickReferenceCard />

        {/* Key Principles */}
        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-campaign-end/5">
          <CardHeader>
            <CardTitle>Key Principles</CardTitle>
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
