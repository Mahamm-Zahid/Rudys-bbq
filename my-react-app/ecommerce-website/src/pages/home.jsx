import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import homeImage1 from "../assets/images/home1.png";
import homeImage2 from "../assets/images/home2.png";
import homeImage3 from "../assets/images/home3.png";
import homeImage4 from "../assets/images/home4.png";
import Fries from "../assets/images/fries.jpg";
import blur from "../assets/images/homeblury.webp";
import Bread from "../assets/images/bread.jpg";

const Home = () => {
  // const [product, setProduct] = useState(0);
  // useLayoutEffect(() => {
  //   console.log("=================");
  // }, []);

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      {/* <div onClick={() => setProduct(product + 1)}>onclicek</div> */}
      <section className="relative h-[80vh] md:h-[70vh] lg:h-[60vh]">
        <Slider ref={sliderRef} {...settings}>
          {/* Slide 1 */}
          <div className="relative w-full h-screen">
            <div
              className="bg-cover bg-center h-full relative"
              style={{ backgroundImage: `url(${Fries})` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <img src={homeImage4} alt="Bar B Q" />
                <button
                  className="bg-red-600 text-white font-bold px-6 py-2 text-2xl"
                  onClick={goToNextSlide}
                >
                  INQUIRE NOW
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative w-full h-screen">
            <div
              className="bg-cover bg-center h-full relative"
              style={{ backgroundImage: `url(${blur})` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <img src={homeImage3} alt="Bar B Q" />
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative w-full h-screen">
            <div
              className="bg-cover bg-center h-full relative"
              style={{ backgroundImage: `url(${Bread})` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <img src={homeImage2} alt="Bar B Q" />
                <button
                  className="bg-red-600 hover:bg-blue-700 text-white font-bold px-6 py-2 text-2xl"
                  onClick={goToPrevSlide}
                >
                  PURCHASE NOW
                </button>
              </div>
            </div>
          </div>
        </Slider>

        {/* Controls */}
        <div className="controls absolute top-1/2 flex justify-between items-center w-full ">
          <button
            className="prev relative top-1/2 z-50 left-0 transform -translate-y-1/2  font-bold py-10 px-14 rounded hidden lg:block"
            onClick={goToPrevSlide}
            style={{ backgroundColor: "rgba(25, 11, 7, 0.5)" }}
          >
            <span className="text-white opacity-100">Gift Cards</span>
          </button>

          <button
            className=" relative top-1/2 z-50 left-0 transform -translate-y-1/2   font-bold py-10 px-14 rounded hidden lg:block"
            onClick={goToNextSlide}
            style={{ backgroundColor: "rgba(25, 11, 7, 0.5)" }}
          >
            <span className="text-white opacity-100">Gift Cards</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
