import { useState } from "react";

const Hero = () => {
  
  return (
    <article>
      
      {/* WRAPPER */}
      <div className="flex  h-screen mx-auto justify-center items-center py-0 px-[10%] overflow-hidden bg-white">
        {/* COLS 0*/}
        <div className=" w-1/2 mx-auto bg-green-400">
          <span className="text-4xl tracking-[15px] text-[#3d535f] border border-black">
            Hi
          </span>
          <h1 className="flex flex-wrap mx-auto text-8xl font-extrabold text-[#3d535f]">
            I'm <span className="text-[#7f00ff] capitalize">coder</span>
          </h1>

          <p className="block text-xl text-[#3d535f]">
            Jr. front-end developer
          </p>
          <div className="w-full left-40">
            <button className="outline-none text-3xl font-medium text-white bg-[#3d535f] py-2 px-3 my-10 mx-1 tracking-[2px]  capitalize shadow-2xl hover:bg-[#7f00ff]">
              Resuem
            </button>
            <button className="outline-none text-3xl font-medium text-white bg-[#3d535f] py-2 px-3 my-10 mx-1 tracking-[2px]  capitalize shadow-2xl hover:bg-[#7f00ff]">
              Hire me
            </button>
          </div>
        </div>
        {/* COLS 1 */}
        
      </div>
    </article>
  );
};
export default Hero;
