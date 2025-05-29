import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { TypeAnimation } from 'react-type-animation';
// import profileDarkMode from "./../assets/images/profile-lightgray-bg.png";
// import profileLightMode from "./../assets/images/profile-blue-bg.png";
import linkedinIcon from "./../assets/images/icon/linkedin-icon.png";
import githubIcon from "./../assets/images/icon/github-icon.png";
import emailIcon from "./../assets/images/icon/email-icon.png";
import phoneIcon from "./../assets/images/icon/phone-icon.png";
import CustomTooltip from "./CustomTooltip";
import LazyImage from "./LazyImage";
import profileLight from "./../assets/images/profile/profile-light.png";
import profileDark from "./../assets/images/profile/profile-dark.png";
import "./../styles/hero.css";

const TypewriterText = () => {
  return (
    <TypeAnimation
      sequence={[
        'Frontend Developer',
        1000,
        'React Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="typewriter-text"
    />
  );
};

export default function Hero() {
  const { isDarkMode } = useDarkMode();

  return (
    <header id="hero">
      <div className="hero-text-img">
        <motion.div
          className="profile-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="profile-greet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span>Hi, I'm </span>Ayush Fanasiya
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ minHeight: '3rem' }}
          >
            <TypewriterText />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Focused on building efficient, scalable, and user-friendly
            applications. Specializing in modern web technologies to create
            seamless digital experiences.
          </motion.p>
          <motion.div
            className="contact-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            {[
              {
                href: "https://www.linkedin.com/in/ayush-fanasiya",
                src: linkedinIcon,
                alt: "LinkedIn",
              },
              {
                href: "https://github.com/AyushFanasiya",
                src: githubIcon,
                alt: "GitHub",
              },
              {
                href: "mailto:ayushfanashiya@gmail.com",
                src: emailIcon,
                alt: "Email",
              },
              { 
                href: "tel:+919725703502", 
                src: phoneIcon, 
                alt: "Phone" 
              },
            ].map((link, index) => (
              <CustomTooltip key={link.alt} title={link.alt}>
                <motion.a
                  href={link.href}
                  target={
                    link.alt === "LinkedIn" || link.alt === "GitHub"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.alt === "LinkedIn" || link.alt === "GitHub"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <img
                    src={link.src}
                    alt={link.alt}
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </motion.a>
              </CustomTooltip>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="profile-img"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <LazyImage
              src={isDarkMode ? profileDark : profileLight}
              alt="Profile Picture"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
