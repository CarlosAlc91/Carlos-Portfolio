const WhatsAppButton = () => {
  return (
    <section className="grid fixed gap-5 text-5xl bottom-3 right-2 z-[100] text-center border">
      <div>
        <a
          className=" bg-[#0A66C2] rounded-full animate-pulse"
          href="https://www.linkedin.com/in/carlos-alcantara-861ab2170/"
          target="_blank"
        >
          <i className="bx bxl-linkedin px-2"></i>
        </a>
      </div>
      <div>
        <a
          className="rounded-full animate-pulse"
          href="https://github.com/CarlosAlc91?tab=repositories"
          target="_blank"
        >
          <i className="bx bxl-github px-2"></i>
        </a>
      </div>
      <div>
        <a
          className="bg-[#DB4437] rounded-full animate-pulse"
          href="mailto:carlos.ma.rodriguez91@gmail.com"
          target="_blank"
        >
          <i className="bx bxl-gmail px-2"></i>
        </a>
      </div>
      <div>
        <a
          className="bg-[#25D366] rounded-full animate-pulse "
          href="https://wa.me/525633482738"
          target="_blank"
        >
          <i className="bx bxl-whatsapp px-2"></i>
        </a>
      </div>
    </section>
  );
};
export default WhatsAppButton;
