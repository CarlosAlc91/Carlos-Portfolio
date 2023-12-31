import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const [t, i18n] = useTranslation("global");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_calcantara",
        "template_calcantara",
        form.current,
        "mx0g-rCY9I2xw_V7z"
      )
      .then(
        (result) => {
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handlerSwitchLanguge = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <article
      id="contact"
      className="relative w-full mx-auto  h-full md:h-screen mb-14"
    >
      <h1
        className="font-poppins font-semibold text-center text-[#32CD32] text-[40px] py-20 md:text-5xl w-full mx-auto"
        data-aos="zoom-in-down"
      >
        {t("Contact.title")}
        {/* Let's talk about business */}
      </h1>
      <div className="flex flex-col justify-center items-center md:flex-row gap-10 relative z-10 px-5 w-full mx-auto">
        {/* form */}
        <section
          className="flex flex-col justify-center items-center py-6 w-full md:w-1/3 mx-auto md:py-6 px-6 bg-[#e8e8e8]/80 border-2 border-[#32CD32] rounded-3xl"
          data-aos="fade-up-left"
        >
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 font-sen capitalize"
            >
              <div>
                <label className="text-2xl md:text-3xl">
                  {t("Contact.name")}
                </label>
                <input
                  type="text"
                  name="user_name"
                  className=" bg-[#d9d9d9] text-black rounded-lg w-full py-1 placeholder:italic placeholder:text-xl placeholder:text-gray-500 px-4"
                  placeholder={t("Contact.name")}
                  required
                />
              </div>
              <div>
                <label className=" text-2xl md:text-3xl">
                  {t("Contact.email")}
                </label>
                <input
                  type="email"
                  name="user_email"
                  className=" bg-[#d9d9d9] text-black rounded-lg w-full py-1 placeholder:italic placeholder:text-xl placeholder:text-gray-500 px-4"
                  placeholder={t("Contact.email")}
                  required
                />
              </div>
              <div>
                <label className="text-2xl md:text-3xl">
                  {t("Contact.subject")}
                </label>
                <input
                  type="text"
                  name="subject"
                  className=" bg-[#d9d9d9] text-black rounded-lg w-full py-1 placeholder:italic placeholder:text-xl placeholder:text-gray-500 px-4"
                  placeholder={t("Contact.subject")}
                  required
                />
              </div>
              <div>
                <label className="text-2xl md:text-3xl">
                  {t("Contact.message")}
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="h-28 bg-[#d9d9d9] text-black rounded-lg w-full py-1 placeholder:italic placeholder:text-xl placeholder:text-gray-500 px-4"
                  placeholder={t("Contact.message")}
                  required
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#32CD32]  hover:bg-black hover:text-white w-full py-2 rounded-md text-xl font-bold"
                >
                  {t("Contact.button")}
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* map */}
        <section
          className="h-[400px] w-full md:w-1/3 mx-auto rounded-3xl"
          data-aos="fade-up-right"
        >
          <iframe
            className="w-full h-full rounded-3xl border-2 border-[#32CD32]"
            width="480"
            height="600"
            frameborder="0"
            scrolling="yes"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?w=480&amp;h=600&amp;hl=en&amp;q=%20ecatepec+(Ecatepec)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </section>
      </div>
    </article>
  );
};
export default Contact;
