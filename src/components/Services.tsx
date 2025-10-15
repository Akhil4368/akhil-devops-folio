import { Card } from "@/components/ui/card";
import { Server, Cloud, Container, GitBranch, Gauge, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Container,
      title: "Containerization",
      description: "Docker and Kubernetes expertise for scalable application deployment and orchestration.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "AWS cloud infrastructure setup, management, and optimization for reliable deployments.",
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline",
      description: "Automated continuous integration and deployment workflows for faster delivery.",
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Linux server administration and infrastructure as code with modern tools.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Application and infrastructure optimization for maximum efficiency and speed.",
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Implementation of security best practices and comprehensive monitoring solutions.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">DevOps Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive DevOps solutions focusing on deployment automation, cloud infrastructure, 
            and continuous delivery for modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-border bg-card group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
