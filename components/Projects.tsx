"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {

      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration",
      image: "https://imperialmobilegallery.b-cdn.net/HeroPageFR.jpg",
      techIcons: 

      [
        { name: "React", src: "/react.png" },
        { name: "CSS", src: "/css.png" },
        { name: "Typescript", src: "/typescript.png" },
        { name: "Node.js", src: "/nodejs.png" },
      ]

    },

    {
      title: "Portfolio Website",
      description: "Creative showcase for designers and artists",
      image: "/ZombieShooter.png",
      techIcons: 

      [
        { name: "Three.js", src: "/threejs.png" },
        { name: "Html", src: "/html.png" },
        { name: "CSS", src: "/Css.png" },
      ]

    },

    {

      title: "Portfolio Website",
      description: "Creative showcase for designers and artists",
      image: "/Constellations.png",
      techIcons: 

      [
        { name: "Three.js", src: "/threejs.png" },
        { name: "Html", src: "/html.png" },
        { name: "CSS", src: "/Css.png" },
      ]

    },

    {
      title: "Portfolio Website",
      description: "Creative showcase for designers and artists",
      image: "https://imperialmobilegallery.b-cdn.net/HeroPageFR.jpg",
      techIcons: 
      
      [
        { name: "Next.js", src: "/nextjs.png" },
        { name: "Tailwind", src: "/tailwind.png" },
        { name: "Framer Motion", src: "/framer.png" },
        { name: "Vercel", src: "/vercel.png" },
      ]

    }
    
    
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h1>

        <div className="space-y-20">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              className="relative"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
            >
              {/* Project Container */}
              <motion.div
                className="group relative overflow-hidden rounded-lg w-full"
                style={{ aspectRatio: "5 / 3" }}
                variants={item}
              >
                {/* Image Wrapper */}
                <div
                  className="absolute top-0 left-0 w-full h-full group-hover:bg-black/50 transition-all duration-300"
                  style={{
                    boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      priority
                      className="rounded-lg brightness-100 hover:brightness-75 transition-transform duration-500 ease-out group-hover:scale-110"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>

                {/* Text Overlay */}
                <motion.div
                  className="absolute top-6 left-6 transition-all duration-300 group-hover:translate-y-4"
                  variants={item}
                >
                  <p className="text-3xl font-bold group-hover:text-4xl transition-all duration-300">
                    {project.title}
                  </p>
                  <p className="text-xl text-gray-300 mt-1 group-hover:text-2xl transition-all duration-300">
                    {project.description}
                  </p>
                </motion.div>

                {/* Learn More Button */}
                <motion.div
                  className="absolute bottom-6 left-6 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  variants={item}
                >
                  <button className="bg-white text-[#181414] px-6 py-3 text-xl rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                    Learn More <span className="text-2xl">→</span>
                  </button>
                </motion.div>

                {/* Technology Icons */}
                <motion.div
                  className="absolute bottom-6 right-6 flex gap-4"
                  variants={container}
                >
                  {project.techIcons.map((icon, index) => (
                    <motion.div
                      key={icon.name}
                      className="transition-all duration-500 ease-out transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ transitionDelay: `${index * 100}ms` }}
                      variants={item}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                        title={icon.name}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;