"use client";
import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";  // <-- Correct imports

export default function Resume() {
  // Removed `inView` state as it's not being used.
  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById("resume-section");
      const rect = resumeSection?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom >= 0) {
        // You can implement any action when the section comes into view
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "MySQL", value: 90 },
    { name: "PHP & LARAVEL", value: 95 },
    { name: "React.js", value: 95 },
    { name: "Next.js", value: 70 },
    { name: "TypeScript", value: 90 },
  ];

  return (
    <section id="resume-section" className="py-10 text-white">
      <div className="container mx-auto px-5">
        {/* Resume Header */}
        <div className="text-center mb-10 animate__animated animate__fadeIn">
          <h1 className="text-4xl font-extrabold text-white mb-2 transition-transform transform hover:scale-105 hover:text-blue-400">
            Muhammad Huzaifa
          </h1>
          <p className="text-xl text-white">Full Stack Developer</p>
          <p className="text-gray-400 mt-2">
            Email: huzaifa2493@gmail.com | Phone: +923302788498 | Location: Karachi, Pakistan
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="animate__animated animate__fadeIn animate__delay-1s">
              <h2 className="text-3xl font-semibold text-white mb-4">Skills</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <p className="text-lg text-white">{skill.name}</p>
                    <div className="relative">
                      <progress
                        value={skill.value}
                        max="100"
                        className="w-full h-4 bg-blue-600 rounded-2xl transition-all duration-300 hover:bg-blue-700"
                      >
                        {skill.value}%
                      </progress>
                      <div className="absolute inset-0 flex justify-center items-center">
                        <span className="text-white font-semibold">{skill.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="animate__animated animate__fadeIn animate__delay-2s">
              <h2 className="text-3xl font-semibold text-white mb-4">Contact Information</h2>
              <p className="text-gray-400 mb-6">Feel free to reach out to me via email, phone:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300">
                  <FaEnvelope className="text-2xl text-blue-400" />
                  <div className="mx-3">
                    <p className="text-white">Email</p>
                    <a
                      href="mailto:huzaifa2493@gmail.com"
                      className="text-blue-400 hover:text-white transition-colors duration-300"
                    >
                    Click Here
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-green-600 transition-all duration-300">
                  <FaPhoneAlt className="text-2xl text-green-400" />
                  <div>
                    <p className="text-white">Phone</p>
                    <a
                      href="tel:+923302788498"
                      className="text-green-400 hover:text-white transition-colors duration-300"
                    >
                      +923302788498
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-yellow-600 transition-all duration-300">
                  <FaMapMarkerAlt className="text-2xl text-yellow-400" />
                  <div>
                    <p className="text-white">Location</p>
                    <p className="text-yellow-400">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider (Vertical Line) */}
          <div className="border-l-2 border-gray-600 h-full mx-10 my-10 lg:my-0"></div>

          {/* Right Section: Experience & Education */}
          <div className="w-full lg:w-1/2 space-y-10">
            {/* Experience Section */}
            <div className="mb-10 animate__animated animate__fadeIn animate__delay-2s">
              <h2 className="text-3xl font-semibold text-white mb-4">Experience</h2>
              <div className="space-y-6">
                {/* Job 1 */}
                <div className="flex items-center mb-6 hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" // Increased size for larger screens, responsive
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a4 4 0 0 1 0 8 4 4 0 0 1 0-8zm0 10c-4 0-6 2-6 6v2h12v-2c0-4-2-6-6-6z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                    <p className="text-gray-400">Techline Programmers</p>
                    <p className="text-sm text-gray-500">March 2023 - Present</p>
                    <ul className="list-disc pl-6 mt-2 text-gray-300">
                      <li>Developed full-stack web applications using React, Node.js, Nextjs.</li>
                      <li>Collaborated with designers and backend developers to build scalable and user-friendly platforms.</li>
                      <li>Integrated RESTful APIs and third-party services for various functionalities.</li>
                    </ul>
                  </div>
                </div>
                {/* Job 2 */}
                <div className="flex items-center mb-6 hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-green-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" // Increased size for larger screens, responsive
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                    <p className="text-gray-400">Freelancing</p>
                    <p className="text-sm text-gray-500">June 2018 - December 2019</p>
                    <ul className="list-disc pl-6 mt-2 text-gray-300">
                      <li>Built modern web applications using PHP and Laravel.</li>
                      <li>Worked on performance optimization and debugging.</li>
                      <li>Contributed to designing and maintaining database schema and relationships.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
