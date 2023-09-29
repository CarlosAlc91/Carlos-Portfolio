const Studies = () => {
  return (
    <section id="academic" className="w-full   mx-auto h-full px-6 py-6">
      <h1 className="font-poppins py-20 text-4xl font-semibold md:text-5xl w-full mx-auto">
        Academic
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:w-[65%] gap-6 mx-auto  rounded-3xl px-6 py-8">
        {/* uaem */}
        <div className="flex flex-col h-[350px] w-[300px] justify-center items-center gap-4 border bg-container hover:bg-[#007997] text-white py-3 px-2 rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            className="rounded-full h-[100px] w-[100px]"
            src="/images/uaem.jpeg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-md text-center">
            UAEMex (Universidad Autonoma del Estado de Mexico)
          </h3>
          <h4 className="font-poppins text-lg text-center text-[#e0e0e0]">
            2019 - Actual
          </h4>
          <p className="font-poppins text-base text-center text-[#e0e0e0]">
            BS in Computer Engineer
          </p>
        </div>
        {/* academlo */}
        <div className=" flex flex-col h-[350px] w-[300px] justify-center items-center gap-4 border bg-container hover:bg-[#007997] text-white py-3 px-2 rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500 scro">
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/academlo.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Academlo
          </h3>
          <h4 className="font-sen text-xl text-center text-[#e0e0e0]">
            2023 - Actual
          </h4>
          <p className="font-poppins text-lg text-center text-[#e0e0e0]">
            Node.js
          </p>
        </div>
        {/* academlo */}
        <div className=" flex flex-col h-[350px] w-[300px] justify-center items-center gap-4 border bg-container hover:bg-[#007997] text-white py-3 px-2 rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/academlo.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Academlo
          </h3>
          <h4 className="font-sen  text-xl text-center text-[#e0e0e0]">
            2023 - 2023
          </h4>
          <p className="font-poppins text-lg text-center text-[#e0e0e0]">
            React.js
          </p>
          <a
            className="w-1/2 px-4 mx-auto py-2 inline-block bg-[#282C34] hover:bg-[#FF4081] transition-colors rounded-lg text-center"
            href="https://drive.google.com/file/d/19nYu-tfagdrJyPXmSDrMsjlF97ww5hBW/view?usp=sharing"
            target="_blank"
          >
            Certificate
          </a>
        </div>
        {/* academlo */}
        <div className=" flex flex-col h-[350px] w-[300px] justify-center items-center gap-4 border bg-container hover:bg-[#007997] text-white py-3 px-2 rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/academlo.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Academlo
          </h3>
          <h4 className="font-sen text-xl text-center text-[#e0e0e0]">
            2023 - 2023
          </h4>
          <p className="font-poppins text-lg text-center text-[#e0e0e0]">
            Fundamentals
          </p>
          <a
            className="w-1/2 px-4 mx-auto py-2 inline-block bg-[#282C34] hover:bg-[#FF4081] transition-colors rounded-lg text-center"
            href="https://drive.google.com/file/d/127lAxuQ0dUKY0ylgTgbTpqyzkp9PuLnc/view?usp=sharing"
            target="_blank"
          >
            Certificate
          </a>
        </div>
        {/* hcc */}
        <div className=" flex flex-col h-[350px] w-[300px] justify-center items-center gap-4 border bg-container hover:bg-[#007997] text-white py-3 px-2 rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/hcc.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Houston Community College
          </h3>
          <h4 className="font-sen text-xl text-center text-[#e0e0e0]">
            2023 - 2023
          </h4>
          <p className="font-poppins text-lg text-center text-[#e0e0e0]">
            BS in Computer Science
          </p>
        </div>
      </div>
    </section>
  );
};
export default Studies;
