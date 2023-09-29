const AboutMe = () => {
  return (
    <article id="about" className="w-full mx-auto h-full px-6 py-6">
      <h1 className="font-poppins py-20 text-4xl font-semibold md:text-5xl w-full mx-auto">
        About me
      </h1>
      <div className="flex flex-col w-full md:flex-row gap-4 items-center">
        <div className="mb-8 md:mb-0 animate-animateUser md:w-1/2">
          <img src="/images/circle.png" alt="circle" />
        </div>

        <div className="w-full mx-auto bg-container/50 rounded-3xl md:w-1/2">
          <p className="font-sen text-[#e0e0e0] font-normal text-2xl px-9 py-5 my-5">
            <span className="font-semibold text-4xl">Hi!</span>
            <br />
            I am a junior front-end developer working to become a full-stack
            developer with a passion for building visually appealing and
            user-friendly websites and applications.
            <br />
            Strong technical proficiency in HTML, CSS, JavaScript, Tailwind,
            React, and responsive design. Committed to staying updated on
            emerging technologies and industry trends to deliver innovative
            solutions.
            <br />
            Seeking collaborations with forward-thinking professionals and
            organizations that value creativity and user-centric design.
          </p>
        </div>
      </div>
    </article>
  );
};
export default AboutMe;
