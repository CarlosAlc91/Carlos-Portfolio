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
      "with desire to learn",
    ],
    loop: {},
    typeSpeed: 120,
  });

  /* const handlerIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  }; */

  return (
    /* htmls body */
    <article>
      {/* hero section */}
      <section className="flex flex-col h-screen bg-hero bg-center bg-cover bg-blend-overlay bg-fixed bg-black/20">
        {/* navbar */}
        <section className="py-5 bg-slate-800">
          <div className="md:flex md:justify-between mx-auto relative px-5 max-w-screen-xl w-full">
            {/* navbar logo all classes to be centered */}
            <div className="flex items-center text-2xl md:text-4xl font-light font-poppins uppercase text-white">
              Carlos
            </div>

            {/* menu */}
            <div>
              <div
                className="absolute top-0 right-0 text-3xl px-4 md:hidden cursor-pointer"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                {isOpen ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </div>
              <nav>
                <ul
                  className={`flex md:flex-row py-3 gap-6 md:text-xl  ${
                    isOpen ? "flex-col visible" : "invisible md:visible"
                  }`}
                >
                  <a href="#about">About</a>
                  <a href="#technologies">Technologies</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/* hero content*/}
        <section className="flex flex-1 items-center">
          <div className="text-center mx-auto">
            <h1 className="text-6xl md:text-8xl font-semibold font-poppins">
              who am I?<span className="animate-ping">_</span>
              <br />
              <span className="text-3xl font-light md:text-4xl mt-5">
                {text}
              </span>
              <Cursor cursorColor="red" />
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
