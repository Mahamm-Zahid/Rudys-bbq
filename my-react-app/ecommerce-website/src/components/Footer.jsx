import React from "react";
import footer from "../assets/images/footer.png";
import Rudy from "../assets/images/rudysfooter.png";
import facebook from "../assets/images/facebook-logo.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
const Footer = () => {
  const customStyle = {
    width: "36.75214%",
  };

  return (
    <div className="bg-gray-600 w-full pt-20 h-96">
      <div className="flex justify-evenly mx-auto max-w-screen-xl relative w-full">
        <div
          className="max-w-430px w-36.75214 m-0 bg-gray-800 px-2 rounded-lg"
          style={customStyle}
        >
          {/* Wrap the image inside a figure element with a link to the YouTube video */}
          <figure className="bg-gray-800 float-left p-10 py-8 w-full">
            <a href="https://youtu.be/-jR2Zrv_BOs" target="_blank">
              <img
                src={footer}
                alt="Video: How to cut brisket, featuring Chet Garner."
                className="w-full max-w-full bg-gray-800 relative left-0"
              />
            </a>
          </figure>
        </div>
        <div className="flex justify-between float-right p-0 sm:p-0 md:p-0 lg:pr-20 lg:pl-20 w-2/3">
          <ul className="capitalize list-none m-0 p-0 cursor-pointer ">
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Home
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Online store
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Gift cards
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Help
            </li>
          </ul>
          <ul className="list-none m-0 p-0">
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Menu
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Feedback
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Employment
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              To-Go & Delivery
            </li>
          </ul>
          <ul className="list-none m-0 p-0">
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Locations
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Group Meals
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Pink cup
            </li>
            <li className="mb-3 text-gray-300 transition duration-300 hover:text-white">
              Airforce Academy
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-30 px-15 pb-44 h-60">
        <a href="/" target="_parent" className="flex justify-center">
          <img src={Rudy} className="h-auto max-w-full" />
        </a>
        <div className="bg-gray-800 mt-10">
          <div className="mx-auto max-w-screen-xl relative w-full">
            <ul className="flex justify-center space-x-4 -translate-y-5">
              <li className="">
                <a href="/" target="_blank" aria-label="facebook">
                  <img src={facebook} className="bg-white h-10 rounded-full" />
                </a>
              </li>
              <li className="">
                <a href="/" target="_blank" aria-label="facebook">
                  <img src={twitter} className="bg-white h-10 rounded-full" />
                </a>
              </li>
              <li className="">
                <a href="/" target="_blank" aria-label="facebook">
                  <img
                    src={instagram}
                    className="bg-white h-10 rounded-full mb-8 "
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-gray-400">
              © 1998-2024 Rudy's Texas Bar-B-Q, LLC ®.
            </div>
            <div className="text-gray-400 mb-5">
              Use of this site constitutes acceptance of our
              <a href="" className="text-gray-400">
                Terms and Conditions{" "}
              </a>
              and
              <a href="" className="text-gray-400">
                {" "}
                Privacy Policy
              </a>
            </div>
            <div className="text-gray-400">
              REAL TEXAS BAR-B-Q ® | 877-609-3337
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
