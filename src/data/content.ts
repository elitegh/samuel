export const site = {
  name: "Samuel Murguia",
  shortName: "SM",
  tagline: "Senior Software Engineer · Generative AI · Large Language Models",
  description:
    "Senior Software Engineer with 10+ years of experience designing and shipping scalable software systems across generative AI platforms, identity security, and logistics technology.",
  email: "samurguia419@gmail.com",
  phone: "(405) 481-4121",
  location: "Georgetown, TX",
  social: {
    linkedin: "https://www.linkedin.com/in/samuel-murguia-01b8512b",
    github: "https://github.com/samm002",
  },
} as const;

export const hero = {
  headline: "SENIOR SOFTWARE",
  subheadline: "ENGINEER",
  description:
    "Building scalable, reliable systems for generative AI platforms and production software. 10+ years leading technical design, delivery, and mentoring across AI products, identity security, and marketplace platforms.",
  cta: "View Experience",
  ctaHref: "#career",
  backgroundImage: "/media/hero/hero.png",
  backgroundVideo: "/media/hero/hero.mp4",
} as const;

export const highlights = {
  title: "Impact & Highlights",
  description:
    "Scalable software systems, generative AI platforms, technical leadership, and cross-team delivery across production environments.",
  video: "/media/journey/highlights.mp4",
  poster: "/media/hero/hero.png",
} as const;

export const ventures = [
  {
    id: "address",
    title: "Location",
    description: "Georgetown, TX",
    href: "https://maps.google.com/?q=Georgetown+TX",
    image: "/media/contact/location.png",
    cta: "Open map",
    external: true,
  },
  {
    id: "phone",
    title: "Phone",
    description: "(405) 481-4121",
    href: "tel:+14054814121",
    image: "/media/contact/phone.png",
    cta: "Call now",
    external: false,
  },
  {
    id: "email",
    title: "Email",
    description: "samurguia419@gmail.com",
    href: "mailto:samurguia419@gmail.com",
    image: "/media/contact/email.png",
    cta: "Send email",
    external: false,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Connect professionally and view my full work history.",
    href: "https://www.linkedin.com/in/samuel-murguia-01b8512b",
    image: "/media/contact/linkedin.png",
    cta: "Visit profile",
    external: true,
  },
  {
    id: "github",
    title: "GitHub",
    description: "Explore my repositories, code style, and technical projects.",
    href: "https://github.com/samm002",
    image: "/media/contact/github.png",
    cta: "View code",
    external: true,
  },
] as const;

export const careerClubs = [
  {
    id: "openai",
    name: "OpenAI",
    url: "https://openai.com/",
    role: "Senior Software Engineer",
    years: "Oct 2023 – Present",
    industryFocus: "Generative AI, large language models, and AI platforms",
    image: "/media/experience/openai.png",
    video: "/media/experience/openai.mp4",
    bullets: [
      "Design and develop scalable, reliable software systems powering generative AI products and platform capabilities.",
      "Solve complex technical challenges across projects and production systems supporting large language model workloads.",
      "Lead technical design and code reviews to maintain engineering quality, consistency, and long-term maintainability.",
      "Mentor engineers and provide technical guidance on system design, delivery practices, and production readiness.",
      "Architect services and APIs that support high-throughput AI platform workflows with strong reliability guarantees.",
      "Improve performance and operational resilience of production systems through profiling, refactoring, and observability.",
      "Partner with product and research stakeholders to translate ambiguous requirements into clear technical plans.",
      "Establish engineering standards for testing, deployment, and incident response across shared platform components.",
      "Drive cross-team delivery of platform features that improve developer productivity and product velocity.",
      "Contribute to roadmap planning and technical strategy for AI platform infrastructure and supporting tooling.",
    ],
  },
  {
    id: "anthropic",
    name: "Anthropic",
    url: "https://www.anthropic.com/",
    role: "Senior Software Engineer",
    years: "Mar 2022 – Sep 2023",
    industryFocus: "Generative AI, large language models, and AI safety",
    image: "/media/experience/anthropic.png",
    video: "/media/experience/anthropic.mp4",
    bullets: [
      "Design and develop scalable software systems supporting AI products and platforms across generative AI workloads.",
      "Solve complex engineering challenges involving scalability, performance, and reliability in production environments.",
      "Contribute to system architecture, technical design, and code reviews for critical platform and product services.",
      "Collaborate across engineering and research teams on technical delivery of AI safety and model-serving initiatives.",
      "Build and maintain backend services that enable safe, dependable access to large language model capabilities.",
      "Improve system throughput and latency through careful API design, caching strategies, and resource optimization.",
      "Strengthen release quality with automated testing, integration validation, and clearer ownership boundaries.",
      "Support operational excellence through monitoring, alerting, and post-incident improvements on shared services.",
      "Document architectural decisions and patterns so teams can extend systems safely and consistently.",
    ],
  },
  {
    id: "sailpoint",
    name: "SailPoint",
    role: "Software Engineer",
    years: "Jul 2018 – Feb 2022",
    industryFocus: "Identity security, identity governance, and access management",
    image: "/media/experience/sailpoint.png",
    video: "/media/experience/sailpoint.mp4",
    bullets: [
      "Developed software features for identity security, identity governance, and access management workflows.",
      "Built and maintained APIs and services supporting authentication, authorization, and policy enforcement.",
      "Improved reliability and maintainability of identity platform components through refactoring and stronger test coverage.",
      "Partnered with product and security stakeholders to deliver compliant, audit-ready access management capabilities.",
      "Resolved production issues and strengthened operational tooling for enterprise identity systems.",
    ],
  },
  {
    id: "uship",
    name: "uShip",
    role: "Software Engineer",
    years: "Jun 2015 – May 2018",
    industryFocus: "Transportation marketplace, logistics technology, and freight shipping",
    image: "/media/experience/uship.png",
    video: "/media/experience/uship.mp4",
    bullets: [
      "Built marketplace and logistics features supporting freight shipping workflows and customer-facing experiences.",
      "Developed backend services and integrations for transportation marketplace operations and partner systems.",
      "Improved application performance and data workflows used for shipping, matching, and operational reporting.",
      "Collaborated with product and engineering teams to ship reliable features in an Agile delivery environment.",
    ],
  },
] as const;

export const achievements = [
  { value: "10+", label: "Years Engineering" },
  { value: "4", label: "Companies" },
  { value: "2", label: "AI Platform Roles" },
  { value: "GenAI", label: "LLM Focus" },
  { value: "BS CS", label: "Texas Tech" },
  { value: "Production", label: "Systems Delivery" },
] as const;

export const iconicMoments = [
  {
    id: "degree",
    title: "Bachelor of Science in Computer Science",
    year: "2011–2015",
    description:
      "Texas Tech University (Lubbock, TX) — foundation in computer science that launched a career in software engineering.",
    image: "/media/journey/degree.png",
    video: null,
    url: "https://www.depts.ttu.edu/",
  },
  {
    id: "platform-engineering",
    title: "Identity & Marketplace Engineering",
    year: "2015–2022",
    description:
      "Grew from logistics marketplace development at uShip into identity security and access management engineering at SailPoint.",
    image: "/media/journey/career.png",
    video: "/media/experience/sailpoint.mp4",
  },
  {
    id: "genai-leadership",
    title: "Generative AI Platform Engineering",
    year: "2022–Present",
    description:
      "Senior Software Engineer roles at Anthropic and OpenAI — building scalable systems for large language models, AI platforms, and production AI products.",
    image: "/media/journey/remote.png",
    video: "/media/journey/highlights.mp4",
  },
] as const;

export const brandPartners = [
  "OpenAI",
  "Anthropic",
  "SailPoint",
  "uShip",
  "Texas Tech University",
  "Generative AI · LLMs",
  "System Design · Architecture",
  "APIs · Distributed Systems",
  "Identity Security",
  "Platform Engineering",
] as const;

export const navLinks = [
  { label: "Contact", href: "#ventures" },
  { label: "Highlights", href: "#highlights" },
  { label: "Experience", href: "#career" },
  { label: "Snapshot", href: "#achievements" },
  { label: "Journey", href: "#moments" },
] as const;
