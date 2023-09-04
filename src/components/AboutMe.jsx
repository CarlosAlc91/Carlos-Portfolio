const AboutMe = () => {
  return (
    <article className="min-h-screen relative">
      <header>
        <nav className="flex justify-between items-center">
          <img src="/images/logo.png" alt="logo.png" />
          <h2 className="w-32 px-4 text-red font-poppins font-semibold uppercase">
            Carlos Alcantara
          </h2>
        </nav>
      </header>
      <section className="relative h-max pl-24 pr-4">
        <h1 className="font-poppins text-4xl font-semibold py-5">Hi!</h1>
        <p className="font-sen font-normal text-p-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          hic eveniet facilis aspernatur iure? Quod minus accusantium, nobis
          voluptatem earum placeat, non nam harum totam in voluptatibus at dicta
          quidem!
        </p>
        <div className="flex flex-wrap gap-4 text-3xl py-10">
          <i className="bx bxl-html5"></i>
          <i className="bx bxl-css3"></i>
          <i className="bx bxl-javascript"></i>
          <i className="bx bxl-tailwind-css"></i>
          <i className="bx bxl-react"></i>
        </div>
      </section>
      <section className="absolute bottom-0 left-0">
        <img src="/images/circle.png" alt="circle" />
      </section>
    </article>
  );
};
export default AboutMe;
