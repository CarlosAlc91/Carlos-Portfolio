const AboutMe = () => {
  return (
    <article id="about" className="w-full mx-auto px-8 lg:h-screen">
      <h1 className=" font-poppins font-semibold text-4xl py-10 md:text-6xl">
        About me
      </h1>
      <div className="flex flex-col w-full md:flex-row gap-4 items-center">
        <div className="mb-8 md:mb-0 animate-animateUser md:w-1/2">
          <img src="/images/circle.png" alt="circle" />
        </div>

        <div className="w-full mx-auto bg-gray-600/40 rounded-3xl md:w-1/2">
          <p className="font-sen text-p-gray font-normal text-2xl px-9 py-5 my-5">
            <span className="font-semibold text-4xl">Hi!.</span>
            <br />
            I'm a junior front-end web developer with a passion for creating
            visually appealing and user-friendly websites and applications.
            Strong technical proficiency in HTML, CSS, JavaScript, Tailwind,
            React, and responsive design.
            <br />
            Committed to staying updated on emerging technologies and industry
            trends to deliver innovative solutions. Seeking collaborations with
            forward-thinking professionals and organizations that value
            creativity and user-centric design.
          </p>
        </div>
      </div>
    </article>
  );
};
export default AboutMe;
