
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="relative h-16 w-16">
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-foreground/80 font-medium"
        >
          Loading experience...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
