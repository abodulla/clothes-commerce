import Product1 from "../assets/product-01.jpg";
import Product3 from "../assets/product-07.jpg";
import product6 from "../assets/product-06.jpg";
import product8 from "../assets/product-08.jpg";

const products = [
  {
    id: 1,
    name: "T-Shirt Name 1",
    price: "$18.00 – $20.00",
    category: "WOMEN",
    image: Product1,
    colors: ["black", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "T-Shirt Name 3",
    price: "$32.00 – $34.00",
    category: "WOMEN",
    image: Product3,
    colors: ["black", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "T-Shirt Name 3",
    price: "$32.00 – $34.00",
    category: "WOMEN",
    image: product6,
    colors: ["black", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "T-Shirt Name 3",
    price: "$32.00 – $34.00",
    category: "WOMEN",
    image: product8,
    colors: ["black", "white"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-sm text-gray-500 mb-2">Home / Shop</div>
      <h1 className="text-4xl font-bold mb-4">Shop</h1>
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
