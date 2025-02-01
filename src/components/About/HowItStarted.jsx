import Image from "../assets/about-01.jpg";

const HowItStarted = () => {
  return (
    <section className="py-16 px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How it Started</h2>
        <div className="w-12 h-1 bg-black mx-auto my-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto bg-pink">
        {/* Text Section */}
        <div className="bg-pink-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Vel mauris molestie dignissim
          </h3>
          <p className="font-semibold">
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
            ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
          </p>
          <p className="text-gray-700 mt-4">
            Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet
            faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet
            vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus
            sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia
            ex quis faucibus tempor. Sed feugiat.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={Image}
            alt="Interior Design"
            className="w-[570px] h-[432px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItStarted;
