import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Programmer</h3>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae consequatur non est ipsa aperiam incidunt doloribus
              iste, architecto quis excepturi voluptatum tempora error et
              debitis sit, quia voluptatibus odit labore?
            </p>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              incidunt! Error quae officiis aperiam expedita odit odio quasi
              enim, incidunt cupiditate vero! Aliquam vel eveniet fugit
              voluptates? Repudiandae, iste sapiente.e
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="public\AdamBowieCVCS.docx"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Programming Languages / Frameworks
                  </h4>
                  <p className="text-muted-foreground">
                    Java, Python, HTML/CSS/JS, ReactJS, SpringBoot
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    BSc Computing @ Glasgow Caledonian University
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Employment History</h4>
                  <p className="text-muted-foreground">
                    Over 7 years of customer service experience, including over
                    3 years working in IT as a Support Analyst.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
