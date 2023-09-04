const AboutMe = () => {
  return (
    <article>
      <header>
        <nav className="flex justify-between items-center">
          <img src="/images/logo.png" alt="logo.png" />
          <h2 className="w-32 px-4 text-red font-poppins font-semibold uppercase">
            Carlos Alcantara
          </h2>
        </nav>
      </header>
      <section>
        <h1 className="font-poppins text-4xl font-semibold">Hi!</h1>
        <p className="font-sen font-normal text-p-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          hic eveniet facilis aspernatur iure? Quod minus accusantium, nobis
          voluptatem earum placeat, non nam harum totam in voluptatibus at dicta
          quidem!
        </p>
      </section>
    </article>
  );
};
export default AboutMe;
