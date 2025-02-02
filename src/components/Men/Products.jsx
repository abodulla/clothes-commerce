import Product2 from "../assets/product-02.jpg";
import Product4 from "../assets/product-09.jpg";
import product5 from "../assets/product-05.jpg";
import product7 from "../assets/product-03.jpg";

const products = [
  {
    id: 1,
    name: "T-Shirt Name 10",
    price: "$33.00 – $36.00",
    category: "MEN",
    image: Product4,
    colors: ["brown", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "T-Shirt Name 2",
    price: "$22.00 – $27.00",
    category: "MEN",
    image: Product2,
    colors: ["black", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "T-Shirt Name 3",
    price: "$32.00 – $34.00",
    category: "MEN",
    image: product5,
    colors: ["black", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "T-Shirt Name 3",
    price: "$32.00 – $34.00",
    category: "MEN",
    image: product7,
    colors: ["black", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-sm text-gray-500 mb-2">Home / Men</div>
      <h1 className="text-4xl font-bold mb-4">Men</h1>
      <p className="text-gray-600 mb-6">Showing 1–8 of 10 results</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-sm p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <h3 className="text-gray-500 text-xs uppercase">
              {product.category}
            </h3>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`w-5 h-5 rounded-full border ${
                    color === "black" ? "bg-black" : "bg-white border-gray-400"
                  }`}
                ></span>
              ))}
            </div>
            <div className="mt-3 flex space-x-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm border rounded-md"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
