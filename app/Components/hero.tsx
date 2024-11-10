"use client"; // Mark this as a client-side component

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image from next/image

const TypewriterEffect = ({ texts, speed }: { texts: string[]; speed: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        if (isDeleting) {
          // Backspace effect
          return currentText.substring(0, prevText.length - 1);
        } else {
          // Typing effect
          return currentText.substring(0, prevText.length + 1);
        }
      });

      // When the full text is typed, start deleting
      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Wait 1 second before backspacing
      }

      // When the text is deleted, move to the next text in the array
      if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through the texts
      }
    }, speed);

    return () => clearInterval(interval);
  }, [displayedText, isDeleting, texts, textIndex, speed]);

  return <span>{displayedText}</span>;
};

export default function Hero() {
  const texts = ["FullStack Developer", "Freelancer", "Programmer"]; // List of texts to type and erase in a loop
  return (
    <section className="text-white body-font py-24">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 rounded-full md:mb-0 mx-20  animate__animated animate__fadeIn">
          {/* Replace <img> with <Image /> */}
          <Image
            className="object-cover shadow-[0px_0px_100px_lightblue] object-center rounded-full drop-shadow-2xl transform transition duration-500 hover:scale-105"
            alt="hero"
            src="/huzaifa.jpg"
            width={500}  // Specify width
            height={500} // Specify height (since next/image requires dimensions)
          />
        </div>
        <div className="lg:flex-grow mx-20 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-mono text-5xl sm-mb-10 sm:text-3xl text-white mb-4 font-medium animate__animated animate__fadeIn animate__delay-1s">
            HI I AM,
            <br className="hidden lg:inline-block" />
            <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">MUHAMMAD HUZAIFA</span>
          </h1>
          {/* Typewriter effect for changing text */}
          <p className="mb-8 leading-relaxed font-bold font-mono text-4xl sm:text-5xl hover:font-extrabold animate__animated animate__fadeIn animate__delay-2s">
            I am a{' '}
            <TypewriterEffect texts={texts} speed={150} />
          </p>
        </div>
      </div>
    </section>
  );
}
