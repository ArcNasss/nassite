import React, { useEffect, useState, useRef } from 'react';

const VideoLine = () => {
  const [width, setWidth] = useState(window.innerWidth < 768 ? 250 : 500);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0;

      if (isInView) {
        // Besarkan saat sudah sampai section
        setWidth(isMobile ? 400 : 800);
      } else {
        // Kecilkan jika belum sampai section
        setWidth(isMobile ? 250 : 500);
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="video-line" ref={sectionRef}>
      <div className="bg-black text-white w-full flex items-center justify-center py-20">
        <img
          src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
          alt="scroll-gif"
          style={{
            width: `${width}px`,
            height: 'auto',
            transition: 'width 0.5s ease-in-out',
          }}
        />
      </div>
    </section>
  );
};

export default VideoLine;
