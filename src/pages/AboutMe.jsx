import { useState } from "react";

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article id="about" className="h-screen w-full mx-auto px-8">
      <nav className="w-full mx-auto md:justify-between z-[111] bg-gray-500 leading-[80px] text-black">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl font-semibold text-white tracking-[3px] cursor-pointer uppercase px-4"
        >
          Carlos<b className="text-6xl text-[#7f00ff]">_</b>
          {isOpen ? (
            <i className="bx bx-x md:hidden"></i>
          ) : (
            <i className="bx bx-menu md:hidden"></i>
          )}
        </div>
        <ul className={`md:flex ${isOpen ? "visible" : "hidden"}`}>
          <li className="list-none my-0 mx-[15px]">
            <a
              className="text-2xl text-[#3d533f] hover:text-[#7f00ff] tracking-[3px] capitalize"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="list-none my-0 mx-[15px]">
            <a
              className="text-2xl text-[#3d533f] hover:text-[#7f00ff] tracking-[3px] capitalize"
              href="#technologies"
            >
              Technologies
            </a>
          </li>
          <li className="list-none my-0 mx-[15px]">
            <a
              className="text-2xl text-[#3d533f] hover:text-[#7f00ff] tracking-[3px] capitalize"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="list-none my-0 mx-[15px]">
            <a
              className="text-2xl text-[#3d533f] hover:text-[#7f00ff] tracking-[3px] capitalize"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="mb-8 md:mb-0">
          <img src="/images/circle.png" alt="circle" />
        </div>

        <div className="w-full mx-auto bg-gray-600/40 rounded-3xl text-center md:w-1/2">
          <h1 className="font-poppins font-semibold text-4xl py-10">
            About me
          </h1>
          <p className="font-sen text-p-gray text-justify font-normal text-2xl px-9 py-5">
            I'm Carlos Alcantara, a junior front-end web developer with a
            passion for creating visually appealing and user-friendly websites
            and applications. With a background in customer service and IT
            service desk, I bring a diverse skill set to my work.
            <br />
            I have a strong technical proficiency in HTML, CSS, JavaScript,
            Tailwind, React, and responsive design. I am committed to staying
            updated on emerging technologies and industry trends to deliver
            innovative solutions.
            <br />I am seeking collaborations with forward-thinking
            professionals and organizations that value creativity and
            user-centric design. Let's connect on LinkedIn or reach out to me at
            carlos.ma.rodriguez91@gmail.com to explore opportunities and make
            the web a better place together!
          </p>
        </div>
      </div>
    </article>
  );
};
export default AboutMe;
