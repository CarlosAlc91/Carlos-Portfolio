const AboutMe = () => {
  return (
    <article id="about" className="min-h-full relative px-4 py-6">
      <h1 className="font-poppins font-semibold text-4xl py-20 px-10">
        About me
      </h1>
      <section className="flex justify-center items-center relative z-10 left-0 md:left-1/4">
        <div className="grid items-center h-[800px] w-[90%] sm:w-[70%] md:w-[370px] lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-gray-600/40 px-6 py-8 rounded-3xl gap-5 scroll-smooth">
          <h2 className="font-poppins font-semibold text-5xl py-10">
            Hi!
          </h2>
          <p className="font-sen text-p-gray text-lg font-normal pl-3">
            I'm Carlos, a Computer Engineering student at UAEMex, also attending
            Academlo boot camp. I'm a quick learner who thrives in fast-paced
            environments. Beyond tech, I enjoy staying active, spending quality
            time with family, and taking leisurely walks with my pet.
            <br />
            <br />
            <b className="text-2xl">
              {" "}
              Let's connect and explore possibilities together!
            </b>
          </p>
          <div className="flex flex-wrap justify-center  gap-4 py-10 text-3xl">
            <i className="bx bxl-html5"></i>
            <i className="bx bxl-css3"></i>
            <i className="bx bxl-javascript"></i>
            <i className="bx bxl-tailwind-css"></i>
            <i className="bx bxl-react"></i>
          </div>
        </div>
      </section>
      <section>
        <img
          className="absolute -left-[55%] bottom-8 md:-left-1/2 md:-bottom-[10px] lg:-left-8"
          src="/images/circle.png"
          alt="circle"
        />
      </section>
    </article>
  );
};
export default AboutMe;
