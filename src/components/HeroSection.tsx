import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[200px] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-tr-[200px] blur-3xl" />
      </div>
      
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 py-20 lg:py-0">
        {/* Text content */}
        <motion.div className="flex flex-col justify-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <div className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1,
            duration: 0.7
          }}>
              <span className="chip bg-primary/10 text-primary mb-4">Transportation Engineer & AI Enthusiast</span>
            </motion.div>
            
            <motion.h1 className="text-5xl lg:text-6xl font-display font-bold tracking-tight" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.7
          }}>
              Abhishek Kumar <br /> Prajapati
            </motion.h1>
            
            <motion.p className="text-lg text-foreground/80 max-w-md" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.7
          }}>Abhishek Kumar Prajapati is an innovative researcher who transforms traditional methods through data-driven insights. With a passion for experimenting with new ideas, he continuously pushes the boundaries of established practices, merging time-tested techniques with modern analytics to unlock fresh perspectives and solutions.</motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.7
          }}>
              <Link to="/about" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 bg-primary rounded-md hover:bg-primary/90 focus:shadow-outline focus:outline-none">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary transition duration-300 bg-transparent border border-primary rounded-md hover:bg-primary/5 focus:shadow-outline focus:outline-none">
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Image area */}
        <motion.div className="relative flex items-center justify-center lg:justify-end" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.3,
        duration: 0.8
      }}>
          <div className="relative w-full max-w-md">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-soft" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
            
            {/* Profile image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl glass-card">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Abhishek Kumar Prajapati" className="w-full h-full object-cover" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-medium">
                    Creating innovative solutions in transportation engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;