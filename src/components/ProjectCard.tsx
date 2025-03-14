
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
  isExpandable?: boolean;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  index,
  isExpandable = false,
  onClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="chip bg-white shadow-sm text-primary text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors duration-300"
                aria-label={`View ${title} on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors duration-300"
                aria-label={`View ${title} live demo`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
          
          {isExpandable ? (
            <motion.button
              onClick={onClick}
              className="text-sm font-medium text-primary flex items-center space-x-1 cursor-pointer"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Details</span>
              <ChevronDown className="h-4 w-4" />
            </motion.button>
          ) : (
            <motion.button
              className="text-sm font-medium text-primary flex items-center space-x-1"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Details</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
