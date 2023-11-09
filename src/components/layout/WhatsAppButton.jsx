const WhatsAppButton = () => {
  return (
    <section className="grid fixed gap-3 text-4xl bottom-5 right-2 z-[100] text-center">
      <div className="grid fixed gap-3 text-5xl bottom-5 left-2 z-[100] text-center">
        <a
          href="/"
          className="border-2 rounded-full animate-pulse  bg-[#32CD32]"
        >
          <i className="bx bx-chevrons-up px-[2px]"></i>
        </a>
      </div>
      <div className="grid fixed gap-3 text-4xl bottom-5 right-2 z-[100] text-center">
        <div>
          <a
            className=" bg-[#0A66C2] rounded-full animate-pulse"
            href="https://www.linkedin.com/in/carlos-manuel-alcantara-rodriguez-861ab2170/"
            target="_blank"
          >
            <i className="bx bxl-linkedin text-white px-[6px]"></i>
          </a>
        </div>
        <div>
          <a
            className="rounded-full animate-pulse"
            href="https://github.com/CarlosAlc91?tab=repositories"
            target="_blank"
          >
            <i className="bx bxl-github px-2 text-6xl"></i>
          </a>
        </div>
        <div>
          <a
            className="bg-[#25D366] rounded-full animate-pulse"
            href="https://wa.me/525633482738"
            target="_blank"
          >
            <i className="bx bxl-whatsapp text-white px-[6px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default WhatsAppButton;
