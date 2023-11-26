import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Studies = () => {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section id="academic" className="w-full mx-auto h-full px-6 py-6">
      <h1
        className="font-poppins py-20 text-center text-[#32CD32] text-4xl font-semibold md:text-5xl w-full mx-auto"
        data-aos="zoom-in-down"
      >
        {t("Academic.title")}
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:w-[75%] gap-6 mx-auto  rounded-3xl px-6 py-8">
        {/* uaem */}
        <div
          className="flex flex-col h-[350px] w-[250px] justify-center items-center gap-4  bg-[#e8e8e8] hover:bg-[#d9d9d9] py-3 px-2 border-2 border-[#32CD32]  rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500"
          data-aos="fade-right"
        >
          <img
            className="rounded-full h-[100px] w-[100px]"
            src="/images/uaem.jpeg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-md text-center">
            UAEMex (Universidad Autonoma del Estado de Mexico)
          </h3>
          <h4 className="font-poppins text-lg text-center">2019 - Actual</h4>
          <p className="font-poppins text-base text-center">
            {t("Academic.major-auemex")}
          </p>
        </div>
        {/* academlo */}
        <div
          className=" flex flex-col h-[350px] w-[250px] justify-center items-center gap-4 bg-[#e8e8e8] hover:bg-[#d9d9d9] py-3 px-2 border-2 border-[#32CD32] rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500"
          data-aos="fade-left"
        >
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/academlo.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Academlo
          </h3>
          <h4 className="font-sen text-xl text-center">2023 - 2023</h4>
          <p className="font-poppins text-lg text-center">
            {t("Academic.major-full")}
          </p>
          <a
            className="w-1/2 px-4 mx-auto py-2 inline-block bg-[#32CD32] hover:bg-black hover:text-white transition-colors rounded-lg text-center"
            href="https://drive.google.com/file/d/1nRvFFFfIWxZxlgAbxJDTEWqBw7YBH2xB/view?usp=drive_link"
            target="_blank"
          >
            {t("Academic.button")}
          </a>
        </div>
        {/* academlo */}
        <div
          className=" flex flex-col h-[350px] w-[250px] justify-center items-center gap-4 bg-[#e8e8e8] hover:bg-[#d9d9d9] py-3 px-2 border-2 border-[#32CD32] rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500"
          data-aos="fade-left"
        >
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/academlo.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Academlo
          </h3>
          <h4 className="font-sen text-xl text-center">2023 - 2023</h4>
          <p className="font-poppins text-lg text-center">
            {t("Academic.major-back")}
          </p>
          <a
            className="w-1/2 px-4 mx-auto py-2 inline-block bg-[#32CD32] hover:bg-black hover:text-white transition-colors rounded-lg text-center"
            href="https://drive.google.com/file/d/1aHwkJC_spQgMcsS8HCIX7MaFonFAGqhW/view?usp=drive_link"
            target="_blank"
          >
            {t("Academic.button")}
          </a>
        </div>
        {/* academlo */}
        <div
          className=" flex flex-col h-[350px] w-[250px] justify-center items-center gap-4 bg-[#e8e8e8] hover:bg-[#d9d9d9] py-3 px-2 border-2 border-[#32CD32] rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500"
          data-aos="fade-right"
        >
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/academlo.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Academlo
          </h3>
          <h4 className="font-sen  text-xl text-center">2023 - 2023</h4>
          <p className="font-poppins text-lg text-center">
            {t("Academic.major-front")}
          </p>
          <a
            className="w-1/2 px-4 mx-auto py-2 inline-block bg-[#32CD32] hover:bg-black hover:text-white transition-colors rounded-lg text-center"
            href="https://drive.google.com/file/d/19nYu-tfagdrJyPXmSDrMsjlF97ww5hBW/view?usp=sharing"
            target="_blank"
          >
            {t("Academic.button")}
          </a>
        </div>
        {/* academlo */}
        <div
          className=" flex flex-col h-[350px] w-[250px] justify-center items-center gap-4 bg-[#e8e8e8] hover:bg-[#d9d9d9] py-3 px-2 border-2 border-[#32CD32] rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500"
          data-aos="fade-right"
        >
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/academlo.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Academlo
          </h3>
          <h4 className="font-sen text-xl text-center">2023 - 2023</h4>
          <p className="font-poppins text-lg text-center">
            {t("Academic.major-foundations")}
          </p>
          <a
            className="w-1/2 px-4 mx-auto py-2 inline-block bg-[#32CD32] hover:bg-black hover:text-white transition-colors rounded-lg text-center"
            href="https://drive.google.com/file/d/127lAxuQ0dUKY0ylgTgbTpqyzkp9PuLnc/view?usp=sharing"
            target="_blank"
          >
            {t("Academic.button")}
          </a>
        </div>
        {/* hcc */}
        <div
          className=" flex flex-col h-[350px] w-[250px] justify-center items-center gap-4 bg-[#e8e8e8] hover:bg-[#d9d9d9] py-3 px-2 border-2 border-[#32CD32] rounded-xl mx-auto transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500"
          data-aos="fade-left"
        >
          <img
            className="h-[90px] w-[90px] rounded-full"
            src="/images/hcc.jpg"
            alt=""
          />
          <h3 className="font-sen font-semibold text-xl text-center">
            Houston Community College
          </h3>
          <h4 className="font-sen text-xl text-center">2023 - 2023</h4>
          <p className="font-poppins text-lg text-center">
            {t("Academic.major-hcc")}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Studies;
