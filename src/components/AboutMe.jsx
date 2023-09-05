import { useState } from "react";
import ModalMenu from "./ModalMenu";

const AboutMe = () => {
  /* states */
  const [showMenu, setShowMenu] = useState(false);

  /* functions, handlers, logic */
  const handlerShowModal = () => {
    setShowMenu(!showMenu);
  };
  /* effects */
  return (
    <article className="mx-a min-h-screen">
      <header>
        <nav className="flex items-center justify-between">
          <img src="/images/logo.png" alt="logo.png" />
          <button
            onClick={handlerShowModal}
            className="text-red font-poppins w-32 px-4 font-semibold uppercase"
          >
            Carlos Alcantara
          </button>
        </nav>
      </header>
      <section className="grid items-center pl-12 h-[600px]">
        <h1 className="font-poppins pt-10 text-4xl font-semibold">Hi!</h1>
        <p className="font-sen text-p-gray font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          hic eveniet facilis aspernatur iure? Quod minus accusantium, nobis
          voluptatem earum placeat, non nam harum totam in voluptatibus at dicta
          quidem!
        </p>
        <div className="flex flex-wrap gap-4 py-10 text-3xl">
          <i className="bx bxl-html5"></i>
          <i className="bx bxl-css3"></i>
          <i className="bx bxl-javascript"></i>
          <i className="bx bxl-tailwind-css"></i>
          <i className="bx bxl-react"></i>
        </div>
      </section>
      <section className="relative">
        <img
          className="absolute right-1/2 -bottom-[260px]"
          src="/images/circle.png"
          alt="circle"
        />
      </section>
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </article>
  );
};
export default AboutMe;
