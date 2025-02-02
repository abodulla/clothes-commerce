import image1 from "../assets/cat-men.jpg";
import image2 from "../assets/cat-women.jpg";

const Categories = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-between p-8 ">
      <div className="relative group w-full md:w-1/2">
        <img
          src={image1}
          alt="Men's Category"
          className="w-full h-auto object-cover "
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4 text-center flex items-center justify-center">
          <a href="/men">
            <h3 className="text-lg font-bold ">MEN</h3>
            <p className="text-sm">5 PRODUCTS</p>
          </a>
        </div>
      </div>

      <div className="relative group w-full md:w-1/2">
        <img
          src={image2}
          alt="Women's Category"
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4 text-center">
          <a href="/women">
            <h3 className="text-lg font-bold">WOMEN</h3>
            <p className="text-sm">5 PRODUCTS</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
