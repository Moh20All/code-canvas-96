import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const BlogPage = () => {
  const posts = [
    {
      title: "Building Scalable APIs with Node.js and PostgreSQL",
      excerpt:
        "Learn how to design and implement RESTful APIs that can handle millions of requests while maintaining clean architecture.",
      date: "Dec 1, 2024",
      readTime: "8 min read",
      category: "Backend",
      image: "🔧",
    },
    {
      title: "My Journey from Coding Bootcamp to MIT",
      excerpt:
        "A personal story about transitioning from self-taught developer to pursuing a formal CS education at one of the world's top universities.",
      date: "Nov 15, 2024",
      readTime: "12 min read",
      category: "Career",
      image: "🎓",
    },
    {
      title: "Understanding React Server Components",
      excerpt:
        "A deep dive into React Server Components, how they work, and when to use them in your Next.js applications.",
      date: "Nov 8, 2024",
      readTime: "10 min read",
      category: "Frontend",
      image: "⚛️",
    },
    {
      title: "Getting Started with Machine Learning in Python",
      excerpt:
        "A beginner-friendly introduction to machine learning concepts and how to implement your first ML model using scikit-learn.",
      date: "Oct 28, 2024",
      readTime: "15 min read",
      category: "AI/ML",
      image: "🤖",
    },
    {
      title: "The Art of Code Review",
      excerpt:
        "Best practices for conducting effective code reviews that improve code quality and team collaboration.",
      date: "Oct 15, 2024",
      readTime: "6 min read",
      category: "Best Practices",
      image: "👁️",
    },
    {
      title: "Deploying Applications with Docker and Kubernetes",
      excerpt:
        "A practical guide to containerizing your applications and orchestrating them with Kubernetes for production environments.",
      date: "Oct 5, 2024",
      readTime: "14 min read",
      category: "DevOps",
      image: "🐳",
    },
  ];

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Tech <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on software development
            </p>
          </ScrollReveal>

          {/* Featured Post */}
          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="card-glass p-8 md:p-12 group cursor-pointer hover:border-primary/50 transition-all">
                <span className="text-xs font-mono text-primary mb-4 block">
                  Featured Article
                </span>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="text-8xl">{featuredPost.image}</div>
                  <div className="flex-grow">
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full mb-4 inline-block">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherPosts.map((post, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <article className="card-glass p-6 h-full flex flex-col group cursor-pointer hover:border-primary/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{post.image}</span>
                    <span className="text-xs px-3 py-1 bg-secondary rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
