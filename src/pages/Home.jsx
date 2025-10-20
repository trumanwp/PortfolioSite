import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import DarkVeil from "../components/DarkVeil";
import TextType from "../components/TextType";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Dark Veil background overlay for visual effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DarkVeil
          hueShift={253} // Hue rotation applied to the veil
          noiseIntensity={0} // Amount of visual noise
          scanlineIntensity={0} // Scanline overlay effect
          speed={0.5} // Movement speed of the veil
          scanlineFrequency={0} // Frequency of scanlines
          warpAmount={4} // Warping/distortion effect
        />
      </div>

      {/* Navigation bar at the top of the page */}
      <Navbar />

      {/* Main page content */}
      <main>
        {/* Hero section with animated introduction */}
        <HeroSection />

        {/* About section with personal info and background */}
        <AboutSection />

        {/* Skills section displaying technical proficiencies */}
        {/*<SkillsSection />*/}

        {/* Projects section highlighting featured work */}
        <ProjectsSection />

        {/* Contact section with form and contact info */}
        <ContactSection />
      </main>

      {/* Footer with navigation back to top */}
      <Footer />
    </div>
  );
};
