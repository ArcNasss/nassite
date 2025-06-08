import React, { useEffect, useState } from 'react';

const VideoLine = () => {
  const [width, setWidth] = useState(300);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hitung lebar berdasarkan scroll dan ukuran layar
      if (scrollY > 800) {
        const newWidth = window.innerWidth < 768 ? 400 : 800;
        setWidth(newWidth);
      } else if (scrollY <= 0) {
        const newWidth = window.innerWidth < 768 ? 250 : 300;
        setWidth(newWidth);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <section id='video-line'>
     <div className="bg-black text-white w-full flex items-center justify-center py-20">
      <img
        src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
        style={{
          width: `${width}px`,
          height: 'auto',
          transition: 'width 0.5s ease-in-out',
        }}
        alt="scroll-gif"
      />
    </div>
   </section>
  );
};

export default VideoLine;
