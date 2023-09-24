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
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <article
      id="contact"
      className="md:h-screen mx-auto projects relative px-6 py-10"
    >
      <section className="relative z-10">
        <h1 className="font-poppins font-semibold text-4xl py-5 my- px-10 md:text-5xl">
          Let's talk about business
        </h1>
        <div className="flex flex-col justify-center items-center py-6 md:py-6 md:w-1/2 lg:w-1/2 bg-gray-600/40 px-6 rounded-3xl mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 font-sen capitalize"
          >
            <div>
              <label className="text-2xl md:text-3xl">Name</label>
              <input
                type="text"
                name="user_name"
                className=" bg-purple rounded-lg w-full py-1 placeholder:italic placeholder:text-xl px-4"
                placeholder="name"
                required
              />
            </div>
            <div>
              <label className=" text-2xl md:text-3xl">email</label>
              <input
                type="email"
                name="user_email"
                className=" bg-purple rounded-lg w-full py-1 placeholder:italic placeholder:text-xl px-4"
                placeholder="email"
                required
              />
            </div>
            <div>
              <label className="text-2xl md:text-3xl">subject</label>
              <input
                type="text"
                name="subject"
                className=" bg-purple rounded-lg w-full py-1 placeholder:italic placeholder:text-xl px-4"
                placeholder="subject"
                required
              />
            </div>
            <div>
              <label className="text-2xl md:text-3xl">message</label>
              <textarea
                type="text"
                name="message"
                className="h-28 bg-purple rounded-lg w-full py-1 placeholder:italic placeholder:text-xl px-4"
                placeholder="message"
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
        </div>
      </section>
      <section>
        <img
          className="absolute -left-[55%] bottom-8 md:left-1/2 md:bottom-[100px] lg:-left-8 lg:-bottom-0 animate-animateUser"
          src="/images/square.png"
          alt=""
        />
      </section>
    </article>
  );
};
export default Contact;
