const Projects = () => {
  return (
    <article className="projects relative  px-4 py-6">
      <h1 className="font-poppins font-semibold text-4xl py-20 px-10">
        My last projects
      </h1>
      <section className="w-full mx-auto relative z-10">
        {/* div container */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 bg-gray-600/40 px-6 py-8 rounded-3xl scroll-smooth">
          {/* div ecommerce */}
          <article className="grid justify-center items-end relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Shopping cart
            </h3>
            <div className="grid justify-center gap-5">
              <img
                className="bottom-0 rounded-md h-[150px] hover:animate-pulse mx-auto"
                src="/images/ecommerce.png"
                alt=""
              />
              <span className="flex text-3xl justify-evenly">
                <a
                  target="_blank"
                  href="https://shopping-cart-calcantara.netlify.app/"
                >
                  <i className="bx bxl-netlify"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/CarlosAlc91/eCommerce-project"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </span>
            </div>
            <div>
              <p className="text-xl font-sen font-normal ">
                Shopping cart on which you can add, delete, update items from a
                shoppig list. Technologies used:
                <span className="flex justify-center gap-4 py-3">
                  <span className="flex justify-center gap-4 py-3">
                    <i className="bx bxl-html5 text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                    <i className="bx bxl-css3 text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                    <i className="bx bxl-javascript text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                  </span>
                </span>
              </p>
            </div>
          </article>

          {/* div todo list */}
          <article className="grid justify-center items-center relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              TODO List
            </h3>
            <div className="grid justify-center gap-5">
              <img
                className="bottom-0 rounded-md h-[100px] w-[200px] hover:animate-pulse mx-auto"
                src="/images/TODO.png"
                alt=""
              />
              <span className="flex text-3xl justify-evenly">
                <a
                  target="_blank"
                  href="https://to-do-list-project-calcantara.netlify.app"
                >
                  <i className="bx bxl-netlify"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/CarlosAlc91/to-do-list-React"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </span>
            </div>
            <div>
              <p className="text-xl font-sen font-normal ">
                App in which you can create, read, update and delete tasks
                (CRUD). Technologies used:
                <span className="flex justify-center gap-4 py-3">
                  <span className="flex justify-center gap-4 py-3">
                    <i className="bx bxl-react text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                    <i className="bx bxl-tailwind-css text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                  </span>
                </span>
              </p>
            </div>
          </article>

          {/* div fortune cookie*/}
          <article className="grid justify-center items-center relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Fortune cookie
            </h3>
            <div className="grid justify-center gap-5">
              <img
                className="bottom-0 rounded-md h-[150px] hover:animate-pulse mx-auto"
                src="/images/fortuneCookie.png"
                alt=""
              />
              <span className="flex text-3xl justify-evenly">
                <a
                  target="_blank"
                  href="https://project1-components-props-calcantara.netlify.app"
                >
                  <i className="bx bxl-netlify"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/CarlosAlc91/project_1_components_props_useState"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </span>
            </div>

            <p className="relative text-xl font-sen font-normal ">
              This simple but effective and fun app, gives random fortune
              quotes. Technologies used:
              <span className="flex justify-center gap-4 py-3">
                <i className="bx bxl-react text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* weather app */}
          <article className="grid justify-center items-center relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Weather app
            </h3>
            <div className="grid justify-center gap-5">
              <img
                className="bottom-0 rounded-md h-[150px] hover:animate-pulse mx-auto"
                src="/images/weatherApp.png"
                alt=""
              />
              <span className="flex text-3xl justify-evenly">
                <a
                  target="_blank"
                  href="https://project2-api-consumption-calcantara.netlify.app"
                >
                  <i className="bx bxl-netlify"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/CarlosAlc91/project2_useEffect_API_consumption"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </span>
            </div>

            <p className="relative text-xl font-sen font-normal ">
              This app gets current location and shows real time weather.
              Technologies used:
              <span className="flex justify-center gap-4 py-3 ">
                <i className="bx bxl-react text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* rick and morthy */}
          <article className="grid justify-center items-center relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Rick and Morty universes
            </h3>
            <div className="grid justify-center gap-5">
              <img
                className="bottom-0 rounded-md h-[200px] hover:animate-pulse mx-auto"
                src="/images/rickMorthy.png"
                alt=""
              />
              <span className="flex text-3xl justify-evenly">
                <a
                  target="_blank"
                  href="https://project3-rickandmorthy-api-calcantara.netlify.app"
                >
                  <i className="bx bxl-netlify"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/CarlosAlc91/project3_list_and_keys_controlled_inputs"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </span>
            </div>

            <p className="relative text-xl font-sen font-normal ">
              App shows all universes from Rick and Morthy as well as all
              residents. Technologies used:
              <span className="flex justify-center gap-4 py-3 ">
                <i className="bx bxl-react text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* http crud */}
          <article className="grid justify-center items-center relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Admin app
            </h3>
            <div className="grid justify-center gap-5">
              <img
                className="bottom-0 rounded-md h-[150px] hover:animate-pulse mx-auto"
                src="/images/crudApp.png"
                alt=""
              />
              <span className="flex text-3xl justify-evenly">
                <a
                  target="_blank"
                  href="https://github.com/CarlosAlc91/project3_list_and_keys_controlled_inputs"
                >
                  <i className="bx bxl-netlify"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/CarlosAlc91/project4_HTTP_verbs"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </span>
            </div>

            <p className="relative text-xl font-sen font-normal ">
              This app allows to create, read, update and delete users (CRUD).
              Technologies used:
              <span className="flex justify-center gap-4 py-3 ">
                <i className="bx bxl-react text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* pokedex */}
          <article className="grid justify-center items-center relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Pokedex
            </h3>
            <div className="grid justify-center gap-5">
              <img
                className="bottom-0 rounded-md h-[100px] hover:animate-pulse mx-auto"
                src="/images/pokedex.png"
                alt=""
              />
              <span className="flex text-3xl justify-evenly">
                <a
                  target="_blank"
                  href="https://project5-pokedex-calcantara.netlify.app"
                >
                  <i className="bx bxl-netlify"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/CarlosAlc91/project5_React-Router_and__Redux"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </span>
            </div>

            <p className="relative text-xl font-sen font-normal pt-5">
              Pokedex app will show all pokemons available and their full
              information Technologies used:
              <span className="flex justify-center gap-4 py-3 ">
                <i className="bx bxl-react text-3xl  px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>
        </div>
      </section>
      <section>
        <img
          className="absolute -left-[55%] bottom-8 md:-left-1/2 md:-bottom-[100px] lg:-left-8 lg:-bottom-0"
          src="/images/triangle.png"
          alt=""
        />
      </section>
    </article>
  );
};
export default Projects;
