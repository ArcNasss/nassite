import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 md:py-40 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="about-image.png"
            alt="Nasril Ilham Saputra"
            className="w-48 md:w-96 object-cover shadow-lg rounded-xl"
          />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl md:text-8xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-xl leading-relaxed text-gray-300">
            Hello, my name is <span className='text-white font-semibold'>Nasril Ilham Saputra</span>, a software student in Grade 11 at SMK Negeri 4 Bojonegoro. I’m passionate about coding, problem solving, and exploring technology.
            I’ve represented my school in LKS Jatim, joined cybersecurity and game development competitions, and gained valuable teamwork experience through various projects.
            These activities have helped me grow both technically and personally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;