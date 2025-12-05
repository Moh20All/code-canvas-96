import ScrollReveal from "./ScrollReveal";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CS Professor, MIT",
      content:
        "Alex is one of the most dedicated students I've had the pleasure of teaching. Their ability to grasp complex algorithms and apply them creatively is exceptional.",
      avatar: "👩‍🏫",
    },
    {
      name: "Michael Torres",
      role: "Senior Engineer, Google",
      content:
        "During their internship, Alex demonstrated remarkable problem-solving skills and a genuine passion for building scalable systems. A true team player.",
      avatar: "👨‍💻",
    },
    {
      name: "Emily Park",
      role: "Startup Founder",
      content:
        "Alex built our MVP in record time. Their attention to detail and communication skills made the entire process smooth and enjoyable.",
      avatar: "👩‍💼",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Testimonials from professors, colleagues, and clients
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="card-glass p-6 h-full flex flex-col">
                <Quote className="text-primary/30 mb-4" size={32} />
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
