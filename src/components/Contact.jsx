import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './../styles/contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }
    }
  };

  return (
    <motion.section 
      id="contact"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>
        Contact Me
      </motion.h2>

      <motion.a 
        href="tel:+919725703502"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-phone"></i> +91 97 2570 3502 
      </motion.a>

      <motion.a 
        href="mailto:ayushfanashiya@gmail.com"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-envelope"></i> ayushfanashiya@gmail.com
      </motion.a>

      <motion.a 
        href="https://github.com/AyushFanasiya" 
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fab fa-github"></i> GitHub
      </motion.a>

      <motion.a 
        href="https://www.linkedin.com/in/ayush-fanasiya"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fab fa-linkedin"></i> LinkedIn
      </motion.a>
    </motion.section>
  );
}