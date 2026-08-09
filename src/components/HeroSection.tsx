// Importing arrow icon for scroll indicator and custom typing component
import { ArrowDown } from "lucide-react";
import TextType from "./TextType";

export const HeroSection = () => {
  return (
    // Hero section wrapper that takes full viewport height
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Centered container for text content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* Animated typing effect replacing static headline */}
            <TextType
              text={["Hi, I'm Adam Bowie."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-gradient"
            />
          </h1>

          {/* Subheading / description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            BSc Computer Science, 3rd Year at Glasgow Caledonian University
          </p>

          {/* Call-to-action button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom of section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
