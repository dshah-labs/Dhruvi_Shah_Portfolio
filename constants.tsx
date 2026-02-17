
import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Data Scientist, AIML Team",
    company: "Global Payments x Worldpay",
    location: "New York, NY",
    period: "Apr 2025 – Present",
    skills: ["Python", "PySpark", "Databricks", "LLMs", "NLP", "ML Systems", "MLOps"],
    bullets: [
      "Architected and deployed scalable ML and ETL pipelines on Databricks, supported by a reusable Python feature-engineering library used across teams.",
      "Built a production LLM document-parsing pipeline leveraging PyMuPDF and Mistral-7B for semantic extraction and indexing.",
      "Designed and productionized segment-specific churn models (GBM) delivering 60% reduction in churn rate.",
      "Built anomaly detection and integrated Agentic AI based system processing 2M+ merchants with automated alerting."
    ]
  },
  {
    role: "Data Scientist",
    company: "Bill Holdings",
    location: "San Jose, CA",
    period: "Feb 10, 2024 – Apr 10, 2024",
    skills: ["Python", "SQL", "AWS", "Data Science", "Automation", "Starburst SQL"],
    bullets: [
      "Developed and deployed Python scripts to automate operational workflows, improving efficiency in virtual card operations.",
      "Optimized repetitive processes with automation solutions, reducing manual effort and operational errors.",
      "Applied machine learning and predictive analytics to detect anomalies and forecast operational needs.",
      "Integrated AWS services (Lambda, S3, EC2, Glue, Step Functions) for scalable automation and pipeline management.",
      "Used Starburst SQL to optimize complex queries and maintain high data accuracy for real-time decisions."
    ]
  },
  {
    role: "Data Scientist",
    company: "BlocPower",
    location: "New York, NY",
    period: "May 2024 – Aug 2024",
    skills: ["AWS", "SageMaker", "MLflow", "RAG", "Llama 3", "XGBoost"],
    bullets: [
      "Built production ML pipeline in AWS SageMaker with MLflow-based experiment tracking and CI/CD.",
      "Developed a LangChain-based RAG system using Llama 3 on AWS for internal semantic search over operational knowledge bases."
    ]
  },
  {
    role: "Senior Data Scientist",
    company: "Nielsen Media",
    location: "Mumbai, India",
    period: "Feb 2022 – Jul 2023",
    skills: ["Python", "ML", "NLP", "Optimization", "MMM"],
    bullets: [
      "Led end-to-end Marketing Mix Modeling for L'Oreal, delivering a 3x improvement in ROI.",
      "Implemented a two-stage modeling framework using Random Forest and Lasso for KPI selection.",
      "Built production NLP pipelines (BERT) to generate sentiment and performance insights at scale.",
      "Achieved 3x ROI and optimized budget allocation by leveraging an XGBoost model with 89% accuracy.",
      "Enhanced media content analysis by 40% using NLP models with BERT and LDA for automated sentiment, engagement, and theme analysis.",
      "Increased ROAS and improved marketing resource allocation for Meta and PepsiCo by developing digital diagnostic models and delivering strategic consulting."
    ]
  },
  {
    role: "Senior System Engineer (Team Lead)",
    company: "LTIMindtree",
    location: "Mumbai, India",
    period: "Feb 19, 2018 – Feb 24, 2022",
    skills: ["Python", "ML", "SQL", "Oracle DB", "Leadership"],
    bullets: [
      "Designed SQL-based clustering and data workflows over 700M+ records to enable scalable analytics.",
      "Led technical design and cross-functional collaboration, automating pipelines and dashboards.",
      "Improved operational efficiency and reduced incident resolution time by 20% by analyzing a 700M+ incident database using SQL and k-means clustering to segment incidents by priority and complexity.",
      "As a team lead, optimized resource allocation through effective labor planning, ensuring optimal utilization and efficiency across projects.",
      "Streamlined operations and minimized downtime by developing Python scripts to automate data extraction, analysis, and visualization, providing leadership teams with actionable insights."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Anomaly Detection Framework",
    organization: "Worldpay",
    period: "Jan 2026 - Ongoing",
    tags: ["LLM", "REST API", "JSON", "Claude 4.5"],
    bullets: [
      "Generalized anomaly detection using volume-based segmentation and adaptive thresholds.",
      "Integrated Claude 4.5 APIs to translate anomaly outputs into human-readable insights for business stakeholders."
    ]
  },
  {
    title: "Authorization Optimization",
    organization: "Worldpay",
    period: "Dec 2025 - Ongoing",
    tags: ["Time-series", "ACF", "Pattern Classification", "Agentic AI"],
    bullets: [
      "Merchant-level pattern classification using behavioral and transaction signals.",
      "Potential to improve approval rates by 4-5%, unlocking million-dollar incremental revenue."
    ]
  },
  {
    title: "Portfolio Optimization AI",
    period: "Nov 2025 - Dec 2025",
    tags: ["FastAPI", "React", "LLM", "Agentic AI"],
    link: "https://github.com/dshah-labs/portfolio-optimization-ai",
    bullets: [
      "Developed an agent-based AI portfolio optimization platform to evaluate holdings and simulate market scenarios.",
      "Generates personalized allocation recommendations based on LLM-driven analysis."
    ]
  },
  {
    title: "Bot-Business Forum",
    organization: "Independent Build",
    period: "2025",
    tags: ["LLM", "Automation", "Python", "Business Intelligence"],
    link: "https://github.com/dshah-labs/Bot-Business-Forum",
    bullets: [
      "Built a business-focused AI forum bot to answer domain queries and summarize discussions with contextual reasoning.",
      "Designed the workflow for scalable ingestion, retrieval, and response generation for operational use."
    ]
  },
  {
    title: "Brand Prediction via Deep Neural Networks",
    organization: "Criteo x Columbia University",
    period: "Sept 2024 - Dec 2024",
    tags: ["Deep Learning", "CNNs", "ResNet", "Multimodal Embeddings"],
    bullets: [
      "Deep learning–based brand classification system, improving brand prediction accuracy by ~15%.",
      "Enhanced ad targeting precision across large-scale product catalogs."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "PySpark", "SQL", "R", "C++", "Java", "APIs", "RESTful APIs"]
  },
  {
    name: "ML & AI",
    skills: ["NLP", "LLMs", "Transformers", "RAG", "RecSys", "Deep Learning", "Agentic AI", "GenAI"]
  },
  {
    name: "MLOps & Systems",
    skills: ["Snowflake", "Databricks", "Spark", "AWS (S3, SageMaker, Bedrock)", "MLflow", "CI/CD", "Model Monitoring"]
  },
  {
    name: "Big Data & DBs",
    skills: ["Elasticsearch", "Oracle DB", "MongoDB", "MySQL", "DynamoDB", "PostgreSQL", "Hadoop"]
  }
];
