import React from "react";
import stationImage from "../assets/images/station.jpg";
import Wall from "../assets/images/aboutwall.webp";
import "/Rubys-bbq/my-react-app/ecommerce-website/src/styles.css";

const about = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Wall})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "130vh", // Adjust the minimum height as needed
  };

  return (
    <div style={backgroundStyle}>
      <div className="container mx-auto w-full h-full">
        <div className="container_carousel w-full flex flex-col md:flex-row">
          {" "}
          {/* Updated: flex direction for different screen sizes */}
          <div className="carousel w-full md:w-1/2 inline-block max-w-610 py-0 pt-20 relative">
            {" "}
            {/* Updated: width for different screen sizes */}
            <div className="item inline-block shadow-md max-w-610 bg-white">
              <img
                src={stationImage}
                width="451"
                height="289"
                alt="Rudy's station"
                className="cursor-pointer transform hover:-rotate-3 transition-transform duration-300 align-middle border-2 border-gray-300"
              />
            </div>
          </div>
          <div className="info_main w-full md:w-1/2 inline-block max-w-610 py-0 pt-20 ml-0 md:ml-10 relative">
            <h2 className="h3 font-house-slant text-4xl tracking-wider m-0 mt-5 mb-3 font-semibold leading-tight">
              A little about us...
            </h2>
            <p className="block my-4 mx-0 mb-5">
              Just north of San Antonio, at the edge of the Texas Hill Country,
              sits the small community of Leon Springs. Founded in the 1800s by
              Max Aue, Leon Spring's cityscape changed when Max's son, Rudolph,
              opened a one-stop gas station, garage, and grocery store.
            </p>
            <p className="block my-4 mx-0 mb-5">
              Bar-B-Q was added to the operation in 1989, and Rudy's "Country
              Store" and Bar-B-Q has been serving up tasty food ever since. The
              same original recipes that built Rudy's Leon Springs' reputation
              are now available throughout the Southwest.
            </p>
            <p className="block my-4 mx-0 mb-5">
              Our pits are 100% wood-fired with oak, a slower burning wood than
              the mesquite used by others. Along with time and oak, we cook with
              a dry spice that ensures each plate of Rudy's Bar-B-Q is perfectly
              ready for you. Apply some of our famous "<a href="/">Sause</a>"
              and dinner is served.
            </p>
            <p className="block my-4 mx-0 mb-5">
              <a
                href="/"
                className="biglink font-open-sans font-bold text-xl text-red-600 italic"
              >
                Enough about us, check out our menu
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
