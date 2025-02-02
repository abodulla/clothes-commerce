import image_1 from "../assets/collection-02.jpg";
import image_2 from "../assets/collection-01.jpg";

const BaseCollection = () => {
  return (
    <>
      <div className="bg-white py-12">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-16">
          <div className="flex justify-center">
            <img
              src={image_1}
              alt="Product 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={image_2}
              alt="Product 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text and Button Section */}
        <div className="relative flex justify-center mt-8">
          <div className="absolute text-center md:text-left mt-10 px-4 md:px-0">
            <p className="text-gray-500 text-base tracking-wide">Men</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 leading-relaxed">
              The base collection - Ideal <br />
              every day.
            </h2>
            <button className="mt-6 px-8 py-4 bg-black text-white text-sm font-semibold uppercase rounded hover:bg-gray-800 transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseCollection;
