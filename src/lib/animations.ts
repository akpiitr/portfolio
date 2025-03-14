
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Hook to handle scroll reveal animations
export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", revealOnScroll);
    // Initial check
    revealOnScroll();
    
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
}

// Hook to stagger animations of child elements
export function useStaggeredAnimation(staggerAmount = 0.1) {
  return (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      delay: index * staggerAmount,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  });
}

// Hook for parallax effect
export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      ref.current.style.transform = `translateY(${scrollY * speed}px)`;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
  
  return ref;
}

// Hook to track element in view for animations
export function useAnimateInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  return { ref, isInView };
}

// Hook for smooth counter animation
export function useSmoothCounter(endValue: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const startCount = 0;
    
    const easeOutQuad = (t: number) => t * (2 - t);
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * (endValue - startCount) + startCount));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, isInView]);
  
  return { count, ref: countRef };
}
