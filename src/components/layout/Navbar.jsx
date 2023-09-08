import Projects from "../../pages/Projects";

const Navbar = () => {
  return (
    <article className="text-red border p-5 font-poppins font-normal uppercase  rotate-90 fixed -right-[100px]">
      <ul className="relative flex justify-end items-center border border-red gap-4">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="#about">Contact</a>
        </li>
      </ul>
    </article>
  );
};
export default Navbar;
