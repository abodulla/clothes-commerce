import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className=" h-20 flex justify-between">
        <div className=" pl-4 flex  gap-4 gray-900  items-center object-start ">
          <a href="/">BUY T-SHIRTS</a>
          <a href="/">WOMEN</a>
          <a href="/">MEN</a>
          <a href="/">ABOUT</a>
          <a href="/">CONTACT</a>
        </div>
        <div className=" flex object-center  object-cover">
          <img src={logo} alt="Logo" className="w-45 h-15 " />
        </div>
        <div className="flex p-6 gap-10 object-end">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="gray-500" />
          <p>$0.0</p>
          <FontAwesomeIcon icon={faShoppingBasket} />

          <a href="/">LOG IN</a>
        </div>
      </div>
    </>
  );
};

export default Header;
