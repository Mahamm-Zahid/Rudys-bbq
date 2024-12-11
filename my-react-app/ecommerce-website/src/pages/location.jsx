import React from "react";
import Table from "../assets/images/sittings.jpg";
import barbq from "../assets/images/bar_b_q.png";
import "/Rubys-bbq/my-react-app/ecommerce-website/src/styles.css";

function Location() {
  const backgroundStyle = {
    backgroundImage: `url(${Table})`,
    backgroundSize: "cover",
    padding: "15% 0 8%", // Use responsive units for padding
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const yellowBoxStyle = {
    maxWidth: "1234px", // Adjust the width as needed
    width: "100%",
  };

  return (
    <div style={backgroundStyle}>
      <div className="mx-auto max-w-screen-xl relative" style={yellowBoxStyle}>
        <div className="bg-yellow-300 font-oswald font-normal text-center shadow-md flex justify-center">
          <div className="p-0 pb-6">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-house-slant capitalize font-bold italic">
              Enter your location below <br /> to see our menu
            </h3>

            <div className="shadow-gray-700 m-4 md:m-8 mb-6 md:mb-8 relative border-collapse flex h-10">
              <input
                type="text"
                placeholder="City, State or Zip"
                name="q"
                className="cus_input input-lg px-3 py-2 text-sm  font-semibold border rounded-l-none border-r-none border-gray-300 text-gray-600 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              <span
                id="locationSearchFind"
                className="cus_input input-group-addon text-base  lg:text-xl font-bold cursor-pointer px-4 py-3 text-center border h-full text-white bg-black flex items-center"
              >
                FIND
              </span>
            </div>

            <div>
              <p
                style={{ fontSize: "12px" }}
                className="text-15px  md:text-base lg:text-lg font-bold"
              >
                Simply type your Zip or City, State and click Find.
              </p>
            </div>
          </div>
        </div>

        <div className="txt_bar_b_q text-center pt-4 md:pt-8 block">
          <img
            className="mx-auto max-w-full h-auto md:h-12 lg:h-16 mt-4"
            src={barbq}
            alt="Real Texas Bar-B-Q"
          />
        </div>
      </div>
    </div>
  );
}

export default Location;
