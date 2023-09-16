import { useState } from "react";

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { name: "about", link: "/" },
    { name: "technologies", link: "/" },
    { name: "projects", link: "/" },
    { name: "contact", link: "/" },
  ];

  return (
    <div className="shadow-md w-full bg-white text-red fixed top-0 left-0 z-50">
      <div className="md:px-10 px-7 md:flex justify-between items-center">
        {/* logo */}
        <div className="flex text-2xl cursor-pointer items-center gap-2 z-50">
          <img src="/images/logo.png" alt="" />
          <span className="font-bold">Carlos</span>
        </div>
        {/* menu icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? (
            <i className="bx bx-menu "></i>
          ) : (
            <i className="bx bx-x"></i>
          )}
        </div>

        {/* links */}
        <ul
          className={`md:flex md:justify-end pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:z-auto z-[-1] right-0 w-full transition-all bg-white duration-500 ease-in ${
            isOpen ? "hidden" : "visible"
          }`}
        >
          {Links.map((link) => (
            <li className="my-4 md:my-0 md:ml-8 font-semibold">
              <a href="/">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HeaderNavbar;
