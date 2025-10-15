import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "CGC Landran",
      icon: GraduationCap,
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "HPU (Himachal Pradesh University)",
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      title: "DevOps Internship",
      company: "ToXSL Technologies",
      duration: "3 Months",
      description: "Currently undergoing comprehensive DevOps training, focusing on CI/CD, containerization, and cloud services.",
      icon: Briefcase,
    },
    {
      title: "MERN Stack Training",
      company: "Professional Development",
      duration: "6 Months",
      description: "Completed intensive training in MongoDB, Express.js, React, and Node.js, building full-stack web applications.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I am doing DevOps training for 3 months from ToXSL Technologies and have completed 
            Full Stack Web Development training. Passionate about creating efficient, scalable solutions 
            and continuously learning new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Education */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <edu.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-primary mb-6">Experience</h3>
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <exp.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <span className="text-sm text-primary font-medium">{exp.duration}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
