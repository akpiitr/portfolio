
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store in localStorage for backup
      const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      const newMessage = {
        ...formState,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      const updatedMessages = [...existingMessages, newMessage];
      localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
      
      // Send to Web3Forms
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject);
      formData.append('message', formState.message);
      
      // Web3Forms access key
      formData.append('access_key', '9720cdcd-9e23-40fb-9378-a8bad6cfd119');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully.",
        });
        
        // Reset form fields
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
            placeholder="Your name"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formState.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
          placeholder="Subject of your message"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formState.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none"
          placeholder="Your message"
        />
      </div>
      
      <motion.button
        type="submit"
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <span className="ml-2">Sending...</span>
          </>
        ) : isSubmitted ? (
          <>
            <Check className="w-5 h-5" />
            <span className="ml-2">Sent Successfully</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span className="ml-2">Send Message</span>
          </>
        )}
      </motion.button>
      
      {/* Hidden honeypot field to prevent spam */}
      <div className="hidden">
        <input type="text" name="botcheck" />
      </div>
    </motion.form>
  );
};

export default ContactForm;
