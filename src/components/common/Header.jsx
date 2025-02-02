import { useState } from "react";
import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingBasket,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 h-16 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="w-28 h-auto" />
        </a>
      </div>

      {/* Navigation Links (Hidden on Mobile) */}
      <nav className="hidden md:flex gap-4 text-gray-900">
        <a href="/Shop">BUY T-SHIRTS</a>
        <a href="/Women">WOMEN</a>
        <a href="/Men">MEN</a>
        <a href="/About">ABOUT</a>
        <a href="/Contact">CONTACT</a>
      </nav>

      {/* Icons & Mobile Menu */}
      <div className="flex items-center gap-6">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-500 cursor-pointer"
        />
        <p className="text-sm font-bold text-orange-500">$0.00</p>
        <div className="relative">
          <FontAwesomeIcon
            icon={faShoppingBasket}
            className="text-black cursor-pointer"
          />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
            0
          </span>
        </div>
        {/* Mobile Menu Icon */}
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="text-black md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-10">
          <a href="/Shop" className="py-2">
            BUY T-SHIRTS
          </a>
          <a href="/Women" className="py-2">
            WOMEN
          </a>
          <a href="/Men" className="py-2">
            MEN
          </a>
          <a href="/About" className="py-2">
            ABOUT
          </a>
          <a href="/Contact" className="py-2">
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
