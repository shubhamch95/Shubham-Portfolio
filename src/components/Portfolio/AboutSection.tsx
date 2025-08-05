import profilePhoto from "@/assets/Portfolio.png";
import { Code, Server, Database, Smartphone } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, JavaScript ES6+, TypeScript, HTML5/CSS3"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Node.js, Express.js, RESTful APIs, GraphQL"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB, PostgreSQL, Redis, Database Design"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between design and functionality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Shubham Choudhery"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-glass"
              />
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-secondary opacity-10"></div> */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-glow"></div>
            </div>
          </div>

          <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card">
              <h3 className="text-2xl font-poppins font-semibold mb-4 text-gradient">
                Full-Stack MERN Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 2 years of experience in web development, I specialize in creating 
                scalable, performant applications using the MERN stack. I'm passionate about 
                clean code, modern development practices, and delivering solutions that exceed 
                client expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying ahead of the curve in this rapidly evolving field.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card group"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <item.icon className="h-8 w-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};