import { Link } from "react-scroll";

const WhatsAppButton = () => {
  return (
    <section className="relative z-[500]">
      <div className="grid fixed gap-3 text-5xl bottom-5 left-8 z-[100] text-center">
        <Link
          to="particle-bg"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="border-2 rounded-full animate-animatePulseGreen cursor-pointer  bg-[#32cd32]"
        >
          <i className="bx bx-chevrons-up px-[2px]"></i>
        </Link>
      </div>
      <div className="flex flex-col fixed gap-12 text-4xl bottom-5 right-8 z-[100] text-center">
        {/* linkedin */}
        <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] animate-animatePulseBlue">
          <a
            className="flex justify-center items-center bg-[#0a66c2] rounded-full [50px] h-[50px]"
            href="https://www.linkedin.com/in/carlos-manuel-alcantara-rodriguez-861ab2170/"
            target="_blank"
          >
            <i className="bx bxl-linkedin text-white px-[6px]  rounded-full "></i>
          </a>
        </div>
        {/* github */}
        <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] animate-animatePulseBlack dark:animate-animatePulseWhite">
          <a
            className="flex justify-center items-center  rounded-full [50px] h-[50px]"
            href="https://github.com/CarlosAlc91"
            target="_blank"
          >
            <i className="bx bxl-github text-black dark:text-white px-[6px]  rounded-full "></i>
          </a>
        </div>
        {/* whats */}
        <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] animate-animatePulseGreen">
          <a
            className="flex justify-center items-center bg-[#32CD32] rounded-full [50px] h-[50px]"
            href="https://wa.me/525633482738"
            target="_blank"
          >
            <i className="bx bxl-whatsapp text-white px-[6px]  rounded-full "></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default WhatsAppButton;
