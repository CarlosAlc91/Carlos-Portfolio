const Technologies = () => {
  return (
    <section id="technologies" className="w-full  mx-auto px-6 py-6">
      <h1 className="font-poppins px-10 py-20 text-4xl font-semibold md:text-5xl ">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-7 bg-gray-600/40 rounded-3xl text-7xl md:text-8xl px-6 py-8 md:w-1/2 mx-auto">
        <span className="py-2">
          <i className="bx bxl-html5 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">HTML</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-css3 hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">CSS</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-javascript hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">JavaScript</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-react hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">React</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-tailwind-css hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">Tailwind</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-git hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">Git</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-github hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">GitHub</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-netlify hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">Netlify</h3>
        </span>
      </div>
    </section>
  );
};
export default Technologies;
