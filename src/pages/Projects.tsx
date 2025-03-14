
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/lib/animations";
import ProjectCard from "@/components/ProjectCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Real project data
const projects = [
  {
    id: 1,
    title: "Multi-modal RAG Chatbot for Design & Engineering Manuals",
    description: "Independent Project, Spring 2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["RAG", "LangChain", "NLP"],
    summary: "Developed a RAG-chatbot for MUTCD, USDOT & FHWA manuals using Python, LangChain, Pinecone, and sentence transformers by leveraging the inherent structure of documents containing text, figures, and tables; achieved an F1 score of 86%. Utilized the RAGAS framework to rigorously evaluate and refine chatbot performance, improving retrieval and generation by up to 48%."
  },
  {
    id: 2,
    title: "Machine Learning for Roadway Safety Performance Modeling",
    description: "NSF Grant CMMI-1749200, Fall 2023",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["ML", "Python", "XGBoost"],
    summary: "Processed a large dataset spanning 20 years of crash data across 67 counties using Python for safety performance modeling. Trained and validated ensemble ML models (XGBoost) and statistical models (Negative Binomial) on 100+ variables to predict crash frequency."
  },
  {
    id: 3,
    title: "GPT-based AI Shopping Assistant: ProductSense.Ai",
    description: "Hackathon Project, Oct 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["LLMs", "AWS", "Flask"],
    summary: "Developed an end-to-end shopping assistant using Python, AWS, Git, Flask, OCR, and generative AI (LLMs). Fine-tuned LLMs with PEFT, reducing hallucinations by up to 36% for product evaluation and recommendation."
  },
  {
    id: 4,
    title: "Measuring Effects of Data Aggregation on ML-based Safety Performance Models",
    description: "Course Project, Spring 2022",
    image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83",
    tags: ["CTGAN", "Synthetic Data", "Python"],
    summary: "Generated synthetic data using CTGAN in Python and performed distribution sampling for probabilistic modeling. Analyzed the impact of spatio-temporal data aggregation on the performance of ML models for crash rate prediction."
  },
  {
    id: 5,
    title: "NLP for Cost-Effective Transit Feedback Survey",
    description: "MTA Project, Fall 2021",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d",
    tags: ["NLP", "PEFT", "Hugging Face"],
    summary: "Fine-tuned tiny language models using PEFT for sentiment and topic classification on Twitter corpora with 92% accuracy. Developed data ingestion and evaluation pipelines using Python and Hugging Face Transformers for an experimentation platform."
  },
  {
    id: 6,
    title: "Validating Machine Learning Methods for Traffic State Classification",
    description: "Course Project, Spring 2021",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d",
    tags: ["XGBoost", "CNN", "SVM"],
    summary: "Collected and processed traffic flow data to extract relevant features for ML model training and hypothesis testing. Compared and validated various ML methods including XGBoost, Random Forest, CNN, SVM, and K-means clustering for traffic regime classification."
  },
];

// Group projects based on even distribution (2 per category)
const projectCategories = {
  research: projects.slice(0, 2),
  industry: projects.slice(2, 4),
  personal: projects.slice(4, 6),
};

const Projects = () => {
  // Initialize scroll reveal effect
  useScrollReveal();
  
  // State to track which project is expanded
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-display font-bold mb-6">Projects</h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A collection of my work in transportation engineering, artificial intelligence,
            and machine learning, showcasing innovative solutions to complex problems.
          </p>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-display font-bold mb-10 reveal">Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {projectCategories.research.map((project, index) => (
              <Accordion
                key={project.id}
                type="single"
                collapsible
                value={expandedProject === `research-${project.id}` ? `project-${project.id}` : undefined}
                onValueChange={(value) => {
                  if (value) {
                    setExpandedProject(`research-${project.id}`);
                  } else {
                    setExpandedProject(null);
                  }
                }}
                className="w-full"
              >
                <AccordionItem value={`project-${project.id}`} className="border-none">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    index={index}
                    isExpandable={true}
                    onClick={() => {
                      const newValue = expandedProject === `research-${project.id}` ? null : `research-${project.id}`;
                      setExpandedProject(newValue);
                    }}
                  />
                  <AccordionContent className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm mt-2">
                    <h3 className="font-medium text-lg mb-2">Project Summary</h3>
                    <p className="text-foreground/80">
                      {project.summary}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Projects */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-display font-bold mb-10 reveal">Industry Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {projectCategories.industry.map((project, index) => (
              <Accordion
                key={project.id}
                type="single"
                collapsible
                value={expandedProject === `industry-${project.id}` ? `project-${project.id}` : undefined}
                onValueChange={(value) => {
                  if (value) {
                    setExpandedProject(`industry-${project.id}`);
                  } else {
                    setExpandedProject(null);
                  }
                }}
                className="w-full"
              >
                <AccordionItem value={`project-${project.id}`} className="border-none">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    index={index}
                    isExpandable={true}
                    onClick={() => {
                      const newValue = expandedProject === `industry-${project.id}` ? null : `industry-${project.id}`;
                      setExpandedProject(newValue);
                    }}
                  />
                  <AccordionContent className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm mt-2">
                    <h3 className="font-medium text-lg mb-2">Project Summary</h3>
                    <p className="text-foreground/80">
                      {project.summary}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
      
      {/* Personal Projects */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-display font-bold mb-10 reveal">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {projectCategories.personal.map((project, index) => (
              <Accordion
                key={project.id}
                type="single"
                collapsible
                value={expandedProject === `personal-${project.id}` ? `project-${project.id}` : undefined}
                onValueChange={(value) => {
                  if (value) {
                    setExpandedProject(`personal-${project.id}`);
                  } else {
                    setExpandedProject(null);
                  }
                }}
                className="w-full"
              >
                <AccordionItem value={`project-${project.id}`} className="border-none">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    index={index}
                    isExpandable={true}
                    onClick={() => {
                      const newValue = expandedProject === `personal-${project.id}` ? null : `personal-${project.id}`;
                      setExpandedProject(newValue);
                    }}
                  />
                  <AccordionContent className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm mt-2">
                    <h3 className="font-medium text-lg mb-2">Project Summary</h3>
                    <p className="text-foreground/80">
                      {project.summary}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center reveal">
          <h2 className="text-3xl font-display font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-white/90 mb-8 text-lg">
            I'm always open to new opportunities and collaborative projects in transportation 
            engineering, AI, and machine learning.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-primary transition duration-300 bg-white rounded-md hover:bg-white/90 focus:shadow-outline focus:outline-none"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
