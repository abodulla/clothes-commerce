import Product_1 from "../assets/product-09.jpg";
import Product_2 from "../assets/product-06.jpg";
import Product_3 from "../assets/product-10.jpg";
import Product_4 from "../assets/product-08.jpg";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, title, price, category, discount }) => {
  return (
    <div className="relative group bg-white p-4 rounded-lg shadow-md">
      {discount && (
        <div className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-md">
          {discount}
        </div>
      )}

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-85 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 rounded-lg transition-opacity duration-300">
          <button className="bg-white text-gray-800 p-3 rounded-full shadow-md hover:bg-gray-100">
            🛒
          </button>
          <button className="bg-white text-gray-800 p-3 rounded-full shadow-md hover:bg-gray-100">
            👁️
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-gray-500 text-sm uppercase">{category}</p>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <p className="text-gray-800 mt-1">{price}</p>

        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="w-4 h-4 bg-black rounded-full"></span>
          <span className="w-4 h-4 bg-pink rounded-full"></span>
          <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-3">
          <button className="text-sm border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
            XS
          </button>
          <button className="text-sm border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
            S
          </button>
          <button className="text-sm border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
            M
          </button>
          <button className="text-sm border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
            L
          </button>
          <button className="text-sm border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
            XL
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      image: Product_1, // Fix: Use variable directly
      title: "T-Shirt Name 10",
      price: "$33.00 – $36.00",
      category: "Men",
      discount: null,
    },
    {
      image: Product_2,
      title: "T-Shirt Name 9",
      price: "$23.00 – $28.00",
      category: "Women",
      discount: null,
    },
    {
      image: Product_3,
      title: "T-Shirt Name 8",
      price: "$21.00 – $25.00",
      category: "Men",
      discount: null,
    },
    {
      image: Product_4,
      title: "T-Shirt Name 7",
      price: "$36.00 – $39.00",
      category: "Women",
      discount: "-10%",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center mb-10">
        <p className="text-gray-500 text-sm uppercase">Summer Collection</p>
        <h2 className="text-3xl font-bold mt-2">Popular T-Shirts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-16">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
