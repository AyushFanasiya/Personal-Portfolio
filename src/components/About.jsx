import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './../styles/about.css';

export default function About() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  return (
    <section id="about">
      <div ref={aboutRef} className="about-title-detail">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={
            isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <div className="about-detail">
          <p style={{ textAlign: 'justify' }}>
            I am a Computer Science graduate from Gujarat Technological University (GTU), specializing in frontend web development. Proficient in React.js, JavaScript (ES6+), Tailwind CSS, and API integration, I build responsive, scalable, and user-focused web applications. With hands-on experience in real-world projects like e-commerce platforms, task managers, and appointment systems, I am now expanding my skills toward full-stack development using Node.js, Express, and MongoDB. I'm passionate about crafting clean UIs, optimizing performance, and delivering seamless digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}