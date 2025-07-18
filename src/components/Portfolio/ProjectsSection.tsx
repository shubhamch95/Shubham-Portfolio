import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, MongoDB database, and Stripe payment integration. Features include user authentication, product management, shopping cart, and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/shubhamchahal/ecommerce-mern",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates using Socket.io. Features drag-and-drop functionality, team collaboration, and progress tracking with beautiful UI/UX.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "TypeScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/shubhamchahal/task-manager",
      liveUrl: "https://taskapp-demo.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, post scheduling, and engagement metrics. Built with modern React patterns and responsive design.",
      technologies: ["React", "Chart.js", "REST API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/shubhamchahal/social-dashboard",
      liveUrl: "https://social-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information. Responsive design with smooth animations and modern UI.",
      technologies: ["React", "Weather API", "Geolocation", "CSS3"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/shubhamchahal/weather-app",
      liveUrl: "https://weather-forecast-demo.netlify.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects demonstrating my skills in full-stack development
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card fade-in-up ${project.featured ? 'lg:grid-cols-2' : ''}`}
              style={{ 
                animationDelay: `${0.2 + index * 0.1}s`,
                display: project.featured ? 'grid' : 'block'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <Play className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${project.featured ? 'p-8' : 'p-6'} space-y-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-poppins font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="default" 
                    className="btn-premium"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="glass border-border hover:bg-accent/50"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="outline" 
            className="glass-card px-8 py-4"
            onClick={() => window.open('https://github.com/shubhamchahal', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};