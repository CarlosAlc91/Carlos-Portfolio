const Hero = () => {
  return (
    <article className="w-full h-screen bg-[#f3f5f8] font-poppins text-black">
      <nav className="flex w-full justify-around h-20 z-[111] bg-red leading-[80px]">
        <div className="flex text-4xl font-semibold text-[#3d535f] tracking-[3px] cursor-pointer uppercase">
          Carlos
        </div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </article>
  );
};
export default Hero;
