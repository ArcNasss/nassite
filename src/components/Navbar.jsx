import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleClickLink = (hash) => {
    setActiveLink(hash);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`w-full fixed top-6 z-50 hidden md:flex justify-center transition-transform duration-500 ${
          showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="bg-[#1b1b1b] text-white px-16 py-6 rounded-full border border-gray-600 flex gap-10 shadow-lg text-lg">
          <a href="#home" className="hover:text-cyan-400 font-semibold">Home</a>
          <a href="#about" className="hover:text-cyan-400 font-semibold">About</a>
          <a href="#video-line" className="hover:text-cyan-400 font-semibold">Video Line</a>
          <a href="#contact" className="hover:text-cyan-400 font-semibold">Contact</a>
        </div>
      </nav>

      {/* Mobile Toggle Button (selalu tampil di HP) */}
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
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#video-line', label: 'Video Line' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClickLink(item.href)}
              className={`font-semibold transition-all ${
                activeLink === item.href
                  ? 'text-white underline underline-offset-4 decoration-white decoration-1'
                  : 'text-white hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
