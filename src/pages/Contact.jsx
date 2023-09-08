import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

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
          alert("message ssent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <article className="min-h-full relative px-4 py-6">
      <h1 className="font-poppins font-semibold text-4xl py-20 px-10">
        Let's talk about business
      </h1>
      <section className="relative z-10">
        <div className="flex flex-col justify-center  w-auto h-[500px] sm:h-[700px] sm:w-[700px] md:w-[700px] bg-gray-600/40 px-6 rounded-3xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="font-sen capitalize">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                className=" bg-purple rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label>email</label>
              <input
                type="email"
                name="user_email"
                className=" bg-purple rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label>message</label>
              <textarea
                type="text"
                name="message"
                className="h-28 bg-purple rounded-lg w-full"
                required
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="bg-purple hover:bg-[rgb(92,92,184)] w-full py-2 rounded-md"
              >
                send
              </button>
            </div>
          </form>
          <section className="flex justify-center items-center gap-6 bottom-0 text-4xl pt-9 mx-auto">
            <a
              href="https://www.linkedin.com/in/carlos-alcantara-861ab2170/"
              target="_blank"
            >
              <i className="bx bxl-linkedin p-3 text-3xl  py-3 px-4 hover:bg-slate-500 rounded-full"></i>
            </a>
            <a
              href="https://github.com/CarlosAlc91?tab=repositories"
              target="_blank"
            >
              <i className="bx bxl-github p-3 hover:rounded-full hover:bg-slate-500"></i>
            </a>
            <a href="https://wa.me/525633482738">
              <i className="bx bxl-whatsapp p-3 hover:rounded-full hover:bg-slate-500"></i>
            </a>
          </section>
        </div>
      </section>
      <section className="relative">
        <img
          className="absolute -left-[55%] bottom-8 md:-left-1/2 md:-bottom-[100px] lg:-left-8 lg:-bottom-0"
          src="/images/square.png"
          alt=""
        />
      </section>
    </article>
  );
};
export default Contact;

<input type="submit" value="Send" className="cursor-pointer" />;
