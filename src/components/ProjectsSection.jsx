// Importing icons for links and navigation
import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Array of project objects containing all info for each featured project
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "I created this very site you are currently on! The site is made using React and Tailwind. Fully hosted on AWS.", // Hello ! :)
    image: "portfolioimage.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/trumanwp/PortfolioSite",
  },
  {
    id: 2,
    title: "Job Applications Tracker",
    description:
      "A full-stack web application built with Spring Boot, React and PostgreSQL that helps users manage job applications efficiently. Deployed with Docker and hosted on Render",
    image: "jobsite.png",
    tags: ["Spring Boot", "React", "Docker"],
    demoUrl: "https://jobapplications-2juz.onrender.com/",
    githubUrl: "https://github.com/trumanwp/jobApplications",
  },
  {
    id: 3,
    title: "MoveMates UI/UX Project",
    description:
      "Final assignment for my Human-Computer Interaction module. Completed individually and achieved an 83% final mark.",
    image: "figmacw.png",
    tags: ["Figma"],
    demoUrl:
      "https://www.figma.com/proto/H6T9oMdSm62oKnRbXuXssN/HCI-Coursework--Copy-?node-id=2-2&t=SYmMMVJbQvtrgVz0-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2006%3A3010&show-proto-sidebar=1",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        {/* Section description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project image with hover zoom effect */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tags for technologies used */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project title & description */}
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links to demo and GitHub */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button linking to overall GitHub profile */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/trumanwp"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
