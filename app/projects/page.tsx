import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export const metadata = { title: "Projects - Abrar Faiyaz" };

// ==========================================
// EDIT YOUR PROJECTS HERE
// ==========================================
const projects = [
  {
    title: "IT Hardware Diagnostics Tool",
    desc: "A custom script designed to diagnose hardware failures and monitor system health across multiple Windows machines.",
    stack: ["Windows", "Hardware", "PowerShell"],
    image: "/project1.jpg", // Put an image named project1.jpg in your public folder!
    liveLink: "https://example.com", // Replace with live link
    githubLink: "https://github.com/1nlyAbrar", // Replace with your repo link
  },
  {
    title: "THE AGENT-  AI Workspace",
    desc: "A next-generation AI operating environment— combining conversational AI, voice interaction, document intelligence, research, and productivity tools into a single immersive experience.",
    stack: ["Prompting", "Document Reader", "Code Generator"],
    image: "/project2.jpg", 
    liveLink: "https://the-agent-three.vercel.app/", 
    githubLink: "https://github.com/1nlyAbrar/The-Agent",
  },
  {
    title: "Business Analysis Website",
    desc: "Created a dynamic Excel dashboard to visualize sales data, identify trends, and automate monthly reporting.",
    stack: ["Excel & CSV", "Data Analysis", "AI Reporting"],
    image: "/project3.jpg",
    liveLink: "https://automationdemo-eta.vercel.app/overview",
    githubLink: "#",
  }
];
// ==========================================

export default function ProjectsPage() {
  return (
    <>
      <Header onOpenCommand={() => {}} />
      <main className="mx-auto max-w-6xl px-4 pt-32">
        <SectionReveal>
          <h1 className="font-display text-4xl font-black">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-silver/70">
            A curated gallery of hands-on work in IT, networking, and data analysis.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition hover:neon-border">
                
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-midnight">
                  <div className="absolute inset-0 grid-overlay opacity-40 z-10" />
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    // If image fails to load, show a solid color
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-sm font-semibold text-silver group-hover:text-neon transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 flex-1 text-xs text-silver/65 leading-relaxed">
                    {p.desc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full bg-electric/10 px-2 py-0.5 text-[10px] text-silver/70 ring-1 ring-neon/20">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                    {p.githubLink !== "#" && (
                      <a href={p.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[11px] text-silver/60 hover:text-neon transition-colors">
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                    {p.liveLink !== "#" && (
                      <a href={p.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[11px] text-silver/60 hover:text-neon transition-colors">
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
