import image_1 from "../assets/collection-03.jpg";

const BaseCollection2 = () => {
  return (
    <>
      <div className="py-16 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Column - Image */}
          <div className="flex justify-center bg-pink w-50% ">
            <img
              src={image_1}
              alt="Spring Summer Collection"
              className="insit-y-[-50px] rounded-lg shadow-lg object-cover w-full max-w-md"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-gray-500 text-sm uppercase tracking-wide">
              Women
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mt-2">
              Spring Summer Collection
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
              tempor, congue justo at, lobortis orci. Aliquam venenatis dui
              lectus, eu convallis turpis convallis et. Pellentesque.
            </p>
            <button className="mt-6 px-8 py-3 bg-black text-white text-sm font-semibold uppercase rounded hover:bg-gray-800">
              See Whole Collection
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseCollection2;
