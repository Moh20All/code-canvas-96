import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground mb-6">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
            Hi, I'm{" "}
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up-delay-2">
            Computer Science Student & Full-Stack Developer
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-3">
            Passionate about building innovative web applications and exploring 
            cutting-edge technologies. Currently pursuing my CS degree while 
            crafting digital experiences that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all glow-sm hover:glow-effect"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up-delay-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
