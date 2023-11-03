const Technologies = () => {
  return (
    <section id="technologies" className="w-full mx-auto px-6 py-6 h-full">
      <h1 className="font-poppins py-20 text-4xl font-semibold md:text-5xl w-full mx-auto">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-7 bg-container/50 rounded-3xl text-7xl md:text-8xl px-6 py-8 md:w-[60%] mx-auto">
        <span className="py-2">
          <i className="bx bxl-html5 text-[#ea580c] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">HTML</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-css3 text-[#2563eb] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">CSS</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-javascript text-[#facc15] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">JavaScript</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-react text-[#0074a6] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">React</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-tailwind-css text-[#0891b2] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">Tailwind</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-nodejs text-[#84ba64] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">Node.js</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-postgresql text-[#0369a1] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">postgresql</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-git text-[#ea580c] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">Git</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-github hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">GitHub</h3>
        </span>
        <span className="py-2">
          <i className="bx bxl-netlify text-[#14b8a6] hover:bg-gray-300/40 transition-color hover:scale-110 px-1 py-1 duration-150 delay-200 transform rounded-full"></i>
          <h3 className="text-3xl text-center">Netlify</h3>
        </span>
      </div>
    </section>
  );
};
export default Technologies;
