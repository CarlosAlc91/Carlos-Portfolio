const AboutMe = () => {
  return (
    <article className="h-full flex flex-col md:flex-row justify-evenly items-center px-8 py-8">
      <div className="mb-8 md:mb-0">
        <img src="/images/circle.png" alt="circle" />
      </div>

      <div className="w-full mx-auto bg-gray-600/40 rounded-3xl text-center">
        <h1 className="font-poppins font-semibold text-4xl py-10 px-10">
          About me
        </h1>
        <p className="font-sen text-p-gray text-justify font-normal text-2xl px-9">
          I'm Carlos Alcantara, a junior front-end web developer on a journey to
          bridge technology with user satisfaction. Currently pursuing a degree
          in computer engineering, I bring a diverse background that includes
          customer service and IT service desk experience, along with a stint as
          a supervisor.
          <br />
          <br />
          In my role as a front-end web developer, I blend technical proficiency
          in HTML, CSS, JavaScript, Tailwind, React and responsive design with a
          strong sense of design aesthetics. My goal is to craft visually
          appealing and user-friendly websites and applications that leave a
          lasting impression. What sets me apart is my commitment to lifelong
          learning. I'm always eager to stay updated on emerging technologies
          and industry trends.
          <br />
          <br />
          I'm looking to collaborate with forward-thinking professionals and
          organizations that value innovation, creativity, and user-centric
          design. Feel free to connect with me on LinkedIn or drop me a message
          at carlos.ma.rodriguez91@gmail.com. Let's explore opportunities to
          make the web a better place together!
        </p>
        <div className="flex flex-wrap justify-center  gap-4 py-10 text-3xl">
          <i className="bx bxl-html5"></i>
          <i className="bx bxl-css3"></i>
          <i className="bx bxl-javascript"></i>
          <i className="bx bxl-tailwind-css"></i>
          <i className="bx bxl-react"></i>
        </div>
      </div>
    </article>
  );
};
export default AboutMe;
