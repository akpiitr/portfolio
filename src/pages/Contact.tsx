
import { useEffect } from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, Github, MapPin } from "lucide-react";
import { useScrollReveal } from "@/lib/animations";
import ContactForm from "@/components/ContactForm";
import PhotoGallery from "@/components/PhotoGallery";

const Contact = () => {
  // Initialize scroll reveal effect
  useScrollReveal();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }}>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations.
            Feel free to reach out using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="reveal">
              <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Details */}
            <div className="space-y-10 reveal">
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <LinkedinIcon className="text-primary mr-4 h-5 w-5" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/abhishek-kumar-prajapati-34279614a" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary">
                        linkedin.com/in/abhishek-kumar-prajapati-34279614a
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Github className="text-primary mr-4 h-5 w-5" />
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a href="https://github.com/akpiitr" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary">
                        github.com/akpiitr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-4 h-5 w-5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-foreground/70">Dallas-Fort Worth, Texas, USA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Resume Download */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Resume</h2>
                <p className="text-foreground/70 mb-4">
                  Interested in my professional background? Download my resume to learn more about my experience and skills.
                </p>
                <a 
                  href="https://drive.google.com/file/d/14vzNUEr4a4Ei8gelIoyNH4FgNkYWVV0R/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-300 bg-primary rounded-md hover:bg-primary/90 focus:shadow-outline focus:outline-none"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl reveal">
          <h2 className="text-2xl font-display font-bold mb-6">Gallery</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <PhotoGallery />
          </div>
        </div>
      </section>
    </motion.div>;
};
export default Contact;
