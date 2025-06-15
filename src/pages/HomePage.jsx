import React from 'react'
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

const HomePage = () => {
  return (
    <section id='home'>
      <div className="bg-black text-white min-h-screen w-full flex flex-col md:flex-row items-center px-6 md:px-8 relative">
      {/* Konten utama */}
      <div className="max-w-4xl md:ml-20 gap-y-6 flex flex-col justify-center mt-16 md:mt-0">
        <p className="text-cyan-400 text-xl mt-4 md:text-2xl italic">Hi, I'm Nasril!</p>
        <h1 className="text-2xl md:text-4xl font-extrabold text-white mt-2">Software Student</h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed md:leading-8">
          Every line of code is a step forward. I'm learning not just to code, but to think like a problem solver. <br />
          Growth takes time, patience, and a lot of console logs.
        </p>

        {/* Tombol CV + Medsos */}
        <div className="flex items-center gap-4 md:gap-6 mt-6 md:mt-8 flex-wrap md:flex-nowrap">
          <a
            href="https://drive.google.com/file/d/1w1BcaC05yfjPdh1CFjkxjRiEaC1hS-97/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-sm md:text-xl text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:bg-gray-200 hover:text-black transition flex items-center gap-2"
          >
            View my CV <span className="text-xl md:text-2xl">↓</span>
          </a>

          {/* Tombol media sosial (inline saat mobile, samping saat desktop) */}
          <div className="flex gap-4 md:hidden">
            <a href="https://github.com/ArcNasss" target="" rel="noopener noreferrer" className="hover:text-gray-600 text-xl">
              <FaGithub />
            </a>
            <a href="https://instagram.com/nasriillham" target="" rel="noopener noreferrer" className="hover:text-gray-600 text-xl">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 text-xl">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Media sosial untuk desktop */}
      <div className="hidden md:flex md:absolute md:right-32 md:bottom-48 flex-col gap-6 text-7xl mt-10 md:mt-0">
        <a href="https://github.com/ArcNasss" target="" rel="noopener noreferrer" className="hover:text-gray-600">
          <FaGithub />
        </a>
        <a href="https://instagram.com/nasriillham" target="" rel="noopener noreferrer" className="hover:text-gray-600">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
          <FaFacebook />
        </a>
      </div>
    </div>
    </section>
  );
};

export default HomePage;
