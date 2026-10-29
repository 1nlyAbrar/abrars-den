export const profile = {
  name: "Abrar Faiyaz",
  headline:
    "Aspiring IT Professional | Hardware, Networking & Cloud Computing | AI & Emerging Technologies",
  location: "Dhaka, Bangladesh",
  summary:
    "I am an aspiring IT professional with a background in Hardware, Networking, and Cloud Computing. I am passionate about technology, problem-solving, and exploring innovative solutions using Artificial Intelligence and modern IT tools.",
  interests: [
    "IT Support and Technical Troubleshooting",
    "Computer Hardware and Networking",
    "Cloud Computing and IT Infrastructure",
    "Artificial Intelligence and Automation",
    "Software and Web Development",
  ],
  linkedin: "https://www.linkedin.com/in/1nlyabrar/",
  github: "https://github.com/1nlyAbrar",
  email: "fabrar960@gmail.com",
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  type: "work" | "freelance" | "education";
  detail?: string;
};

export const timeline: Experience[] = [
  { role: "International Specialist", org: "Sales Squad", period: "Oct 2025 - Present", type: "work", detail: "IT Hardware Support, Computer Hardware, and cross-functional IT operations." },
  { role: "Freelancing with Fiverr", org: "Fiverr", period: "2022 - Oct 2026", type: "freelance", detail: "IT Hardware Support, Computer Hardware, and related services." },
  { role: "Data Analyst", org: "Intelligent Image Management Limited (IIML)", period: "2023 - 2024", type: "work", detail: "Data analysis and IT hardware support." },
  { role: "Physical Sciences", org: "Manarat Dhaka International College", period: "2023", type: "education", detail: "CGPA: 3.50" },
  { role: "Schooling", org: "Manarat Dhaka International School and College", period: "2008 - 2022", type: "education" },
];

export const skillGroups = [
  { title: "IT Hardware", icon: "Cpu", items: ["Computer Hardware", "IT Hardware Support", "System Administration"] },
  { title: "Networking", icon: "Network", items: ["Computer Networking", "IT Infrastructure", "Windows"] },
  { title: "Cloud Computing", icon: "Cloud", items: ["Cloud Computing", "IT Operations Management", "Infrastructure Management"] },
  { title: "AI & Emerging Tech", icon: "Brain", items: ["Artificial Intelligence (AI)", "Data Analysis", "Research Skills"] },
  { title: "Productivity & Tools", icon: "Briefcase", items: ["Microsoft Excel", "Microsoft Word", "Microsoft Applications", "Website Administration"] },
  { title: "Professional", icon: "Users", items: ["Teamwork", "Communication", "Leadership", "Problem Solving", "Presentation Skills", "Creativity", "Easily Adaptable", "Self-Motivation"] },
];

export const services = [
  { title: "IT Hardware Support", desc: "Diagnostics, repair, and maintenance of desktop and laptop hardware.", icon: "Cpu" },
  { title: "Network Setup & Troubleshooting", desc: "LAN/Wi-Fi configuration, cable management, and network issue resolution.", icon: "Network" },
  { title: "Cloud & Infrastructure", desc: "Fundamentals of cloud deployment, monitoring, and IT infrastructure management.", icon: "Cloud" },
  { title: "Data Analysis & Reporting", desc: "Structuring, analyzing, and presenting data using Excel and reporting tools.", icon: "BarChart3" },
  { title: "AI & Automation Exploration", desc: "Practical use of AI tools to automate tasks and improve workflows.", icon: "Brain" },
  { title: "Technical Documentation", desc: "Clear documentation, guides, and presentations for IT processes.", icon: "FileText" },
];
