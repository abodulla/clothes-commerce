import product1 from "../assets/product-01.jpg";
import product2 from "../assets/product-05.jpg";
import product3 from "../assets/product-03.jpg";
import product4 from "../assets/product-08.jpg";

const products = [
  {
    id: 1,
    name: "T-Shirt Name 1",
    price: "$18.00 – $20.00",
    gender: "WOMEN",
    discount: "-14%",
    colors: ["black", "pink", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product1,
  },
  {
    id: 2,
    name: "T-Shirt Name 4",
    price: "$17.00 – $19.00",
    gender: "MEN",
    discount: "-14%",
    colors: ["black", "pink", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product2,
  },
  {
    id: 3,
    name: "T-Shirt Name 6",
    price: "$18.00 – $22.00",
    gender: "MEN",
    discount: "-20%",
    colors: ["black", "pink", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product3,
  },
  {
    id: 4,
    name: "T-Shirt Name 7",
    price: "$36.00 – $39.00",
    gender: "WOMEN",
    discount: "-10%",
    colors: ["black", "pink", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product4,
  },
];

const ProductGrid2 = () => {
  return (
    <div className="py-16 px-4 lg:px-20">
      <div className="text-center mb-8">
        <p className="text-gray-500 text-sm uppercase tracking-wide">
          Summer Collection
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold mt-2">
          On Sale T-Shirts
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-80"
              />
              <div className="absolute top-2 left-2 bg-white text-sm font-medium text-gray-700 rounded-full px-3 py-1">
                {product.discount}
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wide">
                {product.gender}
              </p>
              <h2 className="text-lg font-semibold mt-1">{product.name}</h2>
              <p className="text-gray-700 mt-1">{product.price}</p>

              <div className="flex items-center mt-2 space-x-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-5 h-5 rounded-full border ${
                      color === "black" ? "bg-black" : ""
                    } ${color === "pink" ? "bg-pink-200" : ""} ${
                      color === "white" ? "bg-white border-gray-300" : ""
                    }`}
                  ></div>
                ))}
              </div>

              <div className="flex items-center mt-4 space-x-2">
                {product.sizes.map((size, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 border text-sm rounded-md text-gray-700"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid2;
