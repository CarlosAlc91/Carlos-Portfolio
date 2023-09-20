import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text] = useTypewriter({
    words: [
      "Jr. front-end developer",
      "comper engineer student",
      "fast-paced worker",
      "adaptable person",
      "and with desire to learn",
    ],
    loop: {},
    typeSpeed: 125,
    fontSize: "3rem",
  });

  /* const handlerIsOpen = () => {
      setIsOpen((isOpen) => !isOpen);
    }; */

  return (
    /* htmls body */
    <article>
      {/* hero section */}
      <section className="flex flex-col h-screen bg-laptop bg-center bg-cover bg-blend-overlay bg-fixed bg-gray-600/70">
        {/* navbar */}
        <section className="fixed z-[100] w-full mx-auto md:py-3 bg-gray-600/80 rounded-b-lg">
          <div className="md:flex md:justify-between md:items-center mx-auto w-full px-5">
            {/* navbar logo all classes to be centered */}
            <div className="flex justify-between items-center text-2xl md:text-4xl font-light font-poppins uppercase text-white">
              <div className="flex items-center">
                <img className="h-10 md:h-16" src="/images/logo.png" alt="" />
                Carlos<span className="animate-ping text-xs md:text-xl">_</span>
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
                  >
                    About
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="#technologies"
                  >
                    Technologies
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="#projects"
                  >
                    Projects
                  </a>
                  <a
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 hover:bg-gray-200/30 rounded-md px-1 py-1"
                    href="#contact"
                  >
                    Contact
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* hero content*/}
        <section className="flex flex-1 items-center">
          <div className="text-center mx-auto">
            <h1 className="text-5xl md:text-8xl font-semibold font-poppins">
              who am I?<span className="animate-ping">_</span>
              <br />
              <span className="text-3xl font-light md:text-4xl mt-5">
                {text}
              </span>
              <Cursor cursorColor="gray" cursorStyle="" />
            </h1>
            <a
              className="w-1/2 mx-auto px-5 py-2 inline-block bg-slate-800 hover:bg-slate-400 transition-colors mt-10 rounded-lg"
              href="/docs/CarlosResume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </section>
      </section>
    </article>
  );
};
export default Hero;
