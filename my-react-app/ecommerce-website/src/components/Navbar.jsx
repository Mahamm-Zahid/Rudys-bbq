import React, { useState } from "react";
import "../styles.css";
import logoImage from "../assets/images/logo.png";
import arrowDown from "../assets/images/arrow_down.svg";
import menu from "../assets/images/menu_icon.png";
import cart from "../assets/images/cart_icon.png";
import Rudy from "../assets/images/ruddy.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ menuItems, orderItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isOrderDropdownOpen, setOrderDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOrderDropdownToggle = () => {
    setOrderDropdownOpen(!isOrderDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleShopDropdownToggle = () => {
    setShopDropdownOpen(!isShopDropdownOpen);
  };

  const mobileMenuHeight = isShopDropdownOpen ? "auto" : "290px";
  return (
    <header className="w-full flex h-115">
      <nav className="bg-black text-white w-full relative flex ">
        <div className="flex items-center justify-between bg-yellow-300 p-4 w-full">
          <button
            onClick={handleMobileMenuToggle}
            className="lg:hidden text-white py-2  bg-yellow-300"
          >
            <img src={menu} alt="Menu" />
          </button>

          <a href="/" className="flex items-center justify-center flex-grow">
            {/* Desktop Logo */}
            <img
              src={logoImage}
              alt="Desktop Logo"
              className="max-w-[180px] w-full hidden lg:block"
            />

            {/* Mobile Logo */}
            <img
              src={Rudy}
              alt="Mobile Logo"
              className="max-w-[180px] w-full block lg:hidden h-18"
            />
          </a>

          <button
            // onClick={handleCartToggle}
            className="lg:hidden text-white py-2 px-4 bg-yellow-300"
          >
            <img src={cart} alt="Cart" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu bg-gray-800 text-white fixed top-0 left-0 h-full w-290 z-10 transition-transform duration-300 ease-in ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col">
            {/* Your menu items */}
            <li className="text-3xl relative">
              {/* Wrap the content inside a div */}
              <div
                className="bg-black py-4 px-4 text-3xl lg:font-normal font-WTC-WOODIE  items-center transition-transform duration-300 ease-in w-full flex"
                onClick={handleShopDropdownToggle}
              >
                SHOP
                <img
                  src={arrowDown}
                  alt="Shop menu dropdown"
                  className={`ml-3 inline-block align-middle transform ${
                    isShopDropdownOpen ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300 ease-in`}
                />
              </div>
              {isShopDropdownOpen && (
                <div className="dropdown-panel bg-gray-800  w-full absolute top-full left-0">
                  <ul className="mega-nav-list max-w-screen-lg mx-auto">
                    {/* Replicate your shop dropdown content here */}
                    <li>
                      <link
                        to="/viewall"
                        className="block py-3 px-4 text-1xl font-WTC-ROAST tracking-wider font-bold "
                      >
                        View all
                      </link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="border-t border-b-2  w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider  "
                      >
                        Apparel
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="border-t border-b-2  w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider "
                      >
                        Gift Cards
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="border-t border-b-2  w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider "
                      >
                        Rudy's Gifts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="border-t border-b-2  w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider "
                      >
                        Sauce and Rubs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="border-t border-b-2  w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider "
                      >
                        Smoked Meats
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="border-t border-b-2  w-full block py-3 px-4 font-bold text-1xl font-WTC-ROAST tracking-wider "
                      >
                        Shopping Cart
                      </a>
                    </li>
                    <li className="list-yellow">
                      <a
                        href="#"
                        className="border-t border-b-2 border-gray-500 w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider bg-yellow-400 text-black"
                      >
                        Account Login
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className=" text-3xl h">
              <a
                href="#"
                className="bg-yellow-300 block text-black py-4 px-4 text-3xl lg:font-normal font-WTC-WOODIE  items-center transition-transform duration-300 ease-in w-full "
              >
                MENU
              </a>
            </li>
            <li className=" text-3xl ">
              <a
                href="#"
                className="bg-black py-4 px-4 font-WTC-WOODIE  items-center transition-transform duration-300 ease-in w-full flex"
              >
                LOCATIONS
              </a>
            </li>
            <li className=" text-3xl ">
              <a
                href="#"
                className="bg-red-600 py-4 px-4 font-WTC-WOODIE  items-center transition-transform duration-300 ease-in w-full flex"
              >
                ORDER
              </a>
            </li>
            <li className="py-2 text-3xl ">
              <a href="#" className="py-2 px-4 ">
                FEEDBACK
              </a>
            </li>
            <li className="py-2 text-3xl ">
              <a href="#" className="py-2 px-4 ">
                GIFT CARDS
              </a>
            </li>
            <li className="py-2 text-3xl ">
              <a href="#" className="py-2 px-4 ">
                CAREERS
              </a>
            </li>
          </ul>
        </div>

        <ul className="flex items-center ">
          <li className="relative dropdown flex-grow hidden lg:block">
            <a
              href="#"
              className="py-12 lg:px-12 text-3xl lg:font-normal font-WTC-WOODIE hover:text-yellow-300 items-center transition-transform duration-300 ease-in w-full flex "
              onClick={handleDropdownToggle}
            >
              SHOP
              <img
                src={arrowDown}
                alt="Shop menu dropdown"
                className={`ml-3 inline-block align-middle transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                } transition-transform duration-300 ease-in`}
              />
            </a>
            {isDropdownOpen && (
              <div className="dropdown-panel bg-red-600  z-10 w-full absolute top-full left-0">
                <ul className="mega-nav-list max-w-screen-lg mx-auto">
                  <li>
                    <a
                      href="#"
                      className="block py-3 px-4 text-1xl font-WTC-ROAST tracking-wider font-bold hover:bg-red-700"
                    >
                      View all
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-t border-b-2 border-red-500 w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider hover:bg-red-700 "
                    >
                      Apparel
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-t border-b-2 border-red-500 w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider hover:bg-red-700"
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-t border-b-2 border-red-500 w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider hover:bg-red-700"
                    >
                      Rudy's Gifts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-t border-b-2 border-red-500 w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider hover:bg-red-700"
                    >
                      Sauce and Rubs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-t border-b-2 border-red-500 w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider hover:bg-red-700"
                    >
                      Smoked Meats
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-t border-b-2 border-red-500 w-full block py-3 px-4 font-bold text-1xl font-WTC-ROAST tracking-wider hover:bg-red-700"
                    >
                      Shopping Cart
                    </a>
                  </li>
                  <li className="list-yellow">
                    <a
                      href="#"
                      className="border-t border-b-2 border-red-500 w-full block font-bold py-3 px-4 text-1xl font-WTC-ROAST tracking-wider bg-yellow-400 text-black"
                    >
                      Account Login
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <div className="w-0.5 h-full bg-white hidden lg:block"></div>
          <li className="hidden lg:block">
            <Link to={"/ViewAll"}>
              <span>MENU</span>
            </Link>
            <a
              href="/"
              className="text-white  bg-black font-WTC-WOODIE text-3xl items-center hover:text-yellow-300 flex   font-normal p-8 "
            >
              MENU
            </a>
          </li>
          <div className="w-0.5 h-full bg-white hidden lg:block"></div>
          <li className="hidden lg:block">
            <a
              href="/"
              className="text-white bg-black font-WTC-WOODIE text-3xl items-center hover:text-yellow-300 flex  font-normal p-6 "
            >
              LOCATIONS
            </a>
          </li>
          <div className="w-0.5 h-full bg-white hidden lg:block"></div>
          <li className="hidden lg:block">
            <a
              href="/"
              className="text-white bg-black font-WTC-WOODIE text-3xl items-center flex hover:text-yellow-300 w-258 font-normal p-6 "
            >
              GROUP MEALS
            </a>
          </li>
          <div className="w-0.5 h-full bg-white hidden lg:block"></div>
          <li className="nav-page three-line  w-234 hidden lg:block">
            <div className="flex flex-col gap-2 bg-black text-white h-full items-center text-center ">
              <a href="#" className="hover:text-yellow-300 ">
                FEEDBACK
              </a>
              <div className="w-full h-0.5 bg-white"></div>
              <a href="#" className="hover:text-yellow-300">
                GIFT CARDS
              </a>
              <div className="w-full h-0.5 bg-white"></div>
              <a href="#" className="hover:text-yellow-300">
                CAREERS
              </a>
            </div>
          </li>

          <li className="dropdown flex-grow  items-center relative hidden lg:block">
            <a
              href="#"
              className="py-12 md:px-12 bg-red-600 flex items-center font-WTC-WOODIE text-3xl  justify-between w-full"
              onClick={handleOrderDropdownToggle}
            >
              ORDER
              <img
                src={arrowDown}
                alt="Order menu dropdown"
                className={`ml-3 icon-arrow-down inline-block align-middle  transition-transform duration-300 ease-in ${
                  isOrderDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </a>
            {isOrderDropdownOpen && (
              <div className="dropdown-panel  absolute top-full left-0 w-full z-10">
                <div className="container2 max-w-screen-lg mx-auto">
                  <ul>
                    <li>
                      <a
                        href="/"
                        className="block text-white font-WTC-ROAST font-bold tracking-wide py-3 bg-red-700 text-left uppercase hover:bg-red-800"
                      >
                        <span className="block px-4 bg-red-700 hover:bg-red-800">
                          To - Go & Delivery
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="border-t border-red-400 bg-red-700 w-full font-bold block text-white font-WTC-ROAST  tracking-wide py-3 px-4  text-left uppercase hover:bg-red-800"
                      >
                        Group Meals & Catering
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className=" border-t border-red-400 bg-red-700 w-full block text-white font-WTC-ROAST font-bold tracking-wide py-3 px-4  text-left uppercase hover:bg-red-800"
                      >
                        Mail order
                      </a>
                    </li>
                    <li className="list-yellow block border-t border-red-400 w-full  font-WTC-ROAST font-bold bg-yellow-300 text-black  px-4  tracking-wide py-3 text-left uppercase ">
                      <a href="/">Need help?</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
