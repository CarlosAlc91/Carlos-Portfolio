import { useState } from "react";
import ModalMenu from "./ModalMenu";

const HeaderNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handlerShowModal = () => {
    setShowMenu(!showMenu);
  };

  let Links = [
    { name: "About me", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-poppins text-red">
          <span className="text-3xl text-white mr-1 pt-2">
            <img src="/images/logo.png" alt="logo.png" />
          </span>
          Carlos Alcantara
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 font-poppins font-normal absolute ms:static ms:z-auto z-[-1] left-0 w-full">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl">
              <a
                href={link.link}
                className="text-white  hover:text-red hover:font-poppins hover:font-normal duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            className="bg-red text-white font-poppins py-2 px-6 rounded md:ml-8 hover:bg-[#be123c] duration-500"
            onClick={handlerShowModal}
          >
            get started
          </button>
        </ul>
        <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  );
};
export default HeaderNavbar;
