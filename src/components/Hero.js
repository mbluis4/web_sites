import image from "../images/hero_blur.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex hero flex-col  ">
        {/*  <img
        src={image}
        className="fixed top-0 left-0 -z-50"
        alt="hero soap"
      ></img> */}
      </div>
      <div className="flex flex-col font-bold items-center justify-center h-96 text-slate-100">
        <h1 className="text-4xl mb-1">Jabones de glicerina</h1>
        <h2 className="hero-subtitle">Renueva tus sentidos...</h2>
      </div>
    </>
  );
};

export default Hero;
