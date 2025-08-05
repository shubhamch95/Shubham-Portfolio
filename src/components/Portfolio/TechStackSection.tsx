import { Database, Server, Code, GitBranch, Container, Cloud, Zap } from "lucide-react";

export const TechStackSection = () => {
  const technologies = [
    {
      name: "MongoDB",
      icon: Database,
      category: "Database",
      color: "text-green-500"
    },
    {
      name: "Express.js",
      icon: Server,
      category: "Backend",
      color: "text-gray-600"
    },
    {
      name: "React",
      icon: Code,
      category: "Frontend",
      color: "text-blue-500"
    },
    {
      name: "Node.js",
      icon: Zap,
      category: "Runtime",
      color: "text-green-600"
    },
    {
      name: "TypeScript",
      icon: Code,
      category: "Language",
      color: "text-blue-600"
    },
    {
      name: "Redis",
      icon: Database,
      category: "database",
      color: "text-purple-500"
    },
    {
      name: "Git",
      icon: GitBranch,
      category: "Version Control",
      color: "text-orange-500"
    },
    {
      name: "Docker",
      icon: Container,
      category: "DevOps",
      color: "text-blue-400"
    },
    {
      name: "AWS",
      icon: Cloud,
      category: "Cloud",
      color: "text-yellow-500"
    }
  ];

  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section id="tech-stack" className="section-padding bg-gradient-to-br from-accent/20 via-background to-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern technologies and tools I use to build exceptional digital experiences
          </p>
        </div>

        <div className="mb-16 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-poppins font-semibold text-center mb-8 text-gradient">
            Core MERN Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.slice(0, 4).map((tech, index) => (
              <div 
                key={tech.name}
                className="tech-item group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <tech.icon className={`h-12 w-12 mb-4 ${tech.color} group-hover:scale-110 transition-all duration-300`} />
                <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                <span className="text-sm text-muted-foreground">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-poppins font-semibold text-center mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="tech-grid">
            {technologies.slice(4).map((tech, index) => (
              <div 
                key={tech.name}
                className="tech-item group"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <tech.icon className={`h-10 w-10 mb-3 ${tech.color} group-hover:scale-110 transition-all duration-300`} />
                <h4 className="font-medium text-foreground mb-1 text-sm">{tech.name}</h4>
                <span className="text-xs text-muted-foreground">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div 
                key={category}
                className="glass-card text-center"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <h4 className="font-semibold text-lg mb-2 text-gradient">{category}</h4>
                <div className="w-12 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};