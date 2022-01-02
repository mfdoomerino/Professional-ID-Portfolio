const Content = () => {
  return (
    <div className="grid grid-cols-3 mt-16">
      <div>
        <div className="flex flex-col gap-1 mb-16 tracking-wider">
          <span className="mb-4 uppercase text-xs font-semibold font-subtitle">Contact</span>
          <span className="heading text-sm">nickgabrielsalvador@gmail.com</span>
          <span className="heading text-sm">+639-278512628</span>
          <span className="heading text-sm">Iloilo City, PH</span>
        </div>
        <div className="flex flex-col gap-1 tracking-wider">
          <span className="mb-4 uppercase text-xs font-semibold font-subtitle">Services</span>
          <span className="heading text-sm">Interior Design</span>
          <span className="heading text-sm">Product Design</span>
          <span className="heading text-sm">Graphic Design</span>
        </div>
      </div>
      <div className="h-[440px] w-80 bg-cover rounded-[80px] justify-self-center self-center flex items-center justify-center border">
        <div className="h-[400px] w-72 bg-cover rounded-[80px] justify-self-center self-center flex items-center justify-center border">
          <div
            className="h-[360px] w-64 bg-cover rounded-[80px]"
            style={{ backgroundImage: "url(/portrait.jpeg)" }}>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="flex flex-col gap-1 mb-16 tracking-wider">
          <span className="mb-4 uppercase text-xs font-semibold font-subtitle">Years of experience</span>
          <span className="heading text-4xl">5</span>
        </div>
        <div className="flex flex-col gap-1 tracking-wider">
          <span className="mb-4 uppercase text-xs font-semibold font-subtitle">Notable clients</span>
          <span className="heading text-2xl">Nestle</span>
          <span className="heading text-2xl">Barclays</span>
          <span className="heading text-2xl">TwoBirds</span>
          <span className="heading text-2xl">Magnus</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
