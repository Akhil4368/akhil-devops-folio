import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <p className="text-primary text-lg font-semibold">Welcome, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Akhil
                <span className="block text-muted-foreground text-3xl md:text-4xl lg:text-5xl mt-2">
                  Full Stack Developer &
                </span>
                <span className="block text-accent text-3xl md:text-4xl lg:text-5xl">
                  DevOps Enthusiast
                </span>
              </h1>
            </div>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Building scalable and secure architectures for modern applications. 
              Specializing in MERN Stack development and DevOps practices.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="gap-2"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="gap-2"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src={profileImage}
                  alt="Akhil - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
