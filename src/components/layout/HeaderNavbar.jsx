const HeaderNavbar = () => {
  return (
    <section>
      <nav className="flex justify-between items-center bg-bg-main text-red font-poppins uppercase text-xl">
        <img src="/images/logo.png" alt="" />
        <span className="flex flex-col text-right px-4">
          <h1>Carlos</h1>
          <h1>Alcantara</h1>
        </span>
      </nav>
    </section>
  );
};
export default HeaderNavbar;
