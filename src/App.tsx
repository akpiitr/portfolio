
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Journey = lazy(() => import("./pages/Journey"));
const Projects = lazy(() => import("./pages/Projects"));
const Publications = lazy(() => import("./pages/Publications"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// AnimationWrapper component to handle route transitions
const AnimationWrapper = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingScreen />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <AnimationWrapper />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
