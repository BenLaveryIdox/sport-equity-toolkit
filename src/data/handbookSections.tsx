import { Users, Heart, BookOpen, Shield, MessageCircle, Accessibility, CircleDot } from "lucide-react";

export interface HandbookSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: "lgbtq" | "transgender" | "disability" | "intersex" | "general";
  content: {
    heading: string;
    text: string;
    tips?: string[];
  }[];
}

export const handbookSections: HandbookSection[] = [
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
    id: "disability-inclusion-basics",
    title: "Disability Inclusion: The Basics",
    icon: <Accessibility className="h-5 w-5" />,
    category: "disability",
    content: [
      {
        heading: "Understanding Disability in Sport",
        text: "Disability encompasses a wide range of physical, sensory, intellectual, and mental health conditions. Each athlete's experience is unique, and many disabilities are invisible. Focus on abilities rather than limitations.",
        tips: [
          "Ask athletes about their needs rather than assuming",
          "Use person-first language (e.g., 'athlete with a disability')",
          "Recognize that disability exists on a spectrum",
          "Never minimize or question the legitimacy of a disability"
        ]
      },
      {
        heading: "Creating Accessible Environments",
        text: "Accessibility goes beyond physical ramps and parking. It includes communication methods, sensory considerations, scheduling flexibility, and creating a culture where athletes feel comfortable disclosing their needs.",
        tips: [
          "Audit your facility for physical accessibility barriers",
          "Provide information in multiple formats (visual, audio, written)",
          "Consider sensory needs (lighting, noise levels)",
          "Allow flexibility in training schedules for medical appointments"
        ]
      },
      {
        heading: "Adaptive Equipment and Modifications",
        text: "Many sports can be adapted to include athletes with disabilities. This might involve modified equipment, rule adjustments, or different playing formats while maintaining the competitive spirit of the sport.",
        tips: [
          "Research adaptive versions of your sport",
          "Invest in adaptive equipment when needed",
          "Work with athletes to find effective modifications",
          "Connect with Paralympic and adaptive sports organizations"
        ]
      }
    ]
  },
  {
    id: "disability-coaching-strategies",
    title: "Coaching Athletes with Disabilities",
    icon: <Accessibility className="h-5 w-5" />,
    category: "disability",
    content: [
      {
        heading: "Communication Adaptations",
        text: "Effective coaching requires adapting your communication style. Some athletes may need visual demonstrations, written instructions, simplified language, or assistive technology to fully understand coaching directions.",
        tips: [
          "Learn basic sign language for deaf/hard of hearing athletes",
          "Use visual aids and demonstrations alongside verbal instructions",
          "Check understanding without being patronizing",
          "Allow extra processing time when needed"
        ]
      },
      {
        heading: "Training Program Modifications",
        text: "Training programs should be individualized based on each athlete's abilities and goals. This doesn't mean lower expectations—it means different pathways to achievement.",
        tips: [
          "Set challenging but achievable individual goals",
          "Modify exercises while maintaining training objectives",
          "Monitor fatigue and recovery needs closely",
          "Celebrate progress on individual terms"
        ]
      },
      {
        heading: "Building Team Inclusion",
        text: "Athletes with disabilities should be fully integrated team members, not tokens or afterthoughts. This requires intentional effort to create belonging and combat ableism within team culture.",
        tips: [
          "Assign meaningful roles in team activities",
          "Address ableist comments or behavior immediately",
          "Pair athletes for peer support, not just assistance",
          "Highlight achievements of athletes with disabilities"
        ]
      }
    ]
  },
  {
    id: "intersex-athletes-basics",
    title: "Intersex Athletes: Understanding and Support",
    icon: <CircleDot className="h-5 w-5" />,
    category: "intersex",
    content: [
      {
        heading: "What Does Intersex Mean?",
        text: "Intersex is an umbrella term for people born with variations in sex characteristics that don't fit typical definitions of male or female. This includes variations in chromosomes, hormones, or anatomy. Approximately 1.7% of people are born with intersex traits.",
        tips: [
          "Intersex is about biology, not gender identity",
          "Many intersex people don't know they're intersex",
          "Avoid treating intersex as a medical problem",
          "Use 'intersex' not outdated terms like 'hermaphrodite'"
        ]
      },
      {
        heading: "Privacy and Confidentiality",
        text: "An athlete's intersex status is deeply personal medical information. Many intersex individuals have experienced trauma related to medical interventions or disclosure. Protecting their privacy is paramount.",
        tips: [
          "Never disclose an athlete's intersex status",
          "Don't require medical documentation unnecessarily",
          "Avoid questions about anatomy or medical history",
          "Create safe spaces for voluntary disclosure"
        ]
      },
      {
        heading: "Navigating Eligibility Policies",
        text: "Some sports have policies regarding testosterone levels or sex verification that disproportionately affect intersex athletes. These policies are controversial and evolving. Your role is to support the athlete regardless of policy outcomes.",
        tips: [
          "Stay informed about current policies in your sport",
          "Advocate for athlete-centered, human rights-based policies",
          "Support athletes through eligibility challenges",
          "Connect with intersex advocacy organizations"
        ]
      }
    ]
  },
  {
    id: "intersex-practical-support",
    title: "Practical Support for Intersex Athletes",
    icon: <CircleDot className="h-5 w-5" />,
    category: "intersex",
    content: [
      {
        heading: "Creating Inclusive Team Culture",
        text: "Most team members won't know if a teammate is intersex, and they don't need to. Focus on creating a generally inclusive culture that doesn't make assumptions about bodies, gender, or biology.",
        tips: [
          "Avoid assumptions about 'natural' bodies or abilities",
          "Challenge binary thinking in team discussions",
          "Don't tolerate jokes about bodies or gender",
          "Educate team on biological diversity generally"
        ]
      },
      {
        heading: "Supporting Mental Health",
        text: "Intersex athletes may carry trauma from medical interventions, social stigma, or sports policies. Be aware of mental health needs and ready to provide appropriate support.",
        tips: [
          "Know intersex-affirming mental health resources",
          "Watch for signs of stress during eligibility processes",
          "Validate feelings about unfair treatment",
          "Maintain support regardless of competition eligibility"
        ]
      },
      {
        heading: "Advocacy and Allyship",
        text: "As a coach, you can be a powerful ally for intersex athletes and advocate for policy change. This means educating yourself, speaking up, and centering intersex voices in discussions about them.",
        tips: [
          "Educate yourself through intersex-led organizations",
          "Support policy reform efforts in your sport",
          "Amplify intersex athlete voices, don't speak for them",
          "Challenge discriminatory policies and practices"
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

export const categoryLabels: Record<string, string> = {
  lgbtq: "LGBTQ+",
  transgender: "Transgender",
  disability: "Disability",
  intersex: "Intersex",
  general: "General"
};
