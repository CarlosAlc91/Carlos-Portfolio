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
      <h1 className="font-poppins font-semibold text-3xl py-10 text-center">
        Let's talk about business
      </h1>
      <section className="flex justify-center relative z-10">
        <div className="flex flex-col justify-center  w-[400px] h-[500px] sm:h-[800px] sm:w-[900px] bg-gray-600/40 px-6 py-9 rounded-3xl">
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
        </div>
      </section>
      <section className="">
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
