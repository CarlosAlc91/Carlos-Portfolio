const Projects = () => {
  return (
    <article className="min-h-full relative px-4 py-6">
      <h1 className="font-poppins font-semibold text-3xl py-10">
        My last projects
      </h1>
      <section className="flex justify-center items-center relative z-10">
        <div className="w-[800px] h-[700px] sm:h-[800px] sm:w-[1119px] bg-gray-600/40 px-6 py-8 rounded-3xl  overflow-y-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            suscipit vel nulla ad eos veritatis labore nam maiores esse,
            voluptatum fugiat qui repellat in rem sequi, dicta hic magnam cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            suscipit vel nulla ad eos veritatis labore nam maiores esse,
            voluptatum fugiat qui repellat in rem sequi, dicta hic magnam cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            suscipit vel nulla ad eos veritatis labore nam maiores esse,
            voluptatum fugiat qui repellat in rem sequi, dicta hic magnam cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            suscipit vel nulla ad eos veritatis labore nam maiores esse,
            voluptatum fugiat qui repellat in rem sequi, dicta hic magnam cum.
          </p>
        </div>
      </section>
      <section className="">
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
