import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-pink h-[600px] px-8">
        {/* Left Content */}
        <div className="max-w-md">
          <p className="text-gray-500 text-sm uppercase">Women</p>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Slick. Modern. <br /> Awesome.
          </h1>
          <button className="bg-black text-white py-3 px-6 rounded-lg text-sm hover:bg-gray-800">
            Shop Collection
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute bg-white rounded-full -z-10 w-96 h-72 top-12 left-12"></div>
          <img
            src={hero}
            alt="Model wearing a pink shirt"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
