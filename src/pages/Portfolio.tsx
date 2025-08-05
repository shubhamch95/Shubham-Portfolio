import { useEffect } from "react";
import { Navigation } from "@/components/Portfolio/Navigation";
import { HeroSection } from "@/components/Portfolio/HeroSection";
import { AboutSection } from "@/components/Portfolio/AboutSection";
import { TechStackSection } from "@/components/Portfolio/TechStackSection";
import { ProjectsSection } from "@/components/Portfolio/ProjectsSection";
import { ContactSection } from "@/components/Portfolio/ContactSection";
import { ThemeProvider } from "@/components/Portfolio/ThemeProvider";

const Portfolio = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="overflow-hidden">
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="text-center">
              <p className="text-muted-foreground">
                © 2025 Shubham Choudhery. Crafted with ❤️
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;