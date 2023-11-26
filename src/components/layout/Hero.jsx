import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ParticlesBackground from "./ParticlesBackground";
import { particlesConfig } from "./config/particles-config.js";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Hero = () => {
  /* states */
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : "light";
  });

  /* localstorage language */
  const [t, i18n] = useTranslation("global");

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? JSON.parse(savedLanguage) : "en";
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
    if (window.scrollY >= 600) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  /* change language */
  const handlerSwitchLanguge = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage((state) => (state === "en" ? "es" : "en"));
  };

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

  /* localstorage language */

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);
  return (
    /* htmls body */

    <article>
      {/* hero section */}
      <ParticlesBackground />
      <section className="flex flex-col w-full h-screen mx-auto z-[200] relative">
        {/* navbar */}

        <section
          className={`flex header fixed w-full mx-auto md:py-3 text-black rounded-b-lg dark:bg-container dark:text-white ${
            color ? "bg-white dark:bg-container" : "dark:bg-white/0"
          }`}
        >
          <div className="flex flex-col md:flex md:flex-row md:justify-evenly md:items-center mx-auto w-full px-5">
            {/* navbar logo all classes to be centered */}
            <div className="flex items-center text-2xl mx-auto w-full md:text-4xl font-light font-poppins uppercase gap-5 text-white pt-5 md:pt-0">
              {/* logo-name */}
              <div
                className={`flex items-center w-full mx-auto md:gap-3 text-black font-semibold dark:text-white ${
                  color ? "text-black" : "dark:text-black"
                }`}
              >
                <i className="bx bxs-copyright text-[#32CD32] text-5xl"></i>
                Carlos
                <span className="animate-ping text-xs md:text-xl">_</span>
              </div>

              <div className="flex flex-1 justify-center items-center gap-3 pr-2 md:gap-14">
                {/* flags */}
                <div className="flex gap-3 items-center justify-center">
                  <div
                    className="flex w-[25px] cursor-pointer"
                    onClick={() => handlerSwitchLanguge("en")}
                  >
                    <img src="/images/united-states.png" alt="" />
                  </div>
                  <div
                    className="flex w-[25px] cursor-pointer"
                    onClick={() => handlerSwitchLanguge("es")}
                  >
                    <img src="/images/mexico.png" alt="" />
                  </div>
                </div>

                {/* dark-light */}
                <div
                  className="flex justify-center items-center"
                  onClick={handlerNavHideOnClick}
                >
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

                {/* burguer menu */}
                <div
                  className="flex justify-center items-center w-full mx-auto text-3xl md:hidden cursor-pointer "
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  {isOpen ? (
                    <i className="bx bx-x flex w-full text-black dark:text-white  mx-auto"></i>
                  ) : (
                    <i className="bx bx-menu flex w-full text-black dark:text-white mx-auto"></i>
                  )}
                </div>
              </div>
            </div>

            {/* menu */}
            <div>
              <nav>
                <ul
                  className={`flex w-full mx-auto gap-2.5 md:text-lg items-center justify-center ${
                    isOpen
                      ? "flex flex-col md:flex-row md:items-center visible"
                      : "invisible md:visible"
                  }`}
                >
                  <Link
                    to="particle-bg"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32]  py-1 cursor-pointer"
                    onClick={handlerNavHideOnClick}
                    /* href="/" */
                  >
                    {t("Nav.home")}
                  </Link>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32]  py-1"
                    href="#about"
                    onClick={handlerNavHideOnClick}
                  >
                    {t("Nav.about")}
                  </Link>
                  <Link
                    to="academic"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32]  py-1"
                    href="#academic"
                    onClick={handlerNavHideOnClick}
                  >
                    {t("Nav.academic")}
                  </Link>
                  <Link
                    to="technologies"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32] py-1"
                    href="#technologies"
                    onClick={handlerNavHideOnClick}
                  >
                    {t("Nav.technologies")}
                  </Link>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:text-[#32CD32] py-1"
                    href="#projects"
                    onClick={handlerNavHideOnClick}
                  >
                    {t("Nav.projects")}
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className="flex transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:text-[#32CD32] py-1"
                    href="#contact"
                    onClick={handlerNavHideOnClick}
                  >
                    {t("Nav.contact")}
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* hero content*/}
        <section className="flex flex-1 -z-[100] items-center">
          <div className="w-full mx-auto">
            <h1 className="text-center text-5xl md:text-8xl font-semibold font-poppins ">
              {t("Nav.name")}
              <span className="animate-ping">_</span>
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
                {t("Nav.resume")}
              </a>
              <a
                className="px-5 py-2 inline-block  bg-[#32CD32] hover:bg-black hover:text-white transition-colors mt-10 rounded-lg drop-shadow-3xl"
                href="https://drive.google.com/file/d/1DuBhBpdsRAmW1OR1vL4j9PjMAI5rzgmJ/view?usp=sharing"
                target="_blank"
              >
                {t("Nav.ATS")}
              </a>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};

export default Hero;
