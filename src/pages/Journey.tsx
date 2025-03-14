
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Award, Book, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/lib/animations";

const Journey = () => {
  // Initialize scroll reveal effect
  useScrollReveal();
  
  // Refs for scroll animations
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="pt-20" ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-30" />
        </div>
        
        <motion.div
          className="container max-w-4xl mx-auto text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="chip bg-primary/10 text-primary mb-4">My Journey</span>
          <h1 className="font-display font-bold mb-6">
            From Small Town Dreams to Global Innovation
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            A personal story of perseverance, inspiration, and transformation—exploring how my
            experiences shaped my path in transportation engineering and artificial intelligence.
          </p>
          <div className="flex items-center justify-center text-foreground/70 space-x-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Jhansi, UP to State College, PA</span>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Beginnings */}
      <section className="story-section bg-white">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <span className="chip bg-primary/10 text-primary mb-4">Beginnings</span>
              <h2 className="text-3xl font-display font-bold mb-6">
                Humble Beginnings in Jhansi
              </h2>
              <p className="text-foreground/80 mb-4">
                Born in Jhansi, Uttar Pradesh, a small town known for its historical significance but 
                limited in modern opportunities. My childhood was marked by curiosity and a desire to 
                understand how things worked, especially the trains that connected our town to the 
                rest of India.
              </p>
              <p className="text-foreground/80">
                My family later moved to a small town in Odisha, where I experienced both the 
                challenges of rural life and the transformative power of education. Despite limited 
                resources, my parents prioritized learning and encouraged my academic interests.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Childhood in Jhansi"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Challenges */}
      <section className="story-section bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Overcoming challenges"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <Quote className="text-white/80 h-10 w-10" />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <span className="chip bg-primary/10 text-primary mb-4">Challenges</span>
              <h2 className="text-3xl font-display font-bold mb-6">
                Overcoming Adversity
              </h2>
              <p className="text-foreground/80 mb-4">
                Growing up, I faced the stark realities of the caste system and socioeconomic 
                disparities. These experiences, though challenging, fueled my determination to 
                create a different path—one defined by merit and perseverance rather than 
                predetermined social boundaries.
              </p>
              <p className="text-foreground/80 mb-6">
                Access to quality education was a constant struggle, with limited resources and 
                technological tools. I often had to travel long distances to access libraries or 
                educational facilities, making each opportunity to learn all the more valuable.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70">
                "The challenges we face don't define our destination; they simply illuminate the strength
                of our determination."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Inspiration */}
      <section className="story-section bg-white">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="reveal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-center mb-12">
              <span className="chip bg-primary/10 text-primary mb-4">Inspiration</span>
              <h2 className="text-3xl font-display font-bold mb-6">
                Moments That Changed Everything
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-secondary/20 p-6 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Book className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-display font-semibold text-lg">First Engineering Book</h3>
                </div>
                <p className="text-foreground/80">
                  Discovering a worn engineering textbook in our local library opened my eyes to 
                  how mathematics and physics could be applied to solve real-world problems. The 
                  book was outdated, but the principles it contained sparked a lifelong passion.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-secondary/20 p-6 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-display font-semibold text-lg">Mentor's Guidance</h3>
                </div>
                <p className="text-foreground/80">
                  A high school teacher who recognized my potential in mathematics went above and 
                  beyond, providing additional resources and encouragement. His belief in my 
                  abilities gave me the confidence to pursue engineering despite the odds.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-secondary/20 p-6 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-display font-semibold text-lg">First Academic Achievement</h3>
                </div>
                <p className="text-foreground/80">
                  Winning a district-level mathematics competition opened doors to a scholarship 
                  that made higher education possible. This achievement was a pivotal moment, 
                  showing that hard work and dedication could overcome financial limitations.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-secondary/20 p-6 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-display font-semibold text-lg">First Visit to a Major City</h3>
                </div>
                <p className="text-foreground/80">
                  Traveling to Delhi for an academic conference exposed me to the complexity of 
                  urban transportation systems. Navigating the metro, buses, and congested streets 
                  sparked my interest in how transportation engineering could improve urban mobility.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Transformation */}
      <section className="story-section parallax-bg bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <span className="chip bg-primary/10 text-primary mb-4">Transformation</span>
              <h2 className="text-3xl font-display font-bold mb-6">
                The Journey to America
              </h2>
              <p className="text-foreground/80 mb-4">
                My academic journey led me from a local engineering college to the prestigious IIT Roorkee, 
                where I specialized in Transportation Engineering. Each step built upon the last, eventually 
                opening the door to pursue a PhD at Penn State University in the United States.
              </p>
              <p className="text-foreground/80 mb-4">
                The transition from a small town in India to State College, Pennsylvania was more than a 
                geographical shift—it represented the culmination of years of perseverance and the beginning 
                of new possibilities in research and innovation.
              </p>
              <p className="text-foreground/80">
                At Penn State, I found the resources, mentorship, and community to pursue cutting-edge 
                research at the intersection of transportation engineering and artificial intelligence—a 
                dream that once seemed impossibly distant.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Journey to America"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Present and Future */}
      <section className="story-section bg-white">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 gap-12 reveal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-center">
              <span className="chip bg-primary/10 text-primary mb-4">Present & Future</span>
              <h2 className="text-3xl font-display font-bold mb-6">
                Creating Impact Through Research
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
                Today, my research focuses on leveraging artificial intelligence to address 
                transportation challenges in both developed and developing regions. My personal 
                journey from resource-constrained environments gives me a unique perspective on 
                creating accessible and scalable solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-semibold text-xl mb-4 text-primary">Research</h3>
                <p className="text-foreground/80">
                  Developing intelligent transportation systems that can adapt to changing conditions and 
                  optimize infrastructure utilization, with a special focus on applications for developing regions.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-semibold text-xl mb-4 text-primary">Teaching</h3>
                <p className="text-foreground/80">
                  Sharing knowledge and inspiring the next generation of engineers through mentorship, 
                  teaching assistantships, and community outreach programs focused on STEM education.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-semibold text-xl mb-4 text-primary">Innovation</h3>
                <p className="text-foreground/80">
                  Collaborating with industry partners to translate research into practical applications that 
                  can improve transportation efficiency, safety, and sustainability in real-world settings.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Share Your Story */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto text-center max-w-3xl reveal">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Everyone Has a Journey Worth Sharing
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            I believe our personal stories can inspire others and create meaningful connections. 
            I'd love to hear about your journey and the experiences that have shaped your path.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-primary transition duration-300 bg-white rounded-md hover:bg-white/90 focus:shadow-outline focus:outline-none"
          >
            Share Your Story
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Journey;
