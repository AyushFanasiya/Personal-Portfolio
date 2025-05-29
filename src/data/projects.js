// Frontend Thumbnails
//ICONS
import cloudinary from "./../assets/images/icon/Cloudinary Icon Blue.png";
import tailwindCss from "./../assets/images/icon/tailwind-css.png";
import css from "./../assets/images/icon/css.png";
import html from "./../assets/images/icon/html.png";
import js from "./../assets/images/icon/js.png";
import react from "./../assets/images/icon/react.png";
import reduxToolkit from "./../assets/images/icon/redux-toolkit.png";
import vite from "./../assets/images/icon/vite.png";
import framerMotion from "./../assets/images/icon/framer-motion.png";
import nodejs from "./../assets/images/icon/nodejs.png";
import express from "./../assets/images/icon/express.png";
import firebase from "./../assets/images/icon/firebase.png";
import mongoDb from "./../assets/images/icon/mongo-db.png";

export const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and certifications. Features dark/light mode, smooth animations, and a clean user interface.",
    technologies: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
      { name: "Framer Motion", icon: framerMotion },
      { name: "Vite", icon: vite },
    ],
    image: "Personal Portfolio .png",
    liveLink: "https://personal-portfolio-lyart-phi-42.vercel.app/",
    githubLink: "https://github.com/AyushFanasiya/React-Portfolio"
  },
  {
    title: "E-commerce",
    description: "A full-featured e-commerce platform with user authentication, product management, shopping cart.",
    technologies: [
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwindCss },
      { name: "Redux", icon: reduxToolkit },
      { name: "Firebase", icon: firebase },
      { name: "Cloudinary", icon: cloudinary },
    ],
    image: "zamazon.png",
    liveLink: "https://e-commerce-platform-dtph.vercel.app/",
    githubLink: "https://github.com/AyushFanasiya/E-commerce-Platform"
  },
  {
    title: "Task Management System",
    description: "A productivity-focused task manager for admins and employees to assign, track, and update tasks with an intuitive interface and local data storage.",
    technologies: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
    ],
    image: "Taskify.png",
    liveLink: "https://github.com/AyushFanasiya/Task-Manager",
    githubLink: "https://github.com/AyushFanasiya/Task-Manager"
  },
  {
    title: "Currency Converter",
    description: "A real-time currency conversion tool supporting 150+ currencies with instant rate updates, swapping feature, and responsive user interface.",
    technologies: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
    ],
    image: "currency-converter.png",
    liveLink: "https://currency-converter-eight-puce.vercel.app/",
    githubLink: "https://github.com/AyushFanasiya/Currency-Converter"
  },
  {
    title: "Password Generator",
    description: "A simple yet powerful password generator with customizable options, real-time preview, and a copy-to-clipboard function for seamless UX.",
    technologies: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
    ],
    image: "PasswordGenerator.png",
    liveLink: "https://password-generator-zy58.vercel.app/",
    githubLink: "https://github.com/AyushFanasiya/PasswordGenerator"
  },
  {
    title: "Appointment Booking Module",
    description: "An interactive appointment scheduling system with a user-friendly layout, built using core web technologies for seamless slot selection.",
    technologies: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongoDb },
    ],
    image: "AppointmentMaking .png",
    liveLink: "/",
    githubLink: "/"
  }
];
