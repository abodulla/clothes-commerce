export default function Review() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <p className="text-center text-lg font-semibold max-w-2xl px-4">
        <span className="italic">“</span>
        <span className="font-bold underline">
          Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua quis ipsum!
        </span>
        <span className="italic">”</span>
      </p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-500 mt-2">Jane Oliver</p>
    </div>
  );
}
