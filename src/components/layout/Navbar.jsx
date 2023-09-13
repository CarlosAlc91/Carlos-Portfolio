import { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "home", link: "/" },
    { name: "about", link: "/" },
    { name: "projects", link: "/" },
    { name: "contact", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white text-black md:px-10">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-poppins">
          <span className="cursor-pointer">
            <img className="cursor-pointer" src="/images/logo.png" alt="" />
          </span>
          designer
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden"
        >
          <i className={`bx bx-menu ${open ? "close" : "menu"}`}></i>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 ml-3 text-xl md:my-0 my-1">
              <a
                href={link.link}
                className="text-red hover:text-green-600 duration-500 cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
