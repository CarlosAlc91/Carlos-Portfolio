import Projects from "../../pages/Projects";

const Navbar = () => {
  return (
    <article className="text-red border p-5 font-poppins font-normal uppercase  rotate-90 fixed -right-[100px]">
      <ul className="relative flex justify-end items-center border border-red gap-4">
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="/projects">Contact</a>
      </ul>
    </article>
  );
};
export default Navbar;
