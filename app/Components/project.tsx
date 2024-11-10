
"use client"
import { FaGithub, FaLink } from 'react-icons/fa';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

import React, { useEffect } from 'react';
import Image from 'next/image'; // Import Image from next/image

type Project = {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    title: 'FrontEnd Project',
    description: 'A Static Website created with HTML, CSS, JS, Bootstrap. This site is also Mobile Friendly.',
    githubLink: 'https://github.com/Huzaifa-Shakoor/E-project-Sem-1',
    liveLink: 'https://project1.live',
    imageUrl: '/project1.PNG', // Add project image URLs in your public folder
  },
  {
    title: 'Dynamic Ecommerce Store',
    description: 'An e-commerce website built with PHP, Laravel.',
    githubLink: '/error',
    liveLink: '/error',
    imageUrl: '/project2.PNG',
  },
  {
    title: 'Ecommerce',
    description: 'This Ecommerce store built with Reactjs, TailwindCSS, Nextjs.',
    githubLink: '/error',
    liveLink: '/error',
    imageUrl: '/project3.PNG',
  },
  // Add more projects here...
];

export default function Projects() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <section id="projects" className="py-12  text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInUp animate__delay-1s">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
              data-aos="fade-up" // AOS animation trigger
              data-aos-delay={`${index * 200}`} // Delay animation for each card
            >
              {/* Replacing <img> with Next.js <Image> */}
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image is cover style
                  className="transition-all duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-200 transition duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-200 transition duration-300 transform hover:scale-110"
                  >
                    <FaLink size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
