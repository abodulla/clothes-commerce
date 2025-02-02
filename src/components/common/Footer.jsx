import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-pink text-center py-10 h-80 m-10">
      <h3 className="text-lg font-bold">
        Subscribe To Get Offers In Your Inbox
      </h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
      </p>

      <nav className="flex justify-center gap-6 my-4 text-gray-700">
        <a href="/shop" className="hover:text-black">
          Buy T-Shirts
        </a>
        <a href="/women" className="hover:text-black">
          Women
        </a>
        <a href="/men" className="hover:text-black">
          Men
        </a>
        <a href="/about" className="hover:text-black">
          About
        </a>
        <a href="/contact" className="hover:text-black">
          Contact
        </a>
      </nav>

      <div className="flex justify-center gap-4 my-4">
        <a
          href="#"
          className="p-2 bg-white rounded shadow-md hover:bg-gray-200"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="#"
          className="p-2 bg-white rounded shadow-md hover:bg-gray-200"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="p-2 bg-white rounded shadow-md hover:bg-gray-200"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="bg-black text-white text-center py-4 mt-28">
        <p>Copyright &copy; 2025 T-Shirts Store | Powered by T-Shirts Store</p>
      </div>
    </footer>
  );
}
