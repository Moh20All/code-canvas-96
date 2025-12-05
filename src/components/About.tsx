import { GraduationCap, Code, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.S. Computer Science at MIT, Expected 2025",
    },
    {
      icon: Code,
      title: "Experience",
      description: "2+ years of full-stack development experience",
    },
    {
      icon: Rocket,
      title: "Focus",
      description: "Web Development, AI/ML, and Cloud Computing",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              A glimpse into who I am and what drives me
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar */}
            <ScrollReveal delay={100}>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden border border-border/50">
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Crafting Digital Experiences
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate computer science student with a love for creating 
                  elegant solutions to complex problems. My journey in tech started 
                  with curiosity about how things work, and it has evolved into a 
                  dedication to building impactful applications.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge through 
                  technical blog posts. I believe in continuous learning and pushing 
                  the boundaries of what's possible.
                </p>

                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 card-glass"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
