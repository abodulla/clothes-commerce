import backgroundImage from "../assets/bg-01.jpg"; // Replace with the correct path to your image

const HeroSection = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center h-screen mr-10 ml-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <p className="text-sm uppercase tracking-widest">New Collection</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Be different in your own way.
        </h1>
        <p className="text-lg mt-2">Find your unique style.</p>
        <button className="mt-6 px-8 py-3 bg-black text-white text-sm font-semibold uppercase rounded hover:bg-gray-800">
          Shop Collection
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
