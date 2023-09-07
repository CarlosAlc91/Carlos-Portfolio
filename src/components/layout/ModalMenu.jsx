const ModalMenu = ({ showMenu }) => {
  return (
    <section
      className={`fixed bg-bg-main top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center transition-[opacity_transform] duration-100 ${
        showMenu
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      }`}
    >
      <div className="flex flex-col items-center max-w-max mx-auto">
        <ul className="font-poppins text-4xl font-semibold text-white uppercase cursor-pointer">
          <li className="hover:text-red py-6">About me</li>
          <li className="hover:text-red py-6">Projects</li>
          <li className="hover:text-red py-6">Contact</li>
        </ul>
        <div className="flex gap-5 absolute bottom-0 py-14 text-4xl cursor-pointer">
          <i className="bx bxl-linkedin"></i>
          <i className="bx bxl-twitter text-red"></i>
          <i className="bx bxl-github"></i>
          <i className="bx bxl-gmail text-red"></i>
        </div>
      </div>
    </section>
  );
};
export default ModalMenu;
