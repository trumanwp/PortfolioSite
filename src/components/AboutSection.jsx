// Importing icons from lucide-react for visual elements in the cards
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    // Main About section wrapper with padding and relative positioning
    <section id="about" className="py-24 px-4 relative">
      {/* Container to center content and limit maximum width */}
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Grid layout: left column for description, right column for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: personal description and CTA buttons */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Programmer</h3>

            {/* Paragraph about background and interests */}
            <p className="text-muted-foreground">
              I’m a third-year BSc Computer Science student at Glasgow
              Caledonian University, passionate about building efficient and
              user-friendly software. I enjoy exploring software engineering,
              web development, and data science, and I’m always looking for ways
              to turn ideas into real-world projects. Whether it’s coding,
              designing interfaces, or learning new technologies, I love
              tackling challenges that help me grow and make an impact.
            </p>

            {/* Call-to-action buttons: contact and download CV */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="public\AdamBOWIECS_CV.docx"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right column: info cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1: Role / student status */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* Icon container */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                {/* Card text */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Computing Science Student
                  </h4>
                  <p className="text-muted-foreground">
                    Interested in Software Engineering, Data Science and Web
                    Development
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Education */}
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

            {/* Card 3: Employment history */}
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
