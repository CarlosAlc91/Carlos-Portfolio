const Hero = () => {
  return (
    <article className="relative flex justify-center items-center h-screen w-full mx-auto">
      <div className="flex justify-center items-center absolute bg-contain bg-center text-center w-full h-screen mx-auto">
        <img src="/images/AIBanner.jpg" alt="" />
      </div>
      <span className="flex justify-center items-center absolute text-white text-9xl font-poppins font-semibold">
        <h1>
          Carlos Alcantara <br /> Jr. front-end developer
        </h1>
      </span>
      <button className="absolute bottom-32 border p-5 px-8 rounded-xl">
        <a href="#about">Get to know me</a>
      </button>
    </article>
  );
};
export default Hero;
