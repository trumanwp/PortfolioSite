// Importing icons for contact information and social links
import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

// Utility for conditional classNames
import { cn } from "@/lib/utils";

// Custom hook for toast notifications
import { useToast } from "@/hooks/use-toast";

// React hooks
import { useState } from "react";

// EmailJS library to send form emails
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  // Destructure toast function from custom hook
  const { toast } = useToast();

  // State to track whether the form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setIsSubmitting(true);

    // Grab the form element
    const form = e.target;

    // Send form data via EmailJS
    emailjs
      .sendForm(
        "service_gp7qhwq", // EmailJS service ID
        "template_aw9vp79", // EmailJS template ID
        form,
        "FVCtUbF9S2h0GVny8" // Public API key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          form.reset(); // reset form fields after successful submission
        },
        (error) => {
          console.error(error.text);
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    // Main contact section wrapper with padding and a semi-transparent background
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        {/* Description / intro paragraph */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Grid layout: left column for contact info, right column for contact form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column: contact info and social links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            {/* Contact details */}
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:adambowieday3@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    adambowieday3@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Glasgow, Scotland
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/adam-b-625b95124/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right column: contact form */}
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              {/* Name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Smith..."
                />
              </div>

              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              {/* Message textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
