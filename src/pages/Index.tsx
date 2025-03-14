import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { useScrollReveal } from "@/lib/animations";

// Sample project data
const featuredProjects = [{
  id: 1,
  title: "AI-Powered Traffic Management",
  description: "An intelligent traffic management system using computer vision and machine learning to optimize traffic flow in urban environments.",
  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  tags: ["AI", "Transportation", "Computer Vision"],
  githubUrl: "#",
  liveUrl: "#"
}, {
  id: 2,
  title: "Predictive Infrastructure Maintenance",
  description: "Machine learning model that predicts infrastructure deterioration and suggests optimal maintenance schedules.",
  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  tags: ["ML", "Infrastructure", "Optimization"],
  githubUrl: "#"
}, {
  id: 3,
  title: "Transportation Network Analysis",
  description: "Graph-based analysis of transportation networks to identify critical links and optimize network resilience.",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  tags: ["Network Analysis", "Transportation", "Data Science"],
  githubUrl: "#",
  liveUrl: "#"
}];

const Index = () => {
  // Initialize scroll reveal effect
  useScrollReveal();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div className="order-2 lg:order-1 reveal" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }}>
              <span className="chip bg-primary/10 text-primary mb-4">About Me</span>
              <p className="text-foreground/80 mb-6">
                Abhishek transforms bold ideas into groundbreaking realities, quantifying impact and elevating the transportation landscape with data-driven solutions and advanced AI. Renowned for his seamless teamwork and unyielding focus on results, he cultivates innovative collaborations that deliver high-impact research discoveries and shape the future of sustainable mobility. With influential journal contributions guiding critical progress in the field, Abhishek remains steadfast in his mission: to optimize the transportation sector and inspire transformative change.
              </p>
              <p className="text-foreground/80 mb-6">
                As a PhD student in Transportation Engineering at Penn State University, I'm passionate about 
                integrating artificial intelligence and machine learning into transportation systems to create 
                more efficient, sustainable, and accessible mobility solutions.
              </p>
              <p className="text-foreground/80 mb-8">
                My research focuses on developing innovative approaches to optimize transportation networks, 
                enhance infrastructure management, and improve the overall efficiency of transportation systems.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more about my journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div className="order-1 lg:order-2 reveal" initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8
          }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/30 rounded-2xl blur-2xl opacity-70" />
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Abhishek working" className="w-full h-full object-cover rounded-2xl relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 reveal">
            <div>
              <span className="chip bg-primary/10 text-primary mb-4">Projects</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold">
                Featured Projects
              </h2>
            </div>
            
            <Link to="/projects" className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {featuredProjects.map((project, index) => <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} tags={project.tags} githubUrl={project.githubUrl} liveUrl={project.liveUrl} index={index} />)}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto text-center max-w-3xl reveal">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
            Let's Connect and Collaborate
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Whether you're interested in my research, looking for a collaboration, or just want to say hello,
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-primary transition duration-300 bg-white rounded-md hover:bg-white/90 focus:shadow-outline focus:outline-none">
              Get in Touch
            </Link>
            <Link to="/journey" className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-300 bg-transparent border border-white rounded-md hover:bg-white/10 focus:shadow-outline focus:outline-none">
              Explore My Journey
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

export default Index;
