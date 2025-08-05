import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/90 via-midnight/80 to-midnight/70"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <div className="fade-in-up animate space-y-6">
          <div className="glass rounded-2xl p-8 md:p-12 backdrop-blur-lg">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6">
              <span className="text-white">Crafting Scalable</span>
              <br />
              <span className="text-gradient">Full-Stack Apps</span>
              <br />
              <span className="text-white">with MERN Stack</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Hi, I'm <span className="text-secondary font-semibold">Shubham Choudhery</span>,
              a passionate Full-Stack Developer specializing in MongoDB, Express.js, React, and Node.js.
              I create modern, scalable web applications that deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={scrollToProjects}
                className="btn-premium text-lg px-8 py-6 group"
              >
                My Projects
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>

              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="glass rounded-full p-3 hover:bg-secondary/20">
                  <Link to={`https://github.com/shubhamch95`}><Github className="h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="icon" className="glass rounded-full p-3 hover:bg-secondary/20">
                  <Link to={`https://www.linkedin.com/in/shubham-choudhery/`}> <Linkedin className="h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="icon" className="glass rounded-full p-3 hover:bg-secondary/20">
                  <Link to={`mailto:shubhch3131@gmail.com`}>  <Mail className="h-5 w-5" /> </Link>
                </Button>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="btn-premium text-lg px-8 py-6 group"
                >
                  Resume
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-secondary" />
      </div>
    </section>
  );
};