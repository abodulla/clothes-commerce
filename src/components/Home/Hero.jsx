import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-pink py-12 px-6 m-7 flex flex-col-reverse lg:flex-row items-center justify-center text-center lg:text-left">
      {/* Left Content */}
      <div className="max-w-md">
        <p className="text-gray-500 text-sm uppercase">Women</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Slick. Modern. <br /> Awesome.
        </h1>
        <button className="bg-black text-white py-3 px-6 rounded-lg text-sm hover:bg-gray-800">
          Shop Collection
        </button>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 lg:mt-0">
        <div className="absolute bg-white rounded-full -z-10 w-64 h-64 md:w-96 md:h-96 top-10 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-10"></div>
        <img
          src={hero}
          alt="Model wearing a pink shirt"
          className="w-64 md:w-96 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
