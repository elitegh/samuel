export const site = {
  name: "Samuel Murguia",
  shortName: "SM",
  tagline: "Senior AI/ML Engineer · Production AI Systems · Python, MLOps & Deep Learning",
  description:
    "Senior AI/ML Engineer with 10+ years of experience designing, building, and deploying production machine learning systems across cloud-native enterprise environments.",
  email: "samurguia419@gmail.com",
  phone: "(405) 481-4121",
  location: "Austin, TX",
  social: {
    linkedin: "https://www.linkedin.com/in/samuelmurguia",
    github: "https://github.com/samm002",
  },
} as const;

export const hero = {
  headline: "SENIOR AI/ML",
  subheadline: "ENGINEER",
  description:
    "Designing and deploying production AI systems, MLOps platforms, and scalable deep-learning infrastructure. 10+ years leading end-to-end ML initiatives from architecture through monitoring and continuous optimization.",
  cta: "View Experience",
  ctaHref: "#career",
  backgroundImage: "/media/hero/hero.png",
  backgroundVideo: "/media/hero/hero.mp4",
} as const;

export const highlights = {
  title: "Impact & Highlights",
  description:
    "Production AI systems, inference optimization, automated ML pipelines, and enterprise MLOps platforms.",
  video: "/media/journey/highlights.mp4",
  poster: "/media/hero/hero.png",
} as const;

export const ventures = [
  {
    id: "address",
    title: "Location",
    description: "Austin, TX",
    href: "https://maps.google.com/?q=Austin+TX",
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
    href: "https://www.linkedin.com/in/samuelmurguia",
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
    role: "Senior AI/ML Engineer",
    location: "Remote",
    years: "Oct 2023 – Present",
    image: "/media/experience/databricks.png",
    video: "/media/experience/databricks.mp4",
    bullets: [
      "Architected enterprise-scale AI/ML platforms supporting predictive intelligence, intelligent automation, and operational decision-making.",
      "Reduced model inference latency by 30% through optimization of model-serving architecture and prediction workflows.",
      "Automated feature extraction, validation, and batch-scoring pipelines, saving 20+ engineering hours per week.",
      "Designed and deployed real-time prediction services integrated into enterprise applications for AI-driven decision support.",
      "Developed PyTorch-based deep-learning models for anomaly detection, forecasting, and operational intelligence.",
      "Established governance standards for model deployment, versioning, experiment tracking, and production monitoring.",
      "Led machine learning initiatives from solution architecture through deployment and operational support.",
      "Mentored engineering teams on ML engineering best practices, MLOps, and scalable AI system design.",
    ],
  },
  {
    id: "solarwinds",
    name: "SolarWinds",
    role: "Senior ML Engineer",
    location: "Austin, TX",
    years: "Mar 2021 – Sep 2023",
    image: "/media/experience/solarwinds.png",
    video: "/media/experience/solarwinds.mp4",
    bullets: [
      "Delivered production machine learning systems supporting predictive analytics and operational automation.",
      "Improved model-training efficiency by optimizing data-processing and feature-engineering workflows.",
      "Reduced prediction latency by about 25% by redesigning inference infrastructure and serving pipelines.",
      "Built scalable model training, validation, deployment, and monitoring frameworks for enterprise ML environments.",
      "Automated data-ingestion and preprocessing pipelines, accelerating model-development lifecycles.",
      "Developed model-evaluation frameworks using statistical analysis, cross-validation, and benchmarking.",
      "Implemented observability for model drift detection, prediction quality monitoring, and system reliability.",
      "Collaborated with engineering, product, and business teams to deploy production AI capabilities.",
    ],
  },
  {
    id: "sailpoint",
    name: "SailPoint",
    role: "ML Engineer",
    location: "Austin, TX",
    years: "Jul 2018 – Feb 2021",
    image: "/media/experience/sailpoint.png",
    video: "/media/experience/sailpoint.mp4",
    bullets: [
      "Developed predictive modeling solutions for customer segmentation, pricing optimization, and revenue forecasting.",
      "Built forecasting and classification models using PyTorch for business intelligence and strategic decision-making.",
      "Automated ETL, feature-engineering, and validation workflows, reducing recurring manual effort.",
      "Designed and deployed prediction APIs integrating ML outputs into customer-facing applications.",
      "Improved training-data quality through enhanced preprocessing, validation, and feature engineering.",
      "Standardized experimentation, model-validation, and deployment practices across ML initiatives.",
      "Partnered with engineering and product stakeholders to deliver data-driven forecasting and analytics solutions.",
    ],
  },
  {
    id: "uship",
    name: "uShip",
    role: "Software Engineer",
    location: "Austin, TX",
    years: "Jun 2015 – May 2018",
    image: "/media/experience/uship.png",
    video: "/media/experience/uship.mp4",
    bullets: [
      "Engineered data pipelines supporting forecasting, anomaly detection, and operational analytics.",
      "Developed predictive analytics solutions using PyTorch and Scikit-learn for BI and operational planning.",
      "Built analytics services supporting reporting, demand planning, trend analysis, and business intelligence.",
      "Improved data-preparation and feature-engineering workflows to enhance model quality and efficiency.",
      "Implemented production monitoring and validation processes for predictive analytics systems.",
    ],
  },
] as const;

export const achievements = [
  { value: "10+", label: "Years AI/ML Engineering" },
  { value: "4", label: "Companies" },
  { value: "30%", label: "Latency Reduction" },
  { value: "20+", label: "Hours Saved Weekly" },
  { value: "25%", label: "Prediction Latency Cut" },
  { value: "Production-Ready", label: "AI/ML Systems" },
] as const;

export const iconicMoments = [
  {
    id: "degree",
    title: "Bachelor of Science in Computer Science",
    year: "2011–2015",
    description:
      "Texas Tech University — foundation in computer science that launched a career in software engineering and machine learning.",
    image: "/media/journey/degree.png",
    video: null,
  },
  {
    id: "ml-specialization",
    title: "Specialization in Production AI/ML Systems",
    year: "2018–Present",
    description:
      "Evolved from software engineering into ML engineering, deep learning, MLOps, model serving, and production AI systems architecture.",
    image: "/media/journey/career.png",
    video: "/media/experience/databricks.mp4",
  },
  {
    id: "ai-platform-impact",
    title: "Enterprise AI/ML Platform Leadership",
    year: "2023–Present",
    description:
      "Architecting enterprise-scale AI/ML platforms at Databricks — inference optimization, governance standards, and mentoring teams on scalable AI system design.",
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
  "Python · PyTorch · TensorFlow",
  "MLOps · MLflow · Kubernetes",
  "AWS · Azure · GCP",
  "Deep Learning · LLMs",
  "Model Serving · Observability",
] as const;

export const navLinks = [
  { label: "Contact", href: "#ventures" },
  { label: "Highlights", href: "#highlights" },
  { label: "Experience", href: "#career" },
  { label: "Snapshot", href: "#achievements" },
  { label: "Journey", href: "#moments" },
] as const;
