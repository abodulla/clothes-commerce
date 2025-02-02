import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-pink text-center py-10 lg:py-16 m-10">
      {/* Header */}
      <h3 className="text-lg font-bold md:text-2xl mb-4">
        Subscribe To Get Offers In Your Inbox
      </h3>
      <p className="text-gray-600 md:text-lg mb-6">
        Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
      </p>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 my-4 text-gray-700">
        <a href="/shop" className="hover:text-black text-sm md:text-base">
          Buy T-Shirts
        </a>
        <a href="/women" className="hover:text-black text-sm md:text-base">
          Women
        </a>
        <a href="/men" className="hover:text-black text-sm md:text-base">
          Men
        </a>
        <a href="/about" className="hover:text-black text-sm md:text-base">
          About
        </a>
        <a href="/contact" className="hover:text-black text-sm md:text-base">
          Contact
        </a>
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 my-4">
        <a
          href="#"
          className="p-2 bg-white rounded shadow-md hover:bg-gray-200 text-xl"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="#"
          className="p-2 bg-white rounded shadow-md hover:bg-gray-200 text-xl"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="p-2 bg-white rounded shadow-md hover:bg-gray-200 text-xl"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-white text-center py-4 mt-8">
        <p className="text-sm md:text-base">
          Copyright &copy; 2025 T-Shirts Store | Powered by T-Shirts Store
        </p>
      </div>
    </footer>
  );
}
