import jsPDF from "jspdf";

const MARGIN = 20;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const addHeader = (doc: jsPDF, title: string, subtitle: string) => {
  doc.setFillColor(88, 28, 135); // Purple
  doc.rect(0, 0, PAGE_WIDTH, 50, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text(title, MARGIN, 30);
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(subtitle, MARGIN, 42);
  
  doc.setTextColor(0, 0, 0);
};

const addSectionTitle = (doc: jsPDF, title: string, y: number): number => {
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(88, 28, 135);
  doc.text(title, MARGIN, y);
  return y + 8;
};

const addParagraph = (doc: jsPDF, text: string, y: number): number => {
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
  doc.text(lines, MARGIN, y);
  return y + lines.length * 5 + 4;
};

const addBulletPoint = (doc: jsPDF, text: string, y: number): number => {
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  doc.text("•", MARGIN + 2, y);
  const lines = doc.splitTextToSize(text, CONTENT_WIDTH - 10);
  doc.text(lines, MARGIN + 8, y);
  return y + lines.length * 5 + 2;
};

const checkPageBreak = (doc: jsPDF, y: number, neededSpace: number = 30): number => {
  if (y + neededSpace > PAGE_HEIGHT - MARGIN) {
    doc.addPage();
    return MARGIN + 10;
  }
  return y;
};

const addFooter = (doc: jsPDF) => {
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(`EDI Sports Campaign | Page ${i} of ${pageCount}`, PAGE_WIDTH / 2, PAGE_HEIGHT - 10, { align: "center" });
    doc.text("© 2024 EDI Sports - For organizational use", PAGE_WIDTH / 2, PAGE_HEIGHT - 5, { align: "center" });
  }
};

export const generateInclusionPolicyPDF = () => {
  const doc = new jsPDF();
  
  addHeader(doc, "LGBTQ+ Inclusion Policy Template", "Comprehensive Policy Framework for Sports Organizations");
  
  let y = 65;
  
  y = addSectionTitle(doc, "1. Policy Statement", y);
  y = addParagraph(doc, "[Organization Name] is committed to creating an inclusive, safe, and welcoming environment for all participants regardless of sexual orientation, gender identity, or gender expression. We believe that sport should be accessible to everyone and that diversity strengthens our organization and community.", y);
  
  y = addSectionTitle(doc, "2. Scope", y + 4);
  y = addParagraph(doc, "This policy applies to all members, athletes, coaches, officials, staff, volunteers, and spectators involved in any capacity with [Organization Name]. This includes all activities, programs, competitions, training sessions, and events organized or sanctioned by the organization.", y);
  
  y = addSectionTitle(doc, "3. Non-Discrimination Statement", y + 4);
  y = addParagraph(doc, "[Organization Name] prohibits discrimination, harassment, and bullying based on:", y);
  y = addBulletPoint(doc, "Sexual orientation (including lesbian, gay, bisexual, pansexual, asexual, and questioning individuals)", y);
  y = addBulletPoint(doc, "Gender identity (including transgender, non-binary, genderqueer, and gender non-conforming individuals)", y);
  y = addBulletPoint(doc, "Gender expression (how individuals present their gender through appearance, behavior, or other means)", y);
  y = addBulletPoint(doc, "Intersex status or characteristics", y);
  y = addBulletPoint(doc, "HIV/AIDS status or perceived status", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "4. Inclusive Language Guidelines", y + 4);
  y = addParagraph(doc, "All official communications, documents, and verbal interactions should use inclusive language:", y);
  y = addBulletPoint(doc, "Use gender-neutral terms such as 'athletes,' 'participants,' or 'team members' instead of gendered terms", y);
  y = addBulletPoint(doc, "Respect individuals' chosen names and pronouns, regardless of legal documentation", y);
  y = addBulletPoint(doc, "Avoid assumptions about relationships or family structures", y);
  y = addBulletPoint(doc, "Include LGBTQ+ individuals and families in marketing materials and communications", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "5. Facility Access Policy", y + 4);
  y = addParagraph(doc, "All individuals have the right to access facilities consistent with their gender identity:", y);
  y = addBulletPoint(doc, "Transgender and non-binary individuals may use changing rooms and bathrooms that align with their gender identity", y);
  y = addBulletPoint(doc, "Private changing areas or single-occupancy facilities should be available for anyone who requests them", y);
  y = addBulletPoint(doc, "No individual shall be required to provide proof of gender identity to access appropriate facilities", y);
  y = addBulletPoint(doc, "Staff shall be trained to handle facility access questions with sensitivity and discretion", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "6. Participation Guidelines", y + 4);
  y = addParagraph(doc, "Participation in programs and competitions shall be inclusive:", y);
  y = addBulletPoint(doc, "Recreational programs: All individuals may participate according to their gender identity without restriction", y);
  y = addBulletPoint(doc, "Competitive programs: Follow applicable governing body guidelines while prioritizing inclusion where discretion is permitted", y);
  y = addBulletPoint(doc, "Youth programs: Age-appropriate inclusion with particular emphasis on creating safe environments", y);
  y = addBulletPoint(doc, "Consider creating additional categories or mixed-gender opportunities where appropriate", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "7. Training Requirements", y + 4);
  y = addParagraph(doc, "Mandatory training for all staff and volunteers:", y);
  y = addBulletPoint(doc, "Annual LGBTQ+ inclusion training covering terminology, best practices, and legal requirements", y);
  y = addBulletPoint(doc, "Specialized training for coaches on creating inclusive team environments", y);
  y = addBulletPoint(doc, "Bystander intervention training to address discrimination when witnessed", y);
  y = addBulletPoint(doc, "Training records shall be maintained and compliance monitored", y);
  
  y = checkPageBreak(doc, y, 70);
  
  y = addSectionTitle(doc, "8. Reporting and Response Procedures", y + 4);
  y = addParagraph(doc, "Clear procedures for addressing violations:", y);
  y = addBulletPoint(doc, "Multiple reporting channels: designated EDI officer, anonymous online form, and phone hotline", y);
  y = addBulletPoint(doc, "All reports will be investigated within 5 business days of receipt", y);
  y = addBulletPoint(doc, "Complainants will be protected from retaliation", y);
  y = addBulletPoint(doc, "Support services will be offered to affected individuals", y);
  y = addBulletPoint(doc, "Disciplinary measures may include warnings, suspension, or expulsion depending on severity", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "9. Policy Review", y + 4);
  y = addParagraph(doc, "This policy will be reviewed annually by the Board of Directors in consultation with LGBTQ+ stakeholders and updated as needed to reflect best practices, legal requirements, and community feedback. The next scheduled review date is: [Insert Date].", y);
  
  y = checkPageBreak(doc, y, 40);
  
  y = addSectionTitle(doc, "10. Adoption and Signatures", y + 4);
  y = addParagraph(doc, "This policy was adopted on [Date] by [Organization Name] Board of Directors.", y);
  y += 15;
  doc.setFontSize(10);
  doc.text("_____________________________", MARGIN, y);
  doc.text("_____________________________", MARGIN + 90, y);
  y += 5;
  doc.text("Chair/President Signature", MARGIN, y);
  doc.text("Date", MARGIN + 90, y);
  
  addFooter(doc);
  return doc;
};

export const generateFacilityGuidelinesPDF = () => {
  const doc = new jsPDF();
  
  addHeader(doc, "Facility Access Guidelines", "Creating Safe and Inclusive Spaces for All Athletes");
  
  let y = 65;
  
  y = addSectionTitle(doc, "1. Purpose and Scope", y);
  y = addParagraph(doc, "These guidelines establish standards for creating inclusive facility access across all [Organization Name] venues. They apply to changing rooms, bathrooms, showers, and any other gendered facilities. The goal is to ensure all athletes feel safe, respected, and able to participate fully.", y);
  
  y = addSectionTitle(doc, "2. Core Principles", y + 4);
  y = addBulletPoint(doc, "Dignity: Every individual deserves to be treated with respect and have their identity affirmed", y);
  y = addBulletPoint(doc, "Privacy: All athletes have the right to privacy, and options should accommodate varying comfort levels", y);
  y = addBulletPoint(doc, "Safety: Physical and emotional safety are paramount for all facility users", y);
  y = addBulletPoint(doc, "Inclusion: Policies should enable participation, not create barriers", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "3. Changing Room and Bathroom Access", y + 4);
  y = addParagraph(doc, "General Guidelines:", y);
  y = addBulletPoint(doc, "All individuals may use facilities that correspond with their gender identity", y);
  y = addBulletPoint(doc, "No documentation, medical procedures, or 'proof' of gender identity shall be required", y);
  y = addBulletPoint(doc, "Staff should not question or challenge anyone's facility choice", y);
  y = addBulletPoint(doc, "If concerns arise, they should be directed to the designated EDI officer", y);
  
  y = addParagraph(doc, "Privacy Options (available to ALL athletes who request them):", y);
  y = addBulletPoint(doc, "Private changing cubicles within main changing areas", y);
  y = addBulletPoint(doc, "Individual shower stalls with curtains or doors", y);
  y = addBulletPoint(doc, "Single-occupancy bathrooms and changing rooms", y);
  y = addBulletPoint(doc, "Scheduled private changing times if requested", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "4. Facility Design Recommendations", y + 4);
  y = addParagraph(doc, "For new construction or renovations:", y);
  y = addBulletPoint(doc, "Include at least one single-occupancy, gender-neutral bathroom per facility", y);
  y = addBulletPoint(doc, "Install private changing cubicles in all changing rooms", y);
  y = addBulletPoint(doc, "Provide individual shower stalls rather than open showers", y);
  y = addBulletPoint(doc, "Consider universal design principles that benefit all users", y);
  y = addBulletPoint(doc, "Use inclusive signage (e.g., 'All-Gender Restroom' with appropriate symbols)", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "5. Cost-Effective Immediate Solutions", y + 4);
  y = addParagraph(doc, "Low-cost improvements for existing facilities:", y);
  y = addBulletPoint(doc, "Add curtains to existing shower areas (approximately $50-100 per curtain)", y);
  y = addBulletPoint(doc, "Install privacy screens or curtains in changing areas ($100-300 per area)", y);
  y = addBulletPoint(doc, "Designate existing single-occupancy spaces as gender-neutral (signage only)", y);
  y = addBulletPoint(doc, "Create scheduled 'quiet changing times' for athletes who need privacy", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "6. Staff Training Requirements", y + 4);
  y = addParagraph(doc, "All facility staff must complete training on:", y);
  y = addBulletPoint(doc, "Understanding gender identity and transgender experiences", y);
  y = addBulletPoint(doc, "Proper responses to questions about facility access", y);
  y = addBulletPoint(doc, "De-escalation techniques if conflicts arise", y);
  y = addBulletPoint(doc, "Reporting procedures for discrimination or harassment", y);
  y = addBulletPoint(doc, "Creating welcoming environments for all athletes", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "7. Responding to Concerns", y + 4);
  y = addParagraph(doc, "If another facility user expresses discomfort:", y);
  y = addBulletPoint(doc, "Affirm that all individuals have the right to use facilities matching their gender identity", y);
  y = addBulletPoint(doc, "Offer the concerned individual a private facility option", y);
  y = addBulletPoint(doc, "Never ask a transgender or non-binary person to use a different facility", y);
  y = addBulletPoint(doc, "Document the interaction and report to the EDI officer", y);
  
  y = checkPageBreak(doc, y, 40);
  
  y = addSectionTitle(doc, "8. Implementation Checklist", y + 4);
  y = addBulletPoint(doc, "☐ Audit current facilities for privacy options", y);
  y = addBulletPoint(doc, "☐ Update signage to be inclusive", y);
  y = addBulletPoint(doc, "☐ Train all staff on these guidelines", y);
  y = addBulletPoint(doc, "☐ Communicate policy to all members", y);
  y = addBulletPoint(doc, "☐ Establish feedback mechanism for ongoing improvement", y);
  
  addFooter(doc);
  return doc;
};

export const generateTransgenderFrameworkPDF = () => {
  const doc = new jsPDF();
  
  addHeader(doc, "Transgender Athlete Participation", "Evidence-Based Framework for Inclusive Sport");
  
  let y = 65;
  
  y = addSectionTitle(doc, "1. Introduction", y);
  y = addParagraph(doc, "This framework provides guidance for developing transgender athlete participation policies that balance inclusion with considerations of fairness. It is designed to be adaptable to different levels of competition and organizational contexts, from recreational to elite sport.", y);
  
  y = addSectionTitle(doc, "2. Guiding Principles", y + 4);
  y = addBulletPoint(doc, "Inclusion: Sport should be accessible to all, and participation has significant physical and mental health benefits", y);
  y = addBulletPoint(doc, "Dignity: Transgender athletes deserve respect and should not face unnecessary barriers or invasive requirements", y);
  y = addBulletPoint(doc, "Evidence-Based: Policies should be informed by current scientific understanding, not assumptions", y);
  y = addBulletPoint(doc, "Proportionality: Requirements should be proportional to the level of competition", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "3. Recreational and Community Sport", y + 4);
  y = addParagraph(doc, "For recreational programs, social sport, and community-level competition:", y);
  y = addBulletPoint(doc, "Transgender athletes should participate according to their gender identity without restriction", y);
  y = addBulletPoint(doc, "No medical interventions, hormone levels, or documentation should be required", y);
  y = addBulletPoint(doc, "The focus should be on participation, enjoyment, and community building", y);
  y = addBulletPoint(doc, "This approach aligns with the IOC's 2021 Framework recommendation for inclusive participation", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "4. Competitive Sport", y + 4);
  y = addParagraph(doc, "For competitive sport, organizations should consider:", y);
  y = addBulletPoint(doc, "Following the applicable national or international federation guidelines where they exist", y);
  y = addBulletPoint(doc, "If no governing body guidelines exist, developing sport-specific policies based on available evidence", y);
  y = addBulletPoint(doc, "Implementing case-by-case review processes with transgender athlete input", y);
  y = addBulletPoint(doc, "Prioritizing the least restrictive approach that maintains competitive integrity", y);
  y = addBulletPoint(doc, "Avoiding blanket bans that exclude transgender athletes entirely", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "5. Current Scientific Understanding", y + 4);
  y = addParagraph(doc, "Key points from current research:", y);
  y = addBulletPoint(doc, "Physical characteristics vary significantly among all athletes, not just transgender athletes", y);
  y = addBulletPoint(doc, "Hormone therapy affects physical performance, with changes occurring over 1-3 years", y);
  y = addBulletPoint(doc, "There is no single 'male' or 'female' body type; athletic advantage is multifactorial", y);
  y = addBulletPoint(doc, "The number of transgender athletes competing is small, and fears of 'dominance' are not supported by evidence", y);
  y = addBulletPoint(doc, "Exclusionary policies have documented negative mental health impacts on transgender individuals", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "6. Implementation Recommendations", y + 4);
  y = addBulletPoint(doc, "Form an inclusive policy development committee with transgender athlete representation", y);
  y = addBulletPoint(doc, "Consult with LGBTQ+ organizations and medical experts", y);
  y = addBulletPoint(doc, "Communicate policies clearly and respectfully to all stakeholders", y);
  y = addBulletPoint(doc, "Provide training for coaches, officials, and administrators", y);
  y = addBulletPoint(doc, "Establish confidential processes for transgender athletes to participate", y);
  y = addBulletPoint(doc, "Review and update policies regularly as understanding evolves", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "7. Privacy and Confidentiality", y + 4);
  y = addParagraph(doc, "Protecting transgender athletes' privacy:", y);
  y = addBulletPoint(doc, "Transgender status should be treated as confidential medical information", y);
  y = addBulletPoint(doc, "Only staff who need to know for policy implementation should have access", y);
  y = addBulletPoint(doc, "Transgender athletes should control disclosure of their status to teammates", y);
  y = addBulletPoint(doc, "Records should be stored securely and separately from general athlete files", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "8. Support Services", y + 4);
  y = addBulletPoint(doc, "Designate a point of contact for transgender athlete questions and support", y);
  y = addBulletPoint(doc, "Provide resources on LGBTQ+ support organizations", y);
  y = addBulletPoint(doc, "Ensure mental health support is available and LGBTQ+-affirming", y);
  y = addBulletPoint(doc, "Create ally networks within the organization", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "9. Legal Considerations", y + 4);
  y = addParagraph(doc, "Organizations should be aware of:", y);
  y = addBulletPoint(doc, "Equality Act protections against discrimination based on gender reassignment", y);
  y = addBulletPoint(doc, "Human Rights Act considerations for privacy and dignity", y);
  y = addBulletPoint(doc, "Potential legal challenges to both exclusionary and inclusive policies", y);
  y = addBulletPoint(doc, "The importance of documenting policy rationale and consultation processes", y);
  
  addFooter(doc);
  return doc;
};

export const generateEDITrainingPDF = () => {
  const doc = new jsPDF();
  
  addHeader(doc, "EDI Training Program Template", "Comprehensive Staff Training Curriculum");
  
  let y = 65;
  
  y = addSectionTitle(doc, "Program Overview", y);
  y = addParagraph(doc, "This training program is designed to equip coaches, administrators, officials, and volunteers with the knowledge and skills to create inclusive environments for LGBTQ+ athletes and participants. The program consists of 6 modules totaling approximately 4-6 hours of training.", y);
  
  y = addSectionTitle(doc, "Module 1: Understanding LGBTQ+ Identities (45-60 min)", y + 4);
  y = addParagraph(doc, "Learning Objectives:", y);
  y = addBulletPoint(doc, "Define key LGBTQ+ terminology accurately and respectfully", y);
  y = addBulletPoint(doc, "Understand the difference between sexual orientation and gender identity", y);
  y = addBulletPoint(doc, "Recognize the diversity within LGBTQ+ communities", y);
  
  y = addParagraph(doc, "Key Content:", y);
  y = addBulletPoint(doc, "The LGBTQ+ acronym and what each letter represents", y);
  y = addBulletPoint(doc, "Gender identity vs. gender expression vs. biological sex", y);
  y = addBulletPoint(doc, "Coming out: what it means and why it matters", y);
  y = addBulletPoint(doc, "Common misconceptions and how to address them", y);
  
  y = checkPageBreak(doc, y, 70);
  
  y = addSectionTitle(doc, "Module 2: The LGBTQ+ Experience in Sport (45-60 min)", y + 4);
  y = addParagraph(doc, "Learning Objectives:", y);
  y = addBulletPoint(doc, "Understand barriers LGBTQ+ people face in sport", y);
  y = addBulletPoint(doc, "Recognize the impact of exclusion on mental health and participation", y);
  y = addBulletPoint(doc, "Appreciate the benefits of inclusive sporting environments", y);
  
  y = addParagraph(doc, "Key Content:", y);
  y = addBulletPoint(doc, "Statistics on LGBTQ+ participation and dropout rates in sport", y);
  y = addBulletPoint(doc, "Personal stories from LGBTQ+ athletes (video testimonials)", y);
  y = addBulletPoint(doc, "Research on mental health impacts of discrimination in sport", y);
  y = addBulletPoint(doc, "Case studies of successful inclusive sports organizations", y);
  
  y = checkPageBreak(doc, y, 70);
  
  y = addSectionTitle(doc, "Module 3: Recognizing and Addressing Discrimination (60 min)", y + 4);
  y = addParagraph(doc, "Learning Objectives:", y);
  y = addBulletPoint(doc, "Identify different forms of discrimination, from overt to subtle", y);
  y = addBulletPoint(doc, "Understand the impact of microaggressions", y);
  y = addBulletPoint(doc, "Know how to respond when witnessing discrimination", y);
  
  y = addParagraph(doc, "Key Content:", y);
  y = addBulletPoint(doc, "Types of discrimination: direct, indirect, harassment, victimisation", y);
  y = addBulletPoint(doc, "Common microaggressions and their cumulative impact", y);
  y = addBulletPoint(doc, "Recognizing discriminatory 'jokes' and language", y);
  y = addBulletPoint(doc, "Role-play scenarios for intervention practice", y);
  
  y = checkPageBreak(doc, y, 70);
  
  y = addSectionTitle(doc, "Module 4: Creating Inclusive Environments (60 min)", y + 4);
  y = addParagraph(doc, "Learning Objectives:", y);
  y = addBulletPoint(doc, "Apply practical strategies to create welcoming spaces", y);
  y = addBulletPoint(doc, "Use inclusive language confidently", y);
  y = addBulletPoint(doc, "Design inclusive programs and communications", y);
  
  y = addParagraph(doc, "Key Content:", y);
  y = addBulletPoint(doc, "Inclusive language guide: pronouns, terminology, avoiding assumptions", y);
  y = addBulletPoint(doc, "Visual cues: rainbow lanyards, inclusive posters, signage", y);
  y = addBulletPoint(doc, "Program design: registration forms, team structures, uniforms", y);
  y = addBulletPoint(doc, "Creating psychological safety for coming out", y);
  
  y = checkPageBreak(doc, y, 70);
  
  y = addSectionTitle(doc, "Module 5: Bystander Intervention (45 min)", y + 4);
  y = addParagraph(doc, "Learning Objectives:", y);
  y = addBulletPoint(doc, "Understand the importance of bystander intervention", y);
  y = addBulletPoint(doc, "Learn multiple intervention strategies", y);
  y = addBulletPoint(doc, "Practice responses in safe scenarios", y);
  
  y = addParagraph(doc, "The 5D's of Bystander Intervention:", y);
  y = addBulletPoint(doc, "Direct: Directly address the situation", y);
  y = addBulletPoint(doc, "Distract: Create a distraction to defuse the situation", y);
  y = addBulletPoint(doc, "Delegate: Ask someone else to help", y);
  y = addBulletPoint(doc, "Delay: Check in with the person after the incident", y);
  y = addBulletPoint(doc, "Document: Record the incident for reporting", y);
  
  y = checkPageBreak(doc, y, 70);
  
  y = addSectionTitle(doc, "Module 6: Legal Framework and Reporting (45 min)", y + 4);
  y = addParagraph(doc, "Learning Objectives:", y);
  y = addBulletPoint(doc, "Understand legal protections for LGBTQ+ individuals", y);
  y = addBulletPoint(doc, "Know organizational reporting procedures", y);
  y = addBulletPoint(doc, "Understand roles and responsibilities in addressing discrimination", y);
  
  y = addParagraph(doc, "Key Content:", y);
  y = addBulletPoint(doc, "Equality Act 2010 protections", y);
  y = addBulletPoint(doc, "Organizational policies and procedures", y);
  y = addBulletPoint(doc, "How to document and report incidents", y);
  y = addBulletPoint(doc, "Supporting complainants through the process", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "Assessment and Certification", y + 4);
  y = addParagraph(doc, "Participants must complete:", y);
  y = addBulletPoint(doc, "Attendance at all 6 modules (or approved catch-up sessions)", y);
  y = addBulletPoint(doc, "Online assessment with 80% pass mark", y);
  y = addBulletPoint(doc, "Reflection exercise on applying learnings to their role", y);
  y = addParagraph(doc, "Upon completion, participants receive a certificate valid for 2 years, after which refresher training is required.", y);
  
  addFooter(doc);
  return doc;
};

export const generateIncidentProtocolPDF = () => {
  const doc = new jsPDF();
  
  addHeader(doc, "Incident Reporting & Response", "Protocol for Handling Discrimination Complaints");
  
  let y = 65;
  
  y = addSectionTitle(doc, "1. Purpose", y);
  y = addParagraph(doc, "This protocol establishes clear procedures for receiving, investigating, and resolving complaints of discrimination, harassment, or bullying based on sexual orientation, gender identity, or gender expression within [Organization Name]. The goal is to ensure all complaints are handled fairly, confidentially, and promptly.", y);
  
  y = addSectionTitle(doc, "2. Reporting Channels", y + 4);
  y = addParagraph(doc, "Multiple channels are available to accommodate different comfort levels:", y);
  y = addBulletPoint(doc, "In Person: Designated EDI Officer or any trained staff member", y);
  y = addBulletPoint(doc, "Email: [edi@organization.org] - monitored daily", y);
  y = addBulletPoint(doc, "Online Form: Anonymous reporting available at [website/report]", y);
  y = addBulletPoint(doc, "Phone: Dedicated hotline [number] - voicemail outside hours", y);
  y = addBulletPoint(doc, "Third Party: Reports can be made through parents, guardians, or advocates", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "3. What to Report", y + 4);
  y = addParagraph(doc, "Reports should be made for any incident involving:", y);
  y = addBulletPoint(doc, "Direct discrimination: treating someone worse because of their LGBTQ+ status", y);
  y = addBulletPoint(doc, "Harassment: unwanted conduct related to LGBTQ+ status that creates a hostile environment", y);
  y = addBulletPoint(doc, "Bullying: repeated negative behavior targeting LGBTQ+ individuals", y);
  y = addBulletPoint(doc, "Microaggressions: subtle, often unintentional, discriminatory comments or actions", y);
  y = addBulletPoint(doc, "Policy violations: breaches of the organization's inclusion policy", y);
  y = addBulletPoint(doc, "Outing: disclosing someone's LGBTQ+ status without permission", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "4. Initial Response (Within 24-48 Hours)", y + 4);
  y = addParagraph(doc, "Upon receiving a report:", y);
  y = addBulletPoint(doc, "Acknowledge receipt and thank the reporter for coming forward", y);
  y = addBulletPoint(doc, "Assess immediate safety concerns and take protective action if needed", y);
  y = addBulletPoint(doc, "Assign a case handler (cannot be anyone involved in the incident)", y);
  y = addBulletPoint(doc, "Explain the process and likely timeline to the complainant", y);
  y = addBulletPoint(doc, "Provide information about support services available", y);
  y = addBulletPoint(doc, "Document all interactions in the confidential case file", y);
  
  y = checkPageBreak(doc, y, 70);
  
  y = addSectionTitle(doc, "5. Investigation Process (5-15 Business Days)", y + 4);
  y = addParagraph(doc, "Standard investigation steps:", y);
  y = addBulletPoint(doc, "Detailed interview with complainant to gather full account", y);
  y = addBulletPoint(doc, "Notify respondent of complaint and their right to respond", y);
  y = addBulletPoint(doc, "Interview respondent with opportunity to provide their account", y);
  y = addBulletPoint(doc, "Interview witnesses confidentially", y);
  y = addBulletPoint(doc, "Gather any documentary or physical evidence", y);
  y = addBulletPoint(doc, "Review relevant policies and previous incidents", y);
  y = addBulletPoint(doc, "Compile findings in an investigation report", y);
  
  y = checkPageBreak(doc, y, 60);
  
  y = addSectionTitle(doc, "6. Decision Making", y + 4);
  y = addParagraph(doc, "Findings will be determined on the 'balance of probabilities' standard:", y);
  y = addBulletPoint(doc, "Substantiated: Evidence supports the complaint on balance of probabilities", y);
  y = addBulletPoint(doc, "Unsubstantiated: Insufficient evidence to support or refute the complaint", y);
  y = addBulletPoint(doc, "Unfounded: Evidence clearly demonstrates the complaint did not occur", y);
  y = addParagraph(doc, "The decision will be made by the EDI Committee (minimum 3 members) to ensure fairness and reduce bias.", y);
  
  y = checkPageBreak(doc, y, 70);
  
  y = addSectionTitle(doc, "7. Possible Outcomes", y + 4);
  y = addParagraph(doc, "If a complaint is substantiated, outcomes may include:", y);
  y = addBulletPoint(doc, "Formal written warning placed on record", y);
  y = addBulletPoint(doc, "Mandatory additional EDI training", y);
  y = addBulletPoint(doc, "Temporary suspension from activities (duration varies)", y);
  y = addBulletPoint(doc, "Removal from leadership or coaching positions", y);
  y = addBulletPoint(doc, "Permanent ban from the organization", y);
  y = addBulletPoint(doc, "Referral to external authorities if criminal conduct is suspected", y);
  y = addParagraph(doc, "Outcomes will be proportionate to the severity of the conduct and any previous incidents.", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "8. Support for Complainants", y + 4);
  y = addBulletPoint(doc, "Designated support person throughout the process", y);
  y = addBulletPoint(doc, "Access to counseling services (organization-funded)", y);
  y = addBulletPoint(doc, "Protection from retaliation (monitored for 12 months)", y);
  y = addBulletPoint(doc, "Option to modify participation arrangements if needed", y);
  y = addBulletPoint(doc, "Regular updates on case progress", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "9. Appeals Process", y + 4);
  y = addParagraph(doc, "Either party may appeal the decision within 14 days on grounds of:", y);
  y = addBulletPoint(doc, "Procedural irregularity that affected the outcome", y);
  y = addBulletPoint(doc, "New evidence that was not available during investigation", y);
  y = addBulletPoint(doc, "Disproportionate or inappropriate outcome", y);
  y = addParagraph(doc, "Appeals will be reviewed by a separate panel who were not involved in the original decision.", y);
  
  y = checkPageBreak(doc, y, 50);
  
  y = addSectionTitle(doc, "10. Record Keeping", y + 4);
  y = addBulletPoint(doc, "All complaints and outcomes recorded in confidential database", y);
  y = addBulletPoint(doc, "Records retained for 7 years minimum", y);
  y = addBulletPoint(doc, "Annual anonymized reporting on number and types of complaints", y);
  y = addBulletPoint(doc, "Trends analyzed to inform policy improvements", y);
  
  addFooter(doc);
  return doc;
};

export const downloadPDF = (generator: () => jsPDF, filename: string) => {
  const doc = generator();
  doc.save(filename);
};
