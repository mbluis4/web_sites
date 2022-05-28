import bg_hero from "../images/hero_blur.jpg";
import mini_1 from "../images/mini_1.png";
import mini_2 from "../images/mini_2.png";
import mini_3 from "../images/mini_3.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <p className="text-lg">A total renewal of senses</p>
        <p className="text-5xl">Glycerin soaps</p>
        <button
          className="bg-red-300 mt-5 shadow-md px-7 py-2 
          rounded-md hover:bg-red-400 hover:text-slate-100 text-sm"
        >
          go to products
        </button>
      </div>
      <div className="hero flex min-h-full"></div>
    </div>
  );
};

export default Hero;
