const Technologies = () => {
  return (
    <section className="w-full px-6 py-6 mx-auto">
      <h1 className="font-poppins px-10 py-20 text-4xl font-semibold">
        Technologies
      </h1>
      <div className="bg-gray-600/40 rounded-3xl text-8xl flex flex-wrap items-center justify-center gap-5 px-6 py-8">
        <span className="py-2">
          <i className="bx bxl-html5 hover:bg-gray-300/40 transition-color  hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-lg text-center">HTML</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-css3 bx bxl-html5 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-lg text-center">CSS</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-javascript bx bxl-html5 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-lg text-center">JavaScript</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-react bx bxl-html5 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-lg text-center">React</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-tailwind-css bx bxl-html5 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-lg text-center">Tailwind</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-git bx bxl-html5 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-lg text-center">Git</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-github bx bxl-html5 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-lg text-center">GitHub</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-netlify bx bxl-html5 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-lg text-center">Netlify</h3>
        </span>
      </div>
    </section>
  );
};
export default Technologies;
