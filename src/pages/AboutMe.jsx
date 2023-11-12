import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <article id="about" className="w-full mx-auto h-full px-6 py-6">
      <h1
        className="font-poppins py-20 text-center text-[#32CD32] text-4xl font-semibold md:text-5xl w-full mx-auto"
        data-aos="fade-right"
      >
        {t("AboutMe.title")}
      </h1>
      <div
        className="flex flex-col w-full md:flex-row gap-10 items-center"
        data-aos="zoom-in-left"
      >
        <div
          className="relative z-[10] mb-8 md:mb-0 animate-animateUser md:w-1/2"
          data-aos="zoom-in-left"
        >
          <img
            className="rounded-full border-2 border-[#32CD32]"
            src="/images/CA.png"
            alt="circle"
          />
        </div>

        <div
          className="w-full mx-auto bg-[#e8e8e8] rounded-3xl md:w-1/2 border-2 border-[#32CD32]"
          data-aos="zoom-in-right"
        >
          <p className="font-sen text-black font-normal text-2xl px-9 py-5 my-5">
            <span className="font-semibold text-[#32CD32] text-4xl">
              {t("AboutMe.hi")}
            </span>
            <br />
            {t("AboutMe.body")}
          </p>
        </div>
      </div>
    </article>
  );
};
export default AboutMe;
