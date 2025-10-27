import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing web development skills with smooth animations and clean design.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Akhil4368",
    },
    {
      title: "User Management Application",
      description: "Full-stack containerized application for managing users with CRUD operations, built with MERN stack and deployed using Docker.",
      technologies: ["Docker", "MongoDB", "Express", "React", "Node.js"],
      githubUrl: "https://github.com/Akhil4368/containerized-fullstack-app",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects demonstrating full-stack development and DevOps expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-border bg-card"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 w-full"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
