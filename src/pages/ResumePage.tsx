import { Download, Briefcase, GraduationCap, Award, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const ResumePage = () => {
  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      period: "Summer 2024",
      description: [
        "Developed features for Google Cloud Platform using Go and React",
        "Implemented automated testing pipelines reducing deployment time by 40%",
        "Collaborated with cross-functional teams to deliver user-facing features",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "TechStartup Inc.",
      location: "Remote",
      period: "Jan 2023 - May 2024",
      description: [
        "Built and maintained e-commerce platform serving 10,000+ daily users",
        "Designed RESTful APIs and implemented database optimization strategies",
        "Led migration from legacy codebase to modern React architecture",
      ],
    },
    {
      title: "Research Assistant",
      company: "MIT CSAIL",
      location: "Cambridge, MA",
      period: "Sep 2022 - Present",
      description: [
        "Conducting research on natural language processing and machine learning",
        "Published paper on transformer architectures at NeurIPS 2023",
        "Mentored undergraduate students in research methodologies",
      ],
    },
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      school: "Massachusetts Institute of Technology",
      period: "2021 - 2025",
      details: "GPA: 3.9/4.0 | Dean's List | Focus: AI/ML & Systems",
    },
    {
      degree: "High School Diploma",
      school: "Thomas Jefferson High School for Science & Technology",
      period: "2017 - 2021",
      details: "Valedictorian | National Merit Scholar",
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Meta React Developer Certificate",
    "Stanford Machine Learning (Coursera)",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="gradient-text">Resume</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                My professional journey and qualifications
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all glow-sm hover:glow-effect">
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {/* Experience */}
            <ScrollReveal delay={100}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Experience</h2>
                </div>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div
                      key={index}
                      className="card-glass p-6 border-l-4 border-l-primary"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <span className="text-sm text-muted-foreground font-mono">
                          {job.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <span className="font-medium text-foreground">
                          {job.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {job.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal delay={200}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="card-glass p-6 border-l-4 border-l-primary"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <span className="text-sm text-muted-foreground font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-foreground font-medium mb-2">
                        {edu.school}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={300}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="text-primary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Certifications</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="card-glass p-4 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
