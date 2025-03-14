
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PublicationItemProps {
  title: string;
  authors: string[] | string;
  journal: string;
  year: string | number;
  doi?: string;
  link?: string;
  status?: string;
  category?: string;
  index: number;
}

const PublicationItem = ({
  title,
  authors,
  journal,
  year,
  doi,
  link,
  status,
  category,
  index,
}: PublicationItemProps) => {
  // Determine button text based on status
  const getButtonText = () => {
    if (status === "Technical Report") {
      return "View Technical Report";
    }
    return "View Publication";
  };

  return (
    <motion.div
      className="group relative border-b border-border last:border-0 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      {category && (
        <span className="chip bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-3 inline-block">
          {category}
        </span>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4">
        <div className="space-y-2">
          <h3 className="font-display text-lg font-medium group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-sm text-foreground/70">
            {Array.isArray(authors) ? authors.join(", ") : authors}
          </p>
          
          <div className="flex items-center text-sm text-foreground/60">
            <span className="font-medium">{journal}</span>
            <span className="mx-2">•</span>
            <span>{year}</span>
          </div>
        </div>
        
        <div className="flex justify-end items-start">
          {link ? (
            <motion.a
              href={doi ? `https://doi.org/${doi}` : link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-primary font-medium text-sm px-3 py-1.5 rounded-md hover:bg-primary/5 transition-colors duration-300"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`View publication: ${title}`}
            >
              <span>{getButtonText()}</span>
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          ) : status ? (
            <span className="inline-block text-sm px-3 py-1.5 bg-secondary/20 text-secondary-foreground rounded-md">
              {status}
            </span>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default PublicationItem;
