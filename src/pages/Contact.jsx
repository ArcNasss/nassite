import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-20" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="text-base md:text-lg text-gray-300 mb-10">
          Feel free to reach out if you want to collaborate or just have a chat. I’m open to new opportunities and connections!
        </p>

        <form className="flex flex-col gap-5 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-[#1a1a1a] border border-gray-600 focus:outline-none focus:border-white transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-[#1a1a1a] border border-gray-600 focus:outline-none focus:border-white transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md bg-[#1a1a1a] border border-gray-600 focus:outline-none focus:border-white transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-white hover:bg-gray-200 text-black font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;