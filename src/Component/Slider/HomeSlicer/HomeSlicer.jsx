import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../../../assets/HomeSlider/1.jpg";
import img2 from "../../../assets/HomeSlider/2.jpg";
import img3 from "../../../assets/HomeSlider/3.jpg";
import "./HomeSlicer.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomeSlicer = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
      <div className="max-w-[100rem] w-full mx-auto xl:px-8">

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative w-full">
              <img src={img1} alt="" className="w-full"/>
              <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white px-[5%] bg-black bg-opacity-50">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                    Share a Meal, Share a Smile
                  </h1>
                  <p className="my-2 sm:my-5 text-xs sm:text-lg">
                    Online platform linking surplus food donors with organizations, reducing waste and feeding those in need.
                  </p>
                  <Link to={"/available-food"} className="flex justify-center items-center">
                    <button className="text-xs md:text-base flex justify-center items-center gap-1 border border-white px-2 py-1 md:px-3 md:py-2 text-white rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                      Available Food<AiOutlineArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full">
              <img src={img2} alt="" className="w-full"/>
              <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white px-[5%] bg-black bg-opacity-50">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                    Share a Meal, Share a Smile
                  </h1>
                  <p className="my-2 sm:my-5 text-xs sm:text-lg">
                    Online platform linking surplus food donors with organizations, reducing waste and feeding those in need.
                  </p>
                  <Link to={"/available-food"} className="flex justify-center items-center">
                    <button className="text-xs md:text-base flex justify-center items-center gap-1 border border-white px-2 py-1 md:px-3 md:py-2 text-white rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                      Available Food<AiOutlineArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full">
              <img src={img3} alt="" className="w-full"/>
              <div className="absolute flex justify-center items-center text-center h-full top-0 w-full text-white px-[5%] bg-black bg-opacity-50">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                    Share a Meal, Share a Smile
                  </h1>
                  <p className="my-2 sm:my-5 text-xs sm:text-lg">
                    Online platform linking surplus food donors with organizations, reducing waste and feeding those in need.
                  </p>
                  <Link to={"/available-food"} className="flex justify-center items-center">
                    <button className="text-xs md:text-base flex justify-center items-center gap-1 border border-white px-2 py-1 md:px-3 md:py-2 text-white rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                      Available Food<AiOutlineArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    );
};

export default HomeSlicer;