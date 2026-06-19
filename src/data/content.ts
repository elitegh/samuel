export const site = {
  name: "Samuel Murguia",
  shortName: "SM",
  tagline: "Senior AI/ML Engineer · Production AI Systems · MLOps",
  description:
    "Senior AI/ML Engineer portfolio showcasing production AI systems, MLOps platforms, and scalable machine learning infrastructure.",
  email: "samurguia419@gmail.com",
  phone: "(405) 481-4121",
  location: "Austin, TX",
  social: {
    linkedin: "https://www.linkedin.com/in/samuel-murguia-752639408",
    github: "https://github.com/samm002",
  },
} as const;

export const hero = {
  headline: "SENIOR AI/ML",
  subheadline: "ENGINEER",
  description:
    "Building production AI systems, MLOps platforms, and scalable machine learning infrastructure. 10+ years of experience designing and deploying large-scale systems in production environments.",
  cta: "View Experience",
  ctaHref: "#career",
  backgroundImage: "/media/hero/hero.png",
  backgroundVideo: "/media/hero/hero.mp4",
} as const;

export const highlights = {
  title: "Impact & Highlights",
  description:
    "Key achievements in production AI systems, model optimization, and ML platform development.",
  video: "/media/journey/highlights.mp4",
  poster: "/media/hero/hero.png",
} as const;

export const ventures = [
  {
    id: "address",
    title: "Location",
    description: "Austin, TX",
    href: "https://maps.google.com/?q=3005+Whisper+Oaks+Ln+Unit+A+Georgetown+TX+78628",
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
    href: "https://linkedin.com",
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
    id: "Databricks",
    name: "Databricks",
    location: "Remote · Santa Clara, CA",
    years: "Oct 2023 – Present",
    image: "/media/experience/databricks.png",
    video: "/media/experience/databricks.mp4",
    highlight:
      "Senior AI/ML Engineer architecting enterprise-scale AI/ML platforms, reducing model inference latency by 40%, and automating workflows saving 20+ engineering hours per week.",
  },
  {
    id: "solarwinds",
    name: "SolarWinds",
    location: "Austin, TX",
    years: "Mar 2021 – Sep 2023",
    image: "/media/experience/solarwinds.png",
    video: "/media/experience/solarwinds.mp4",
    highlight:
      "Senior ML Engineer improving model-training efficiency by 30% and reducing prediction latency from 800ms to 320ms through infrastructure optimization.",
  },
  {
    id: "sailpoint",
    name: "SailPoint",
    location: "Austin, TX",
    years: "Jul 2018 – Feb 2021",
    image: "/media/experience/sailpoint.png",
    video: "/media/experience/sailpoint.mp4",
    highlight:
      "ML Engineer developing predictive modeling solutions for customer segmentation and revenue forecasting, automating ETL and feature-engineering workflows.",
  },
  {
    id: "uship",
    name: "uShip",
    location: "Austin, TX",
    years: "Jun 2015 – May 2018",
    image: "/media/experience/uship.png",
    video: "/media/experience/uship.mp4",
    highlight:
      "Junior Software Engineer building data pipelines for forecasting, anomaly detection, and operational analytics using PyTorch and Scikit-learn.",
  },
] as const;

export const achievements = [
  { value: "10+", label: "Years AI/ML Engineering" },
  { value: "4", label: "Companies" },
  { value: "40%", label: "Latency Reduction" },
  { value: "20+", label: "Hours Saved Weekly" },
  { value: "2015", label: "Career Start" },
  { value: "Production-Ready", label: "AI/ML Systems" },
] as const;

export const iconicMoments = [
  {
    id: "degree",
    title: "Bachelor of Science in Computer Science",
    year: "2011-2015",
    description:
      "Texas Tech University — launched a career in software engineering and machine learning.",
    image: "/media/journey/degree.png",
    video: null,
  },
  {
    id: "ml-specialization",
    title: "Specialization in Production AI/ML Systems",
    year: "2018–Present",
    description:
      "Evolved from software engineering into ML engineering, MLOps, and production AI systems architecture.",
    image: "/media/journey/career.png",
    video: "/media/experience/databricks.mp4",
  },
  {
    id: "ai-platform-impact",
    title: "Enterprise AI/ML Platform Leadership",
    year: "2023–Present",
    description:
      "Architecting enterprise-scale AI/ML platforms, driving model optimization, and leading machine learning initiatives at Databricks.",
    image: "/media/journey/remote.png",
    video: "/media/journey/highlights.mp4",
  },
] as const;

export const brandPartners = [
  "Databricks",
  "SolarWinds",
  "SailPoint",
  "uShip",
  "Texas Tech University",
  "Production AI Systems",
  "MLOps & Platforms",
  "Deep Learning",
] as const;

export const navLinks = [
  { label: "Contact", href: "#ventures" },
  { label: "Highlights", href: "#highlights" },
  { label: "Experience", href: "#career" },
  { label: "Snapshot", href: "#achievements" },
  { label: "Journey", href: "#moments" },
] as const;
