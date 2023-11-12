import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <article id="projects" className="w-full mx-auto px-6 py-6 relative h-full">
      <h1
        className="font-poppins font-semibold text-center text-[#32CD32] text-4xl py-20 md:text-5xl w-full mx-auto"
        data-aos="fade-right"
      >
        {t("Projects.title")}
      </h1>
      <section className="w-full mx-auto z-10 relative">
        {/* div container */}
        <div className=" grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5 px-6 py-8 items-center justify-center rounded-3xl w-full mx-auto text-center">
          {/* pokedex */}
          <div className="w-[300px] h-[430px] bg-transparent cursor-pointer group perspective border-[3px] border-[#32CD32] rounded-2xl">
            <div className="relative preserve-3d group-hover:my-rotate-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden border-2 rounded-2xl w-full h-full">
                <img
                  className="w-full h-full rounded-2xl"
                  src="/images/pokedex.png"
                  alt=""
                />
              </div>
              <div className="absolute my-rotate-180 backface-hidden w-full h-full bg-white/50 overflow-hidden">
                <div className="text-center flex flex-col gap-14 items-center justify-center h-full text-[#282C34]">
                  <h1 className="font-poppins text-4xl font-bold">
                    {t("Projects.project-1.name")}
                  </h1>
                  <p className="my-2 font-sen text-xl">
                    {t("Projects.project-1.body")}
                  </p>
                  <span className="absolute flex -bottom-20 delay-500 duration-1000 group-hover:bottom-10 gap-7 text-5xl md:text-4xl scale-0 group-hover:scale-125">
                    <a
                      target="_blank"
                      href="https://project5-pokedex-calcantara.netlify.app/"
                    >
                      <i className="bx bxl-netlify"></i>
                      <h4 className="text-xl">Pokedex</h4>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/CarlosAlc91/project5_React-Router_and__Redux"
                    >
                      <i className="bx bxl-github"></i>
                      <h4 className="text-xl">GitHub</h4>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* http crud */}
          <div className="w-[300px] h-[430px] bg-transparent cursor-pointer group perspective border-[3px] border-[#32CD32] rounded-2xl">
            <div className="relative preserve-3d group-hover:my-rotate-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden border-2 rounded-2xl w-full h-full">
                <img
                  className="w-full h-full rounded-2xl"
                  src="/images/crudApp.png"
                  alt=""
                />
              </div>
              <div className="absolute my-rotate-180 backface-hidden w-full h-full bg-white/50 overflow-hidden rounded-2xl">
                <div className="text-center flex flex-col gap-14 items-center justify-center h-full text-[#282C34]">
                  <h1 className="font-poppins text-4xl font-bold">
                    {t("Projects.project-2.name")}
                  </h1>
                  <p className="my-2 font-sen text-xl">
                    {t("Projects.project-2.body")}
                  </p>
                  <span className="absolute flex -bottom-20 delay-500 duration-1000 group-hover:bottom-10 gap-7 text-5xl md:text-4xl scale-0 group-hover:scale-125">
                    <a
                      target="_blank"
                      href="https://project4-http-verbs-crud-calcantara.netlify.app/"
                    >
                      <i className="bx bxl-netlify"></i>
                      <h4 className="text-xl">User admin</h4>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/CarlosAlc91/project4_HTTP_verbs"
                    >
                      <i className="bx bxl-github"></i>
                      <h4 className="text-xl">GitHub</h4>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* rick and morthy */}
          <div className="w-[300px] h-[430px] bg-transparent cursor-pointer group perspective border-[3px] border-[#32CD32] rounded-2xl">
            <div className="relative preserve-3d group-hover:my-rotate-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden border-2 rounded-2xl w-full h-full">
                <img
                  className="w-full h-full rounded-2xl"
                  src="/images/rickMorthy.png"
                  alt=""
                />
              </div>
              <div className="absolute my-rotate-180 backface-hidden w-full h-full bg-white/50 overflow-hidden rounded-2xl">
                <div className="text-center flex flex-col gap-14 items-center justify-center h-full text-[#282C34]">
                  <h1 className="font-poppins text-3xl font-bold">
                    {t("Projects.project-3.name")}
                  </h1>
                  <p className="my-2 font-sen text-xl">
                    {t("Projects.project-3.body")}
                  </p>
                  <span className="absolute flex -bottom-20 delay-500 duration-1000 group-hover:bottom-10 gap-7 text-5xl md:text-4xl scale-0 group-hover:scale-125">
                    <a
                      target="_blank"
                      href="https://project3-rickandmorthy-api-calcantara.netlify.app"
                    >
                      <i className="bx bxl-netlify"></i>
                      <h4 className="text-xl">Rick and Morthy</h4>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/CarlosAlc91/project3_list_and_keys_controlled_inputs"
                    >
                      <i className="bx bxl-github"></i>
                      <h4 className="text-xl">GitHub</h4>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* weather app */}
          <div className="w-[300px] h-[430px] bg-transparent cursor-pointer group perspective border-[3px] border-[#32CD32] rounded-2xl">
            <div className="relative preserve-3d group-hover:my-rotate-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden border-2 rounded-2xl w-full h-full">
                <img
                  className="w-full h-full rounded-2xl"
                  src="/images/weatherApp.png"
                  alt=""
                />
              </div>
              <div className="absolute my-rotate-180 backface-hidden w-full h-full bg-white/50 overflow-hidden rounded-2xl">
                <div className="text-center flex flex-col gap-14 items-center justify-center h-full text-[#282C34]">
                  <h1 className="font-poppins text-3xl font-bold">
                    {t("Projects.project-4.name")}
                  </h1>
                  <p className="my-2 font-sen text-xl">
                    {t("Projects.project-4.body")}
                  </p>
                  <span className="absolute flex -bottom-20 delay-500 duration-1000 group-hover:bottom-10 gap-7 text-5xl md:text-4xl scale-0 group-hover:scale-125">
                    <a
                      target="_blank"
                      href="https://project2-api-consumption-calcantara.netlify.app"
                    >
                      <i className="bx bxl-netlify"></i>
                      <h4 className="text-xl">Weather app</h4>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/CarlosAlc91/project2_useEffect_API_consumption"
                    >
                      <i className="bx bxl-github"></i>
                      <h4 className="text-xl">GitHub</h4>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* div fortune cookie*/}
          <div className="w-[300px] h-[430px] bg-transparent cursor-pointer group perspective border-[3px] border-[#32CD32] rounded-2xl">
            <div className="relative preserve-3d group-hover:my-rotate-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden border-2 rounded-2xl w-full h-full">
                <img
                  className="w-full h-full rounded-2xl"
                  src="/images/fortuneCookie.png"
                  alt=""
                />
              </div>
              <div className="absolute my-rotate-180 backface-hidden w-full h-full bg-white/50 overflow-hidden rounded-2xl">
                <div className="text-center flex flex-col gap-14 items-center justify-center h-full text-[#282C34]">
                  <h1 className="font-poppins text-3xl font-bold">
                    {t("Projects.project-5.name")}
                  </h1>
                  <p className="my-2 font-sen text-xl">
                    {t("Projects.project-5.body")}
                  </p>
                  <span className="absolute flex -bottom-20 delay-500 duration-1000 group-hover:bottom-10 gap-7 text-5xl md:text-4xl scale-0 group-hover:scale-125">
                    <a
                      target="_blank"
                      href="https://project1-components-props-calcantara.netlify.app"
                    >
                      <i className="bx bxl-netlify"></i>
                      <h4 className="text-xl">Fortune cookie</h4>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/CarlosAlc91/project_1_components_props_useState"
                    >
                      <i className="bx bxl-github"></i>
                      <h4 className="text-xl">GitHub</h4>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* div todo list */}
          <div className="w-[300px] h-[430px] bg-transparent cursor-pointer group perspective border-[3px] border-[#32CD32] rounded-2xl">
            <div className="relative preserve-3d group-hover:my-rotate-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden border-2 rounded-2xl w-full h-full">
                <img
                  className="w-full h-full rounded-2xl"
                  src="/images/TODO.png"
                  alt=""
                />
              </div>
              <div className="absolute my-rotate-180 backface-hidden w-full h-full bg-white/50 overflow-hidden rounded-2xl">
                <div className="text-center flex flex-col gap-14 items-center justify-center h-full text-[#282C34]">
                  <h1 className="font-poppins text-4xl font-bold">
                    {t("Projects.project-6.name")}
                  </h1>
                  <p className="my-2 font-sen text-xl">
                    {t("Projects.project-6.body")}
                  </p>
                  <span className="absolute flex -bottom-20 delay-500 duration-1000 group-hover:bottom-10 gap-7 text-5xl md:text-4xl scale-0 group-hover:scale-125">
                    <a
                      target="_blank"
                      href="https://to-do-list-project-calcantara.netlify.app"
                    >
                      <i className="bx bxl-netlify"></i>
                      <h4 className="text-xl">TODO app</h4>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/CarlosAlc91/to-do-list-React"
                    >
                      <i className="bx bxl-github"></i>
                      <h4 className="text-xl">GitHub</h4>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* div ecommerce */}
          <div className="w-[300px] h-[430px] bg-transparent cursor-pointer group perspective border-[3px] border-[#32CD32] rounded-2xl">
            <div className="relative preserve-3d group-hover:my-rotate-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden border-2 rounded-2xl w-full h-full">
                <img
                  className="w-full h-full rounded-2xl"
                  src="/images/ecommerce.png"
                  alt=""
                />
              </div>
              <div className="absolute my-rotate-180 backface-hidden w-full h-full bg-white/50 overflow-hidden rounded-2xl">
                <div className="text-center flex flex-col gap-14 items-center justify-center h-full text-[#282C34]">
                  <h1 className="font-poppins text-4xl font-bold">
                    {t("Projects.project-7.name")}
                  </h1>
                  <p className="my-2 font-sen text-xl">
                    {t("Projects.project-7.body")}
                  </p>
                  <span className="absolute flex -bottom-20 delay-500 duration-1000 group-hover:bottom-10 gap-7 text-5xl md:text-4xl scale-0 group-hover:scale-125">
                    <a
                      target="_blank"
                      href="https://shopping-cart-calcantara.netlify.app/"
                    >
                      <i className="bx bxl-netlify"></i>
                      <h4 className="text-xl">Shopping cart</h4>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/CarlosAlc91/eCommerce-project"
                    >
                      <i className="bx bxl-github"></i>
                      <h4 className="text-xl">GitHub</h4>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
export default Projects;
