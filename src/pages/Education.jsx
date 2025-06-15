import React from 'react';

const educationData = [
  {
    year: '2015 - 2020',
    title: 'MI Islamiyah Kedungjambe',
    description:
      'Studied a wide range of elementary subjects including Mathematics, Science, Bahasa Indonesia, and Islamic education. Actively participated in extracurricular activities and developed basic academic and social skills crucial for further education.',
  },
  {
    year: '2020 - 2023',
    title: 'MTs Islamiyah Kedungjambe',
    description:
      'Expanded on foundational knowledge with more advanced subjects. Developed discipline through religious and academic programs, participated in science competitions, and joined school organizations that enhanced leadership and collaboration skills.',
  },
  {
    year: '2023 - Present',
    title: 'SMK Negeri 4 Bojonegoro - Software Engineering',
    description:
      'Focused on practical and theoretical aspects of software development including web development, programming (HTML, CSS, JavaScript, Laravel), database management, and version control with Git. Also involved in real-world project work and internships.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-black text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
        Education History
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />

        <div className="flex flex-col gap-2">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative md:w-[47%] p-6 rounded-2xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm  ${
                index % 2 === 0
                  ? 'md:self-start md:mr-auto md:ml-0'
                  : 'md:self-end md:ml-auto md:mr-0'
              }`}
              style={{ marginTop: index === 0 ? '0' : '0px' }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute hidden md:block w-5 h-5 rounded-full bg-cyan-400 border-4 border-black top-6 ${
                  index % 2 === 0 ? '-right-11' : '-left-11'
                }`}
              ></div>

              <h3 className="text-xl font-semibold text-cyan-300">{edu.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{edu.year}</p>
              <p className="text-gray-400 text-base leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
