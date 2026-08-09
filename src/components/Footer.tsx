// Importing arrow icon from Lucide for the "back to top" button
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    // Footer wrapper with padding, background, border top, and flex layout
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {/* Centered container for the "back to top" button */}
      <div className="w-full flex justify-center mt-4">
        {/* Button linking back to the hero section */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          {/* Up arrow icon */}
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
