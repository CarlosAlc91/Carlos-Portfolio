import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { name: "about", link: "#about" },
    { name: "technologies", link: "#technologies" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
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
            <i className="bx bx-x "></i>
          ) : (
            <i className="bx bx-menu"></i>
          )}
        </div>

        {/* links */}
        <ul
          className={`md:flex md:justify-end pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:z-auto z-[-1] right-0 w-full transition-all bg-white duration-500 ease-in ${
            isOpen ? "visible" : "hidden"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-4 md:my-0 md:ml-8 font-semibold">
              <Link to={`/${link?.name}`} scrollTo={`#${link?.name}`}>
                {link?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HeaderNavbar;
