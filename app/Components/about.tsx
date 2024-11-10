import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image'; // Import Image from next/image

export default function About() {
  return (
    <section className="group hover:bg-gray-990 transition duration-500 ease-in-out">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-6 group-hover:text-white">
            {/* Title */}
            <h1 className="text-4xl font-bold text-white md:text-6xl transition duration-300 transform group-hover:text-white animate__fadeInUp">
              Muhammad Huzaifa
            </h1>
            <p className="text-sm mb-6 text-gray-500 sm:text-xl group-hover:text-white transition duration-300 animate__fadeInUp">
              I am Fullstack Developer
            </p>
            <p className="text-sm text-gray-500 sm:text-xl group-hover:text-white transition duration-300 animate__fadeInUp">
              A Full Stack Developer with expertise in
              <span className="font-mono font-extrabold"> HTML</span>,
              <span className="font-mono font-extrabold"> CSS</span>,
              <span className="font-mono font-extrabold"> JavaScript</span>,
              <span className="font-mono font-extrabold"> PHP</span>,
              <span className="font-mono font-extrabold"> Laravel</span>,
              <span className="font-mono font-extrabold"> TypeScript</span>,
              <span className="font-mono font-extrabold"> React.js</span>,
              and <span className="font-mono font-extrabold"> Next.js</span>,
              skilled in building dynamic, responsive web applications and delivering end-to-end solutions for both front-end and back-end development.
            </p>
            <br />
            {/* Social Icons */}
            <div className="flex gap-6 sm:gap-8">
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition duration-300 transform hover:scale-110"
              >
                <FaInstagram size={30} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition duration-300 transform hover:scale-110"
              >
                <FaFacebookF size={30} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition duration-300 transform hover:scale-110"
              >
                <FaLinkedinIn size={30} />
              </a>

              {/* Email */}
              <a
                href="mailto:youremail@example.com"
                className="text-gray-500 hover:text-red-600 transition duration-300 transform hover:scale-110"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="rounded-full  mb-[120px] transition duration-300 transform hover:scale-105">
            {/* Replace <img> with <Image /> */}
            <Image
              src="/huizaifa2.jpg"
              alt="Muhammad Huzaifa"
              className="inline-block shadow-[0px_0px_100px_lightblue] rounded-full animate__fadeInUp"
              width={500}  // Specify the width
              height={500} // Specify the height
            />
          </div>
        </div>
      </div>
    </section>
  );
}
