import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full fixed top-6 z-50 hidden md:flex justify-center">
        <div className="bg-[#1b1b1b] text-white px-16 py-6 rounded-full border border-gray-600 flex gap-10 shadow-lg text-lg">
          <a href="#home" className="hover:text-cyan-400 font-semibold">Home</a>
          <a href="#about" className="hover:text-cyan-400 font-semibold">About</a>
          <a href="#video-line" className="hover:text-cyan-400 font-semibold">Video Line</a>
          <a href="#contact" className="hover:text-cyan-400 font-semibold">Contact</a>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white text-xl p-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg transition hover:bg-white/20"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>


      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#1b1b1b] text-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start p-8 gap-6 text-xl">
          <a href="#home" onClick={toggleSidebar} className="hover:text-cyan-400 font-semibold">Home</a>
          <a href="#about" onClick={toggleSidebar} className="hover:text-cyan-400 font-semibold">About</a>
          <a href="#video-line" onClick={toggleSidebar} className="hover:text-cyan-400 font-semibold">Video Line</a>
          <a href="#contact" onClick={toggleSidebar} className="hover:text-cyan-400 font-semibold">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
