import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ParticlesBackground from "./ParticlesBackground";
import { particlesConfig } from "./config/particles-config";

const Hero = () => {
  /* states */
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : "light";
  });

  //change nav colore when scrolling
  const [color, setColor] = useState(false);

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

  /* handlers */
  const handlerNavHideOnClick = () => {
    setIsOpen(false);
  };

  const handlerDarkMode = () => {
    const updateParticlesConfig = particlesConfig.map((config) => {
      return {
        ...config,
        particles: {
          ...config.particles,
          color: {
            value: darkMode === "dark" ? "#ffffff" : "#000000",
          },
          shape: {
            ...config.particles.shape,
            stroke: {
              ...config.particles.shape.stroke,
              value: darkMode === "dark" ? "#ffffff" : "#000000",
            },
          },
          line_linked: {
            ...config.particles.line_linked,
            value: darkMode === "dark" ? "#ffffff" : "#000000",
          },
        },
      };
    });
    setDarkMode((state) => (state === "light" ? "dark" : "light"));
    particlesJS("tsparticles", updateParticlesConfig);
  };

  const handlerChangeNavColor = () => {
    if (window.scrollY >= 750) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  /* effects */
  useEffect(() => {
    if (darkMode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    window.addEventListener("scroll", handlerChangeNavColor);
  }, []);

  return (
    /* htmls body */

    <article>
      {/* hero section */}
      <ParticlesBackground />
      <section className=" flex flex-col h-screen z-[200] relative">
        {/* navbar */}

        <section
          className={`header fixed w-full mx-auto md:py-3 text-black rounded-b-lg dark:bg-container dark:text-white ${
            color
              ? "bg-white dark:bg-container"
              : "dark:bg-white/0 dark:text-black"
          }`}
        >
          <div className="md:flex md:justify-between md:items-center mx-auto w-full px-5">
            {/* navbar logo all classes to be centered */}
            <div className="flex justify-between items-center text-2xl md:text-4xl font-light font-poppins uppercase text-white pt-5 md:pt-0">
              <div
                className={`flex items-center gap-4 text-black font-semibold dark:text-white ${
                  color ? "text-black" : "dark:text-black"
                }`}
              >
                <i className="bx bxs-copyright text-[#32CD32] text-5xl"></i>
                Carlos
                <span className="animate-ping text-xs md:text-xl">_</span>
              </div>

              <div
                className="flex text-3xl px-4 md:hidden cursor-pointer"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                {isOpen ? (
                  <i className="bx bx-x text-black dark:text-white "></i>
                ) : (
                  <i className="bx bx-menu text-black dark:text-white"></i>
                )}
              </div>
            </div>

            {/* menu */}
            <div>
              <nav>
                <ul
                  className={`flex gap-2.5 md:text-lg items-center justify-center ${
                    isOpen
                      ? "flex-col md:flex-row md:items-center visible"
                      : "invisible md:visible"
                  }`}
                >
                  <div onClick={handlerNavHideOnClick}>
                    {darkMode === "dark" ? (
                      <i
                        className="bx bxs-sun cursor-pointer text-2xl transition ease-in-out delay-150 hover:-translate-y-1  duration-300"
                        onClick={handlerDarkMode}
                      ></i>
                    ) : (
                      <i
                        className="bx bxs-moon cursor-pointer text-2xl text-gray-500 rounded-full transition ease-in-out delay-150 hover:-translate-y-1  duration-300"
                        onClick={handlerDarkMode}
                      ></i>
                    )}
                  </div>

                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32]  py-1"
                    href="/"
                  >
                    Home
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32]  py-1"
                    href="#about"
                    onClick={handlerNavHideOnClick}
                  >
                    About
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32]  py-1"
                    href="#academic"
                    onClick={handlerNavHideOnClick}
                  >
                    Academic
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32] py-1"
                    href="#technologies"
                    onClick={handlerNavHideOnClick}
                  >
                    Technologies
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:text-[#32CD32] py-1"
                    href="#projects"
                    onClick={handlerNavHideOnClick}
                  >
                    Projects
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32] py-1"
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
        <section className="flex flex-1 -z-[100] items-center">
          <div className="w-full mx-auto">
            <h1 className="text-center text-5xl md:text-8xl font-semibold font-poppins ">
              I am a<span className="animate-ping">_</span>
              <br />
              <span className="text-3xl font-light md:text-4xl mt-5">
                {text}
              </span>
              <Cursor cursorColor="gray" cursorStyle="" />
            </h1>

            <div className="flex gap-3 px-3 justify-center text-[#282C34] ">
              <a
                className="px-5 py-2 inline-block bg-[#32CD32] hover:bg-black hover:text-white transition-colors mt-10 rounded-lg"
                href="https://drive.google.com/file/d/1ZOyo0DkAEZMWK2G0DF204fo8j93GrnQk/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
              <a
                className="px-5 py-2 inline-block  bg-[#32CD32] hover:bg-black hover:text-white transition-colors mt-10 rounded-lg drop-shadow-3xl"
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
