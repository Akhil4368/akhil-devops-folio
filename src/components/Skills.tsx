import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "HTML & CSS", level: 90, color: "bg-primary" },
    { name: "Docker", level: 85, color: "bg-accent" },
    { name: "Linux", level: 80, color: "bg-primary" },
    { name: "AWS", level: 75, color: "bg-accent" },
    { name: "Git & GitHub", level: 88, color: "bg-primary" },
    { name: "JavaScript", level: 85, color: "bg-accent" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning full-stack development and modern DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
