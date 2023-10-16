import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ParticlesBackground from "./ParticlesBackground";
import { particlesConfig } from "./config/particles-config";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [text] = useTypewriter({
    words: [
      "Jr. front-end developer",
      "computer engineer student",
      "self-Paced student",
      "adaptable person",
      "someone with desire to learn",
    ],
    loop: {},
    typeSpeed: 125,
    fontSize: "3rem",
  });

  const handlerNavHideOnClick = () => {
    setIsOpen(false);
  };

  return (
    /* htmls body */

    <article>
      {/* hero section */}
      <ParticlesBackground />
      <section className=" flex flex-col h-screen z-[100]">
        {/* navbar */}

        <section className="fixed w-full mx-auto md:py-3 bg-[#50555e]/80 rounded-b-lg">
          <div className="md:flex md:justify-between md:items-center mx-auto w-full px-5">
            {/* navbar logo all classes to be centered */}
            <div className="flex justify-between items-center text-2xl md:text-4xl font-light font-poppins uppercase text-white">
              <div className="flex items-center">
                <img className="h-10 md:h-16" src="/images/logo.png" alt="" />
                Carlos
                <span className="animate-ping text-xs md:text-xl">_</span>
              </div>

              <div
                className="flex text-3xl px-4 md:hidden cursor-pointer"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                {isOpen ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </div>
            </div>

            {/* menu */}
            <div>
              <nav>
                <ul
                  className={`flex gap-6 text-xl md:text-xl md:pr-1  ${
                    isOpen
                      ? "flex-col md:flex-row md:items-center visible"
                      : "invisible md:visible"
                  }`}
                >
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="/"
                  >
                    Home
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="#about"
                    onClick={handlerNavHideOnClick}
                  >
                    About
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="#academic"
                    onClick={handlerNavHideOnClick}
                  >
                    Academic
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="#technologies"
                    onClick={handlerNavHideOnClick}
                  >
                    Technologies
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="#projects"
                    onClick={handlerNavHideOnClick}
                  >
                    Projects
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="#contact"
                    onClick={handlerNavHideOnClick}
                  >
                    Contact
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* hero content*/}
        <section className="flex flex-1 z-[100] items-center">
          <div className="w-full mx-auto">
            <h1 className="text-center  text-5xl md:text-8xl font-semibold font-poppins ">
              I am a<span className="animate-ping">_</span>
              <br />
              <span className="text-3xl font-light md:text-4xl mt-5">
                {text}
              </span>
              <Cursor cursorColor="gray" cursorStyle="" />
            </h1>

            <div className="flex gap-3 px-3 justify-center text-[#282C34] ">
              <a
                className="px-5 py-2 inline-block bg-[#acc8e5] hover:bg-slate-400 hover:text-white transition-colors mt-10 rounded-lg"
                href="https://drive.google.com/file/d/1ZOyo0DkAEZMWK2G0DF204fo8j93GrnQk/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
              <a
                className="px-5 py-2 inline-block  bg-[#acc8e5] hover:bg-slate-400 hover:text-white transition-colors mt-10 rounded-lg"
                href="https://drive.google.com/file/d/1DuBhBpdsRAmW1OR1vL4j9PjMAI5rzgmJ/view?usp=sharing"
                target="_blank"
              >
                ATS Resume
              </a>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};
export default Hero;
