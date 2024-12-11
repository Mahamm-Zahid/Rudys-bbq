import React, { useCallback, useEffect, useMemo, useState } from "react";
import Wall from "../assets/images/aboutwall.webp";
import lable from "../assets/images/featured_products.png";
import Card1 from "../assets/images/card1.jpg";
import Card2 from "../assets/images/card2.jpg";
import Card3 from "../assets/images/card3.jpg";
import Card4 from "../assets/images/card4.jpg";
import Card5 from "../assets/images/card5.jpg";
import Card6 from "../assets/images/card6.jpg";
import Card7 from "../assets/images/card7.jpg";
import Card8 from "../assets/images/card8.jpg";
import Card9 from "../assets/images/card9.jpg";
import Card10 from "../assets/images/card10.jpg";
import Basket from "../assets/images/clean-linen-basket.png";
import "/Rubys-bbq/my-react-app/ecommerce-website/src/styles.css";
import Input from "../components/Inputs/input";

function products() {
  const backgroundStyle = {
    backgroundImage: `url(${Wall})`,
    backgroundSize: "cover",
    padding: "5% 0 0%", // Use responsive units for padding
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const [form, setForm] = useState({
    f_name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div style={backgroundStyle} className="py-75">
      <div className="relative max-w-1170px w-full m-0">
        <div className="text-center max-w-full flex justify-center items-center">
          <img
            src={lable}
            className="w-1/2 h-15 text-center flex justify-center items-center"
          />
        </div>
        <div className="mt-20 flex justify-center">
          <div className="grid grid-cols-4 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60  hover:shadow-gray-500 ">
              <img
                className="w-full object-cover object-center"
                src={Card1}
                alt="Product Image"
              />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                    Big Tex
                  </p>
                </div>
                <div className="flex">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                    64.99
                  </h2>
                  <img
                    src={Basket}
                    className="h-10 relative left-24 bg-yellow-300 block"
                  />
                </div>
              </div>
            </div>

            <div className="2">
              <div className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card2}
                  alt="Product Image"
                />

                <div className="">
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="2">
              <div className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card3}
                  alt="Product Image"
                />

                <div className="">
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="2">
              <div className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card4}
                  alt="Product Image"
                />

                <div className="">
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="2">
              <div className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card5}
                  alt="Product Image"
                />

                <div className="">
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="2">
              <div className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card6}
                  alt="Product Image"
                />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="2">
              <div class="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card7}
                  alt="Product Image"
                />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="2">
              <div className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card8}
                  alt="Product Image"
                />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="2">
              <div className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card9}
                  alt="Product Image"
                />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div class="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg max-w-60 hover:shadow-gray-500">
                <img
                  className="w-full object-cover object-center"
                  src={Card10}
                  alt="Product Image"
                />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="h-10 mb-2 px-4 py-2 text-white bg-black block w-full">
                      Big Tex
                    </p>
                  </div>
                  <div className="flex">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 px-4 py-2">
                      64.99
                    </h2>
                    <img
                      src={Basket}
                      className="h-10 relative left-24 bg-yellow-300 block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-16 lg:py-20">
        <button className="bg-red-600 text-white font-bold px-6 py-2 sm:px-8 sm:py-2.5 md:text-2xl border-gray-200 overflow-hidden shadow-lg hover:shadow-gray-500">
          SEE MORE
        </button>
      </div>

      <div className="bg-yellow-300 flex flex-col md:flex-row w-full">
        <h2 className="order-1 px-4 md:px-8 lg:px-20 py-4 md:py-6 text-lg md:text-2xl font-bold italic mb-4 md:mb-0">
          JOIN OUR EMAIL FOR SPECIAL OFFERS!
        </h2>

        <form className="max-w-full md:max-w-sm order-2 md:order-4">
          <div className="mb-4 flex flex-col md:flex-row py-4 md:py-6">
            <Input
              type="text"
              name="f_name"
              placeholder="Name"
              required={true}
              handleChange={handleChange}
            />
          </div>
        </form>

        <h2 className="order-4 md:order-5 hidden md:block px-4 md:px-8 lg:px-20 py-4 md:py-6 text-lg md:text-2xl font-bold italic">
          AND
        </h2>

        <form className="max-w-full md:max-w-sm order-5 md:order-6">
          <div className="mb-4 flex flex-col md:flex-row py-4 md:py-6 px-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required={true}
              handleChange={handleChange}
            />
          </div>
        </form>

        <form className="max-w-full md:max-w-sm order-6 md:order-7">
          <div className="mb-4 flex flex-col md:flex-row py-4 md:py-6 px-4">
            <input
              type="submit"
              id="submit"
              className="shadow-sm bg-red-600 border border-gray-300 text-white text-sm block w-full md:w-48 p-2.5 md:mr-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value="Send"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default products;
