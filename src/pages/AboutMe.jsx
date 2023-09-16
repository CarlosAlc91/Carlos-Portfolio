const AboutMe = () => {
  return (
    <article className="h-full flex flex-col md:flex-row justify-evenly items-center px-8 py-40">
      <div className="mb-8 md:mb-0">
        <img src="/images/circle.png" alt="circle" />
      </div>

      <div className="w-full mx-auto bg-gray-600/40 rounded-3xl text-center">
        <h1 className="font-poppins font-semibold text-4xl py-10 px-10">
          About me
        </h1>
        <p className="font-sen text-p-gray text-justify font-normal text-2xl px-9 py-5">
          I'm Carlos Alcantara, a junior front-end web developer with a passion
          for creating visually appealing and user-friendly websites and
          applications. With a background in customer service and IT service
          desk, I bring a diverse skill set to my work.
          <br />
          I have a strong technical proficiency in HTML, CSS, JavaScript,
          Tailwind, React, and responsive design. I am committed to staying
          updated on emerging technologies and industry trends to deliver
          innovative solutions.
          <br />I am seeking collaborations with forward-thinking professionals
          and organizations that value creativity and user-centric design. Let's
          connect on LinkedIn or reach out to me at
          carlos.ma.rodriguez91@gmail.com to explore opportunities and make the
          web a better place together!
        </p>
      </div>
    </article>
  );
};
export default AboutMe;
