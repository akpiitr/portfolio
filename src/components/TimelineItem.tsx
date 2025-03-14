
import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  isLeft?: boolean;
  index: number;
}

const TimelineItem = ({
  year,
  title,
  description,
  icon,
  isLeft = false,
  index,
}: TimelineItemProps) => {
  return (
    <div className={`flex flex-col ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-8 relative`}>
      {/* Timeline center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-[-0.5px]" />
      
      {/* Date */}
      <motion.div 
        className={`w-full md:w-1/2 pb-12 ${isLeft ? 'md:pl-8 md:pr-4' : 'md:pr-8 md:pl-4'} relative`}
        initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className={`flex ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}`}>
          <div className="flex flex-col">
            <span className="chip bg-primary/10 text-primary inline-flex self-start mb-2">{year}</span>
            <h3 className="text-xl font-display font-medium">{title}</h3>
            <p className="text-foreground/70 mt-2">{description}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Icon point */}
      <div className="absolute left-4 md:left-1/2 transform translate-x-[-50%] z-10">
        <motion.div 
          className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 + index * 0.1 }}
        >
          {icon}
        </motion.div>
      </div>
      
      {/* Spacer for alternate layout */}
      <div className="w-full md:w-1/2" />
    </div>
  );
};

export default TimelineItem;
