import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "AI Code Assistant",
      description:
        "A VS Code extension that uses GPT-4 to provide intelligent code suggestions, bug fixes, and documentation generation. Built with TypeScript and the OpenAI API.",
      tags: ["TypeScript", "OpenAI", "VS Code API"],
      github: "https://github.com",
      live: "https://marketplace.visualstudio.com",
      image: "🤖",
    },
    {
      title: "EcoTrack",
      description:
        "A sustainability tracking app that helps users monitor their carbon footprint. Features real-time data visualization and personalized recommendations.",
      tags: ["React", "Node.js", "Chart.js", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      image: "🌱",
    },
    {
      title: "CloudSync",
      description:
        "A file synchronization service with end-to-end encryption. Supports real-time collaboration and version control for team workflows.",
      tags: ["Python", "AWS", "PostgreSQL", "WebSocket"],
      github: "https://github.com",
      live: "https://example.com",
      image: "☁️",
    },
  ];

  const otherProjects = [
    {
      title: "Portfolio V1",
      description: "My first portfolio website built with vanilla HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com",
    },
    {
      title: "Task Manager CLI",
      description: "A command-line task management tool with SQLite storage.",
      tags: ["Python", "SQLite", "Click"],
      github: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with 5-day forecasts and location search.",
      tags: ["React", "OpenWeather API"],
      github: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Some things I've built
        </p>

        {/* Featured Projects */}
        <div className="space-y-24 max-w-5xl mx-auto mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`order-2 ${
                  index % 2 === 1 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary to-muted border border-border/50 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
              </div>
              <div
                className={`order-1 ${
                  index % 2 === 1 ? "md:order-2 md:text-right" : "md:order-1"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="card-glass p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold mb-8 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="card-glass p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={40} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
