const Projects = () => {
  return (
    <article className="projects min-h-full relative px-4 py-6">
      <h1 className="font-poppins font-semibold text-3xl py-10">
        My last projects
      </h1>
      <section className="flex justify-center items-center relative z-10">
        {/* div container */}
        <div className="w-[600px] h-[700px] sm:w-[80%] bg-gray-600/40 px-6 py-8 rounded-3xl overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 scroll-smooth">
          {/* div ecommerce */}
          <article className="relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Academlo ecommerce
            </h3>
            <a
              target="_blank"
              href="https://shopping-cart-calcantara.netlify.app/"
            >
              <img
                className="bottom-0 rounded-md h-[250px] hover:animate-pulse mx-auto"
                src="/images/ecommerce.png"
                alt=""
              />
            </a>

            <p className="relative text-xl font-sen font-normal ">
              In this project we created a shopping cart using JavaScript
              vanilla, main functions are: add items, delete items, review
              items, dark mode. Technologies used:
              <span className="flex justify-center items-center gap-4 py-3 ">
                <i className="bx bxl-html5 text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-css3 text-3xl py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-javascript text-3xl py-3 px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* div todo list */}
          <article className="relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              TODO List
            </h3>
            <a
              target="_blank"
              href="https://to-do-list-project-calcantara.netlify.app/"
            >
              <img
                className="bottom-0 rounded-md w-[250px] hover:animate-pulse mx-auto"
                src="/images/TODO.png"
                alt=""
              />
            </a>

            <p className="relative text-xl font-sen font-normal ">
              App in which you can create, read, update and delete tasks (CRUD).
              Technologies used:
              <span className="flex justify-center gap-4 py-3">
                <span className="flex justify-center gap-4 py-3">
                  <i className="bx bxl-react text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                  <i className="bx bxl-tailwind-css text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                </span>
              </span>
            </p>
          </article>

          {/* div fortune cookie*/}
          <article className="relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Fortune cookie
            </h3>
            <a
              target="_blank"
              href="https://project1-components-props-calcantara.netlify.app/"
            >
              <img
                className="bottom-0 rounded-md h-[250px] hover:animate-pulse mx-auto"
                src="/images/fortuneCookie.png"
                alt=""
              />
            </a>

            <p className="relative text-xl font-sen font-normal ">
              This simple but effective and fun app, gives random fortune quotes
              while clicking on the try luck button. Technologies used:
              <span className="flex justify-center gap-4 py-3">
                <i className="bx bxl-react text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* weather app */}
          <article className="relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Weather app
            </h3>
            <a
              target="_blank"
              href="https://project2-api-consumption-calcantara.netlify.app/"
            >
              <img
                className="bottom-0 rounded-md h-[250px] hover:animate-pulse mx-auto"
                src="/images/weatherApp.png"
                alt=""
              />
            </a>

            <p className="relative text-xl font-sen font-normal ">
              This app gets current location and shows real time weather, also
              it can search a specific location just by typing a locaation
              inside the input and provides real time weather info. Technologies
              used:
              <span className="flex justify-center gap-4 py-3 ">
                <i className="bx bxl-react text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* rick and morthy */}
          <article className="relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Rick and Morty universes
            </h3>
            <a
              target="_blank"
              href="https://project3-rickandmorthy-api-calcantara.netlify.app/"
            >
              <img
                className="bottom-0 rounded-md h-[250px] hover:animate-pulse mx-auto"
                src="/images/rickMorthy.png"
                alt=""
              />
            </a>

            <p className="relative text-xl font-sen font-normal ">
              Ever wanted to know all Rick and Morty universes? I'm proud to
              show all of them, simply make a quick search and those universes
              will show up with its complete information. Technologies used:
              <span className="flex justify-center gap-4 py-3 ">
                <i className="bx bxl-react text-3xl   py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* http crud */}
          <article className="relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Admin app
            </h3>
            <a
              target="_blank"
              href="https://project4-http-verbs-crud-calcantara.netlify.app/"
            >
              <img
                className="bottom-0 rounded-md h-[200px] hover:animate-pulse mx-auto"
                src="/images/crudApp.png"
                alt=""
              />
            </a>

            <p className="relative text-xl font-sen font-normal ">
              This app allows to create, read, update and delete users (CRUD).
              Technologies used:
              <span className="flex justify-center gap-4 py-3 ">
                <i className="bx bxl-react text-3xl text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
              </span>
            </p>
          </article>

          {/* pokedex */}
          <article className="relative bg-white/50 rounded-md p-3">
            <h3 className="font-poppins font-semibold text-center text-3xl py-4">
              Pokedex
            </h3>
            <a
              target="_blank"
              href="https://project5-pokedex-calcantara.netlify.app/"
            >
              <img
                className="bottom-0 rounded-md h-[170px] hover:animate-pulse mx-auto"
                src="/images/pokedex.png"
                alt=""
              />
            </a>

            <p className="relative text-xl font-sen font-normal ">
              Pokedex app will show all pokemons available and their information
              such as name, stats, types of pokemons, also, if more information
              needed just click on the pokemon picture and its full information
              will appear. Technologies used:
              <span className="flex justify-center gap-4 py-3 ">
                <i className="bx bxl-react text-3xl text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
                <i className="bx bxl-tailwind-css text-3xl text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
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
