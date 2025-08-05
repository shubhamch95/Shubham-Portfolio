import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";
import Opinion from "@/assets/1.png"
import RealTime from "@/assets/2.png"
import EduSkill from "@/assets/eduskill.jpg"
import JobImport from "@/assets/3.png"

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Opinion Trading App",
      description: "Real-time sports trading application built with Node.js and Express.js. Features JWT authentication, admin panel for event management, WebSocket integration for live updates, and external sports API integration for live data. Includes role-based access control and secure trade execution.",
      technologies: ["Node.js", "Express.js", "MongoDB", "WebSocket", "JWT", "The Odds API"],
      image: Opinion,
      githubUrl: "https://github.com/shubhamch95/Opinion-Trading-App",
      featured: true
    },
    {
      id: 2,
      title: "Real Time Polling System",
      description: "Scalable polling platform using Node.js, PostgreSQL, Kafka, and WebSocket. Features user authentication, real-time vote tracking, leaderboard system with time-based filtering, and event-driven architecture. Includes comprehensive analytics and prevents duplicate voting.",
      technologies: ["Node.js", "PostgreSQL", "Apache Kafka", "WebSocket", "Express.js"],
      image: RealTime,
      githubUrl: "https://github.com/shubhamch95/Real-Time-Polling-System",
      featured: true
    },
    {
      id: 3,
      title: "EduUpSkills Website",
      description: "Professional educational website with responsive design built using vanilla JavaScript (React via CDN) and Node.js backend. Features course specializations for LLB, BCA, BBA, MBA, and MCA programs, functional contact forms with PostgreSQL integration, and admin dashboard for lead management.",
      technologies: ["JavaScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Express.js"],
      image: EduSkill,
      githubUrl: "https://github.com/shubhamch95/eduUpSkills",
      liveUrl: "https://www.eduupskills.com/",
      featured: false
    },
    {
      id: 4,
      title: "Job Importer System",
      description: "Scalable job import system with Node.js backend and React frontend. Features automated job fetching from external APIs, Redis queue management with BullMQ, MongoDB storage, cron scheduling for auto-imports, and visual import history dashboard with real-time logs.",
      technologies: ["Node.js", "React", "MongoDB", "Redis", "BullMQ", "Tailwind CSS"],
      image: JobImport,
      githubUrl: "https://github.com/shubhamch95/job-importer",
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
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover object-top transition-transform duration-300 group-hover:scale-105"
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
                  {/* <Button 
                    variant="default" 
                    className="btn-premium"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button> */}
                  <Button 
                    variant="outline" 
                    className="btn-premium"
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
            onClick={() => window.open('https://github.com/shubhamch95', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};