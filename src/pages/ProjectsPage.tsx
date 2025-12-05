import { useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "frontend", "backend", "fullstack", "ai/ml"];

  const projects = [
    {
      title: "AI Code Assistant",
      description:
        "A VS Code extension that uses GPT-4 to provide intelligent code suggestions, bug fixes, and documentation generation.",
      tags: ["TypeScript", "OpenAI", "VS Code API"],
      category: "ai/ml",
      github: "https://github.com",
      live: "https://marketplace.visualstudio.com",
      image: "🤖",
      featured: true,
    },
    {
      title: "EcoTrack",
      description:
        "A sustainability tracking app that helps users monitor their carbon footprint with real-time data visualization.",
      tags: ["React", "Node.js", "Chart.js", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com",
      image: "🌱",
      featured: true,
    },
    {
      title: "CloudSync",
      description:
        "A file synchronization service with end-to-end encryption supporting real-time collaboration.",
      tags: ["Python", "AWS", "PostgreSQL", "WebSocket"],
      category: "backend",
      github: "https://github.com",
      live: "https://example.com",
      image: "☁️",
      featured: true,
    },
    {
      title: "Portfolio V2",
      description:
        "Modern portfolio website built with React and Tailwind CSS featuring smooth animations.",
      tags: ["React", "Tailwind", "Framer Motion"],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      image: "🎨",
      featured: false,
    },
    {
      title: "Task Manager CLI",
      description:
        "A command-line task management tool with SQLite storage and natural language parsing.",
      tags: ["Python", "SQLite", "Click"],
      category: "backend",
      github: "https://github.com",
      image: "📋",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather app with 5-day forecasts, location search, and beautiful visualizations.",
      tags: ["React", "OpenWeather API", "Charts"],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      image: "🌤️",
      featured: false,
    },
    {
      title: "Neural Style Transfer",
      description:
        "Deep learning model that applies artistic styles to images using convolutional neural networks.",
      tags: ["Python", "TensorFlow", "CNN"],
      category: "ai/ml",
      github: "https://github.com",
      image: "🎭",
      featured: false,
    },
    {
      title: "E-commerce API",
      description:
        "RESTful API for e-commerce platforms with authentication, payments, and inventory management.",
      tags: ["Node.js", "Express", "Stripe", "PostgreSQL"],
      category: "backend",
      github: "https://github.com",
      image: "🛒",
      featured: false,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A collection of projects I've built over the years
            </p>
          </ScrollReveal>

          {/* Search and Filter */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                      filter === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="card-glass p-6 h-full flex flex-col group hover:border-primary/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{project.image}</span>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <span className="text-xs text-primary font-mono mb-2">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-muted rounded font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              No projects found matching your criteria.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
