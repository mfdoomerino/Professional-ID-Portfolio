const Footer = () => {
  return (
    <div className="grid grid-cols-4 mt-auto">
      <div
        className="bg-contain h-4 bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/logoipsum-logo-1.svg)" }}>
      </div>
      <div
        className="bg-contain h-4 bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/logoipsum-logo-2.svg)" }}>
      </div>
      <div
        className="bg-contain h-4 bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/logoipsum-logo-3.svg)" }}>
      </div>
      <div
        className="bg-contain h-4 bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/logoipsum-logo-4.svg)" }}>
      </div>
    </div>
  );
};

export default Footer;
