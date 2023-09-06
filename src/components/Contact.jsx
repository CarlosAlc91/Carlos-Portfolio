const Contact = () => {
  return (
    <article className="min-h-full relative px-4 py-6">
      <h1 className="font-poppins font-semibold text-3xl py-10 text-center">
        Let's talk about business
      </h1>
      <section className="flex justify-center relative z-10">
        <div className="flex flex-col justify-center  w-[400px] h-[500px] sm:h-[800px] sm:w-[900px] bg-gray-600/40 px-6 py-9 rounded-3xl">
          <form className="font-sen capitalize">
            <div>
              <h3>Name</h3>
              <input type="text" className=" bg-purple rounded-lg w-full" />
            </div>
            <div>
              <h3>email</h3>
              <input type="email" className=" bg-purple rounded-lg w-full" />
            </div>
            <div>
              <h3>message</h3>
              <input type="text" className="h-28 bg-purple rounded-lg w-full" />
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
