import image from "../images/hero_blur.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex hero flex-col"></div>
      <div className="flex flex-col font-bold items-center justify-start h-96 text-slate-100">
        <h1 className="text-4xl mb-1">Jabones de glicerina</h1>
        <h2 className="hero-subtitle">Renueva tus sentidos...</h2>
      </div>
    </>
  );
};

export default Hero;
