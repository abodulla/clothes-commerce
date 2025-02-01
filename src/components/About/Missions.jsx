import BgImage from "../assets/bg-02.jpg";

const Missions = () => {
  return (
    <section
      className="relative m-10 bg-fixed bg-center w-90% h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-white">
          <p className="uppercase text-sm font-semibold">The Mission</p>
          <h2 className="text-4xl font-bold leading-tight">
            At the heart of everything, we set out to offer the best quality.
          </h2>
          <div className="w-12 h-1 bg-white my-4"></div>
        </div>
        <div className="text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            ante vel mauris molestie dignissim non eget nunc. Integer ac massa
            orci. Suspendisse vulputate semper nunc eget rhoncus. Aenean
            placerat facilisis ex, eu laoreet lorem convallis.
          </p>
          <p className="mt-4">
            Fusce gravida justo a lectus tempus lacinia. Ut mollis scelerisque
            ultricies. Aenean facilisis efficitur magna, at feugiat massa
            bibendum at. Etiam ut venenatis urna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Missions;
